"""
Job Service
Business logic for job-related operations
"""
from typing import Optional, List, Dict
from datetime import datetime
from bson import ObjectId
from app.core.database import Database
from app.schemas.job import CreateJobRequest, UpdateJobRequest, ApplyJobRequest
from app.models.job import JobModel, ApplicationModel


class JobService:
    """Service class for job operations"""
    
    @staticmethod
    def format_job_for_frontend(job: Dict) -> Dict:
        """
        Format job data for frontend consumption
        Transforms backend job structure to match frontend expectations
        """
        # Calculate time ago
        created_at = job.get("created_at", datetime.utcnow())
        time_diff = datetime.utcnow() - created_at
        if time_diff.days > 0:
            time_ago = f"{time_diff.days} day{'s' if time_diff.days > 1 else ''} ago"
        elif time_diff.seconds >= 3600:
            hours = time_diff.seconds // 3600
            time_ago = f"{hours} hour{'s' if hours > 1 else ''} ago"
        else:
            minutes = time_diff.seconds // 60
            time_ago = f"{minutes if minutes > 0 else 1} min{'s' if minutes > 1 else ''} ago"
        
        location_data = job.get("location", {})
        salary_data = job.get("salary", {})
        
        if job.get("job_type") == "daily_wage":
            # Format for daily wage frontend
            return {
                "id": str(job.get("_id")),
                "title": job.get("title"),
                "location": location_data.get("city", ""),
                "address": location_data.get("address", ""),
                "pay": f"₹{int(salary_data.get('amount', 0))}/{salary_data.get('period', 'day')}",
                "time": job.get("work_hours", "Flexible"),
                "employer": job.get("employer_name", "Anonymous"),
                "employerRating": 4.5,  # Default rating - can be replaced with real ratings later
                "employerAvatar": f"https://i.pravatar.cc/150?u={job.get('employer_id')}",
                "distance": "N/A",  # Will be calculated on frontend with user location
                "skills": job.get("skills_required", []),
                "description": job.get("description", ""),
                "postedAt": time_ago,
                "coordinates": [
                    location_data.get("coordinates", {}).get("lat", 0),
                    location_data.get("coordinates", {}).get("lng", 0)
                ],
                "employer_id": job.get("employer_id"),
                "category": job.get("category", ""),
                "status": job.get("status", "open")
            }
        else:
            # Format for long-term frontend
            return {
                "id": str(job.get("_id")),
                "title": job.get("title"),
                "company": job.get("employer_name", "Company"),
                "location": f"{location_data.get('city', '')}, {location_data.get('state', '')}",
                "address": location_data.get("address", ""),
                "salary": f"₹{int(salary_data.get('amount', 0))}/{salary_data.get('period', 'month')}",
                "type": "Full-time" if salary_data.get("period") == "monthly" else "Contract",
                "requirements": job.get("requirements", []),
                "skills": job.get("skills_required", []),
                "description": job.get("description", ""),
                "postedAt": time_ago,
                "coordinates": [
                    location_data.get("coordinates", {}).get("lat", 0),
                    location_data.get("coordinates", {}).get("lng", 0)
                ],
                "work_hours": job.get("work_hours"),
                "employer_id": job.get("employer_id"),
                "category": job.get("category", ""),
                "status": job.get("status", "open")
            }
    
    @staticmethod
    async def create_job(job_data: CreateJobRequest, user_id: str, user_name: str) -> Optional[Dict]:
        """
        Create a new job posting
        
        Args:
            job_data: Job creation data
            user_id: ID of the user creating the job
            user_name: Name of the user creating the job
            
        Returns:
            Created job data or None if failed
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            
            # Prepare job document
            job_dict = job_data.model_dump()
            job_dict["employer_id"] = user_id
            job_dict["employer_name"] = user_name
            job_dict["applicants"] = []
            job_dict["created_at"] = datetime.utcnow()
            job_dict["updated_at"] = datetime.utcnow()
            job_dict["is_active"] = True
            job_dict["status"] = "open"
            
            # Insert job into database
            result = await jobs_collection.insert_one(job_dict)
            job_dict["_id"] = str(result.inserted_id)
            
            return job_dict
            
        except Exception as e:
            print(f"Error creating job: {e}")
            return None
    
    @staticmethod
    async def get_job_by_id(job_id: str) -> Optional[Dict]:
        """Get job by ID"""
        try:
            jobs_collection = Database.get_collection("jobs")
            job = await jobs_collection.find_one({"_id": ObjectId(job_id)})
            
            if job:
                job["_id"] = str(job["_id"])
                job["applicants_count"] = len(job.get("applicants", []))
                return job
            return None
            
        except Exception as e:
            print(f"Error getting job: {e}")
            return None
    
    @staticmethod
    async def get_jobs(
        job_type: Optional[str] = None,
        category: Optional[str] = None,
        status: str = "open",
        skip: int = 0,
        limit: int = 20
    ) -> List[Dict]:
        """
        Get list of jobs with filters
        
        Args:
            job_type: Filter by job type (daily_wage or long_term)
            category: Filter by category
            status: Filter by status (default: open)
            skip: Number of records to skip
            limit: Maximum records to return
            
        Returns:
            List of jobs
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            
            # Build query filter
            query = {"is_active": True}
            if job_type:
                query["job_type"] = job_type
            if category:
                query["category"] = category
            if status:
                query["status"] = status
            
            # Fetch jobs
            cursor = jobs_collection.find(query).sort("created_at", -1).skip(skip).limit(limit)
            jobs = await cursor.to_list(length=limit)
            
            # Format jobs for frontend
            formatted_jobs = []
            for job in jobs:
                job["_id"] = str(job["_id"])
                formatted_job = JobService.format_job_for_frontend(job)
                formatted_jobs.append(formatted_job)
            
            return formatted_jobs
            
        except Exception as e:
            print(f"Error getting jobs: {e}")
            return []
    
    @staticmethod
    async def get_nearby_jobs(
        lat: float,
        lng: float,
        radius_km: float = 10,
        job_type: Optional[str] = None,
        limit: int = 20
    ) -> List[Dict]:
        """
        Get jobs near a location
        
        Args:
            lat: User latitude
            lng: User longitude
            radius_km: Search radius in kilometers
            job_type: Filter by job type
            limit: Maximum number of results
            
        Returns:
            List of nearby jobs with distance
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            
            # Build query
            query = {"is_active": True, "status": "open"}
            if job_type:
                query["job_type"] = job_type
            
            # Fetch all jobs (we'll filter by distance manually)
            cursor = jobs_collection.find(query).sort("created_at", -1).limit(limit * 2)
            jobs = await cursor.to_list(length=limit * 2)
            
            # Calculate distances and filter
            nearby_jobs = []
            for job in jobs:
                job_coords = job.get("location", {}).get("coordinates", {})
                job_lat = job_coords.get("lat")
                job_lng = job_coords.get("lng")
                
                if job_lat and job_lng:
                    # Haversine formula for distance
                    from math import radians, sin, cos, sqrt, atan2
                    R = 6371  # Earth radius in km
                    
                    lat1, lng1 = radians(lat), radians(lng)
                    lat2, lng2 = radians(job_lat), radians(job_lng)
                    
                    dlat = lat2 - lat1
                    dlng = lng2 - lng1
                    
                    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlng/2)**2
                    c = 2 * atan2(sqrt(a), sqrt(1-a))
                    distance = R * c
                    
                    if distance <= radius_km:
                        job["_id"] = str(job["_id"])
                        formatted_job = JobService.format_job_for_frontend(job)
                        formatted_job["distance"] = f"{distance:.1f} km"
                        nearby_jobs.append(formatted_job)
            
            # Sort by distance
            nearby_jobs.sort(key=lambda x: float(x["distance"].split()[0]))
            return nearby_jobs[:limit]
            
        except Exception as e:
            print(f"Error getting nearby jobs: {e}")
            return []
    
    @staticmethod
    async def get_user_posted_jobs(user_id: str) -> List[Dict]:
        """Get all jobs posted by a user"""
        try:
            jobs_collection = Database.get_collection("jobs")
            
            cursor = jobs_collection.find({"employer_id": user_id}).sort("created_at", -1)
            jobs = await cursor.to_list(length=None)
            
            for job in jobs:
                job["_id"] = str(job["_id"])
                job["applicants_count"] = len(job.get("applicants", []))
            
            return jobs
            
        except Exception as e:
            print(f"Error getting user jobs: {e}")
            return []
    
    @staticmethod
    async def update_job(job_id: str, user_id: str, update_data: UpdateJobRequest) -> Optional[Dict]:
        """
        Update a job (only by owner)
        
        Args:
            job_id: ID of job to update
            user_id: ID of user requesting update
            update_data: Data to update
            
        Returns:
            Updated job or None
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            
            # Verify ownership
            job = await jobs_collection.find_one({"_id": ObjectId(job_id), "employer_id": user_id})
            if not job:
                return None
            
            # Prepare update data
            update_dict = {k: v for k, v in update_data.model_dump().items() if v is not None}
            update_dict["updated_at"] = datetime.utcnow()
            
            # Update job
            await jobs_collection.update_one(
                {"_id": ObjectId(job_id)},
                {"$set": update_dict}
            )
            
            # Return updated job
            return await JobService.get_job_by_id(job_id)
            
        except Exception as e:
            print(f"Error updating job: {e}")
            return None
    
    @staticmethod
    async def delete_job(job_id: str, user_id: str) -> bool:
        """
        Delete a job (soft delete - mark as inactive)
        
        Args:
            job_id: ID of job to delete
            user_id: ID of user requesting deletion
            
        Returns:
            True if successful, False otherwise
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            
            result = await jobs_collection.update_one(
                {"_id": ObjectId(job_id), "employer_id": user_id},
                {"$set": {"is_active": False, "updated_at": datetime.utcnow()}}
            )
            
            return result.modified_count > 0
            
        except Exception as e:
            print(f"Error deleting job: {e}")
            return False
    
    @staticmethod
    async def apply_to_job(job_id: str, user_id: str, user_name: str, user_contact: str, application_data: ApplyJobRequest) -> Optional[Dict]:
        """
        Apply to a job
        
        Args:
            job_id: ID of job to apply to
            user_id: ID of applicant
            user_name: Name of applicant
            user_contact: Contact of applicant
            application_data: Application details
            
        Returns:
            Application data or None
        """
        try:
            jobs_collection = Database.get_collection("jobs")
            applications_collection = Database.get_collection("applications")
            
            # Check if job exists and is open
            job = await jobs_collection.find_one({"_id": ObjectId(job_id), "status": "open", "is_active": True})
            if not job:
                return None
            
            # Check if user already applied
            existing = await applications_collection.find_one({"job_id": job_id, "applicant_id": user_id})
            if existing:
                return None  # Already applied
            
            # Create application
            application = {
                "job_id": job_id,
                "applicant_id": user_id,
                "applicant_name": user_name,
                "applicant_contact": user_contact,
                "cover_letter": application_data.cover_letter,
                "experience": application_data.experience,
                "status": "pending",
                "applied_at": datetime.utcnow(),
                "reviewed_at": None
            }
            
            result = await applications_collection.insert_one(application)
            application["_id"] = str(result.inserted_id)
            
            # Add applicant to job's applicants list
            await jobs_collection.update_one(
                {"_id": ObjectId(job_id)},
                {"$push": {"applicants": user_id}}
            )
            
            return application
            
        except Exception as e:
            print(f"Error applying to job: {e}")
            return None
    
    @staticmethod
    async def get_job_applicants(job_id: str, employer_id: str) -> List[Dict]:
        """Get all applicants for a job (employer only)"""
        try:
            jobs_collection = Database.get_collection("jobs")
            applications_collection = Database.get_collection("applications")
            
            # Verify ownership
            job = await jobs_collection.find_one({"_id": ObjectId(job_id), "employer_id": employer_id})
            if not job:
                return []
            
            # Get applications
            cursor = applications_collection.find({"job_id": job_id}).sort("applied_at", -1)
            applications = await cursor.to_list(length=None)
            
            for app in applications:
                app["_id"] = str(app["_id"])
            
            return applications
            
        except Exception as e:
            print(f"Error getting applicants: {e}")
            return []
    
    @staticmethod
    async def get_user_applications(user_id: str) -> List[Dict]:
        """Get all applications submitted by a user"""
        try:
            applications_collection = Database.get_collection("applications")
            
            cursor = applications_collection.find({"applicant_id": user_id}).sort("applied_at", -1)
            applications = await cursor.to_list(length=None)
            
            for app in applications:
                app["_id"] = str(app["_id"])
            
            return applications
            
        except Exception as e:
            print(f"Error getting user applications: {e}")
            return []
