"""
Script to create sample jobs for testing
Run this from the backend directory: python create_sample_jobs.py
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
import random

MONGO_URL = "mongodb+srv://athish:Athish2006@cluster0.zs2ud.mongodb.net/?appName=Cluster0"

async def create_sample_jobs():
    client = AsyncIOMotorClient(MONGO_URL)
    db = client["fite"]
    jobs_collection = db["jobs"]
    
    # Clear existing sample jobs (optional)
    # await jobs_collection.delete_many({})
    
    # Sample daily wage jobs with varied timestamps
    daily_jobs = [
        {
            "title": "Plumbing Work Needed",
            "description": "Need experienced plumber for bathroom renovation. Must have own tools and 3+ years experience. Work includes fixing leaks, installing new fixtures, and checking water pressure. Materials will be provided.",
            "job_type": "daily_wage",
            "category": "plumbing",
            "location": {
                "address": "123 MG Road, Indiranagar",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9716, "lng": 77.6406}
            },
            "salary": {
                "amount": 800,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer1@test.com",
            "employer_name": "Rahul Sharma",
            "employer_contact": "+91 9876543210",
            "requirements": ["3+ years experience", "Own tools"],
            "skills_required": ["Plumbing", "Pipe Fitting", "Leak Repair"],
            "positions_available": 1,
            "work_hours": "9 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=1),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=2),
            "updated_at": datetime.utcnow() - timedelta(hours=2),
            "is_active": True
        },
        {
            "title": "Electrical Wiring - House",
            "description": "Looking for licensed electrician for complete house rewiring. Safety equipment provided. Must be familiar with modern electrical standards and safety protocols. 2-day project.",
            "job_type": "daily_wage",
            "category": "electrical",
            "location": {
                "address": "456 80 Feet Road, Koramangala",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9352, "lng": 77.6245}
            },
            "salary": {
                "amount": 1000,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer2@test.com",
            "employer_name": "Priya Patel",
            "employer_contact": "+91 9876543211",
            "requirements": ["Licensed electrician", "2+ years experience"],
            "skills_required": ["Electrical", "Wiring", "Circuit Repair"],
            "positions_available": 2,
            "work_hours": "10 AM - 5 PM",
            "start_date": datetime.utcnow() + timedelta(days=2),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=5),
            "updated_at": datetime.utcnow() - timedelta(hours=5),
            "is_active": True
        },
        {
            "title": "House Painting - 3BHK",
            "description": "Need painters for 3BHK apartment. Paint and materials provided. 2-3 days work. Must have experience with wall preparation, primer application, and finishing work.",
            "job_type": "daily_wage",
            "category": "painting",
            "location": {
                "address": "789 Sector 7, HSR Layout",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9121, "lng": 77.6446}
            },
            "salary": {
                "amount": 900,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer3@test.com",
            "employer_name": "Vikram Kumar",
            "employer_contact": "+91 9876543212",
            "requirements": ["Experience with wall painting"],
            "skills_required": ["Painting", "Wall Preparation", "Color Mixing"],
            "positions_available": 3,
            "work_hours": "8 AM - 4 PM",
            "start_date": datetime.utcnow() + timedelta(days=1),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=8),
            "updated_at": datetime.utcnow() - timedelta(hours=8),
            "is_active": True
        },
        {
            "title": "Carpenter - Furniture Assembly",
            "description": "Looking for skilled carpenter to assemble bedroom furniture set. Includes wardrobe, bed frame, and side tables. Tools must be brought. Experience with modular furniture required.",
            "job_type": "daily_wage",
            "category": "carpentry",
            "location": {
                "address": "234 JP Nagar 2nd Phase",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9081, "lng": 77.5855}
            },
            "salary": {
                "amount": 850,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer4@test.com",
            "employer_name": "Anjali Reddy",
            "employer_contact": "+91 9876543213",
            "requirements": ["4+ years carpentry experience", "Own tools required"],
            "skills_required": ["Carpentry", "Furniture Assembly", "Wood Working"],
            "positions_available": 1,
            "work_hours": "9 AM - 5 PM",
            "start_date": datetime.utcnow() + timedelta(hours=12),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=12),
            "updated_at": datetime.utcnow() - timedelta(hours=12),
            "is_active": True
        },
        {
            "title": "AC Installation & Service",
            "description": "Need AC technician for installation of 2 split ACs and servicing of 1 window AC. Must have experience with Daikin and LG brands. Safety harness and equipment provided.",
            "job_type": "daily_wage",
            "category": "ac_repair",
            "location": {
                "address": "567 Bannerghatta Road, BTM Layout",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9165, "lng": 77.6101}
            },
            "salary": {
                "amount": 1200,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer5@test.com",
            "employer_name": "Suresh Iyer",
            "employer_contact": "+91 9876543214",
            "requirements": ["Certified AC technician", "Experience with split ACs"],
            "skills_required": ["AC Installation", "AC Repair", "Refrigeration"],
            "positions_available": 1,
            "work_hours": "10 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=3),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=18),
            "updated_at": datetime.utcnow() - timedelta(hours=18),
            "is_active": True
        },
        {
            "title": "Gardening & Lawn Maintenance",
            "description": "Looking for gardener to maintain villa lawn and garden. Tasks include mowing, trimming hedges, planting new flowers, and fertilizing. All equipment and materials provided. Weekly work available.",
            "job_type": "daily_wage",
            "category": "gardening",
            "location": {
                "address": "890 Sarjapur Road, Carmelaram",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9010, "lng": 77.7341}
            },
            "salary": {
                "amount": 600,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer6@test.com",
            "employer_name": "Meera Nair",
            "employer_contact": "+91 9876543215",
            "requirements": ["Experience with lawn maintenance"],
            "skills_required": ["Gardening", "Lawn Care", "Plant Knowledge"],
            "positions_available": 1,
            "work_hours": "7 AM - 12 PM",
            "start_date": datetime.utcnow() + timedelta(days=1),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=24),
            "updated_at": datetime.utcnow() - timedelta(hours=24),
            "is_active": True
        },
        {
            "title": "House Cleaning - Deep Clean",
            "description": "Need 2 cleaners for deep cleaning of 4BHK house. Includes dusting, mopping, bathroom cleaning, kitchen deep clean, and window cleaning. Cleaning supplies provided.",
            "job_type": "daily_wage",
            "category": "cleaning",
            "location": {
                "address": "345 Hebbal, Manyata Tech Park Area",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 13.0358, "lng": 77.6200}
            },
            "salary": {
                "amount": 700,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer7@test.com",
            "employer_name": "Karthik Rao",
            "employer_contact": "+91 9876543216",
            "requirements": ["Experience with house cleaning"],
            "skills_required": ["House Cleaning", "Deep Cleaning", "Organization"],
            "positions_available": 2,
            "work_hours": "9 AM - 5 PM",
            "start_date": datetime.utcnow() + timedelta(hours=18),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=6),
            "updated_at": datetime.utcnow() - timedelta(hours=6),
            "is_active": True
        },
        {
            "title": "Masonry Work - Wall Construction",
            "description": "Looking for experienced mason for constructing compound wall. Must know how to mix cement, lay bricks properly, and ensure wall strength. 5-day project. Materials provided on site.",
            "job_type": "daily_wage",
            "category": "masonry",
            "location": {
                "address": "678 Kanakapura Road, Uttarahalli",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.8988, "lng": 77.5492}
            },
            "salary": {
                "amount": 950,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer8@test.com",
            "employer_name": "Rajesh Gupta",
            "employer_contact": "+91 9876543217",
            "requirements": ["5+ years masonry experience", "Know cement mixing ratios"],
            "skills_required": ["Masonry", "Brick Laying", "Wall Construction"],
            "positions_available": 2,
            "work_hours": "8 AM - 5 PM",
            "start_date": datetime.utcnow() + timedelta(days=2),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=15),
            "updated_at": datetime.utcnow() - timedelta(hours=15),
            "is_active": True
        },
        {
            "title": "Delivery Helper - Furniture Moving",
            "description": "Need helpers for moving furniture from old apartment to new house. Heavy lifting required. Must be physically fit. Lunch and refreshments provided. One day work.",
            "job_type": "daily_wage",
            "category": "moving",
            "location": {
                "address": "123 Old Airport Road, Marathahalli",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9591, "lng": 77.6974}
            },
            "salary": {
                "amount": 650,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer9@test.com",
            "employer_name": "Deepak Singh",
            "employer_contact": "+91 9876543218",
            "requirements": ["Physically fit", "Experience with moving"],
            "skills_required": ["Heavy Lifting", "Packing", "Careful Handling"],
            "positions_available": 4,
            "work_hours": "8 AM - 4 PM",
            "start_date": datetime.utcnow() + timedelta(hours=24),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=3),
            "updated_at": datetime.utcnow() - timedelta(hours=3),
            "is_active": True
        },
        {
            "title": "Welding Work - Gate Installation",
            "description": "Need experienced welder for designing and installing main gate and side gate for villa. Must have own welding equipment and safety gear. Design assistance required.",
            "job_type": "daily_wage",
            "category": "welding",
            "location": {
                "address": "456 Hennur Road, Kalyan Nagar",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 13.0280, "lng": 77.6385}
            },
            "salary": {
                "amount": 1100,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer10@test.com",
            "employer_name": "Arjun Pillai",
            "employer_contact": "+91 9876543219",
            "requirements": ["Certified welder", "Own equipment", "3+ years experience"],
            "skills_required": ["Welding", "Metal Work", "Gate Installation"],
            "positions_available": 1,
            "work_hours": "9 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=4),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=36),
            "updated_at": datetime.utcnow() - timedelta(hours=36),
            "is_active": True
        },
        {
            "title": "Tile Installation - Bathroom",
            "description": "Looking for tile installer for 2 bathroom floors and walls. Tiles, cement, and all materials provided. Must have good finishing skills and experience with waterproofing.",
            "job_type": "daily_wage",
            "category": "tiling",
            "location": {
                "address": "789 Jayanagar 4th Block",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9250, "lng": 77.5937}
            },
            "salary": {
                "amount": 880,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer11@test.com",
            "employer_name": "Lakshmi Venkat",
            "employer_contact": "+91 9876543220",
            "requirements": ["Experience with bathroom tiling", "Knowledge of waterproofing"],
            "skills_required": ["Tiling", "Grouting", "Floor Leveling"],
            "positions_available": 1,
            "work_hours": "8:30 AM - 5:30 PM",
            "start_date": datetime.utcnow() + timedelta(days=1),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=10),
            "updated_at": datetime.utcnow() - timedelta(hours=10),
            "is_active": True
        },
        {
            "title": "Driver for Event - One Day",
            "description": "Need experienced driver with own car for wedding event. Must know Bangalore routes well. Pickup and drop for guests at multiple locations. Fuel reimbursed separately.",
            "job_type": "daily_wage",
            "category": "driving",
            "location": {
                "address": "234 Palace Grounds, Rajajinagar",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 13.0049, "lng": 77.5512}
            },
            "salary": {
                "amount": 1500,
                "currency": "INR",
                "period": "day"
            },
            "employer_id": "employer12@test.com",
            "employer_name": "Naveen Kumar",
            "employer_contact": "+91 9876543221",
            "requirements": ["Valid driving license", "Own car", "Good knowledge of Bangalore"],
            "skills_required": ["Driving", "Navigation", "Customer Service"],
            "positions_available": 3,
            "work_hours": "7 AM - 11 PM",
            "start_date": datetime.utcnow() + timedelta(days=5),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=20),
            "updated_at": datetime.utcnow() - timedelta(hours=20),
            "is_active": True
        }
    ]
    
    # Sample long-term jobs
    long_term_jobs = [
        {
            "title": "Frontend Developer",
            "description": "Looking for experienced React developer to join our product team. Work on cutting-edge web applications using React, TypeScript, and modern tools. You'll be responsible for building responsive UIs, integrating APIs, and ensuring great user experience. Great learning opportunities and growth potential.",
            "job_type": "long_term",
            "category": "software",
            "location": {
                "address": "Tech Park, Whitefield",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9698, "lng": 77.7499}
            },
            "salary": {
                "amount": 100000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "techcorp@test.com",
            "employer_name": "TechCorp Solutions",
            "employer_contact": "+91 9876543213",
            "requirements": ["3+ years React experience", "TypeScript", "Team player"],
            "skills_required": ["React", "TypeScript", "JavaScript", "HTML/CSS"],
            "positions_available": 2,
            "work_hours": "Flexible",
            "start_date": datetime.utcnow() + timedelta(days=15),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=72),
            "updated_at": datetime.utcnow() - timedelta(hours=72),
            "is_active": True
        },
        {
            "title": "UI/UX Designer",
            "description": "Join our design team to create beautiful user experiences for our flagship products. You'll work on mobile and web applications, conducting user research, creating wireframes, and building high-fidelity prototypes. Portfolio required.",
            "job_type": "long_term",
            "category": "design",
            "location": {
                "address": "Indiranagar Creative Hub",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9716, "lng": 77.5946}
            },
            "salary": {
                "amount": 80000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "designhub@test.com",
            "employer_name": "DesignHub India",
            "employer_contact": "+91 9876543214",
            "requirements": ["2+ years experience", "Figma proficiency", "Portfolio required"],
            "skills_required": ["Figma", "User Research", "Prototyping", "UI Design"],
            "positions_available": 1,
            "work_hours": "9 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=20),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=96),
            "updated_at": datetime.utcnow() - timedelta(hours=96),
            "is_active": True
        },
        {
            "title": "Full Stack Developer - MERN Stack",
            "description": "Seeking talented full stack developer with expertise in MongoDB, Express, React, and Node.js. You'll build and maintain our SaaS platform, work with APIs, and implement new features. Remote work option available after probation period.",
            "job_type": "long_term",
            "category": "software",
            "location": {
                "address": "Koramangala 5th Block",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9352, "lng": 77.6245}
            },
            "salary": {
                "amount": 120000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "startup@test.com",
            "employer_name": "InnovateTech",
            "employer_contact": "+91 9876543222",
            "requirements": ["4+ years full stack experience", "MERN stack expertise", "Good communication"],
            "skills_required": ["MongoDB", "Express", "React", "Node.js", "AWS"],
            "positions_available": 1,
            "work_hours": "10 AM - 7 PM",
            "start_date": datetime.utcnow() + timedelta(days=10),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=48),
            "updated_at": datetime.utcnow() - timedelta(hours=48),
            "is_active": True
        },
        {
            "title": "Digital Marketing Manager",
            "description": "Looking for experienced digital marketing professional to lead our marketing team. Responsibilities include SEO, SEM, social media marketing, content strategy, and analytics. Must have proven track record of successful campaigns.",
            "job_type": "long_term",
            "category": "marketing",
            "location": {
                "address": "HSR Layout Sector 1",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9121, "lng": 77.6446}
            },
            "salary": {
                "amount": 90000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "marketing@test.com",
            "employer_name": "MarketPro Agency",
            "employer_contact": "+91 9876543223",
            "requirements": ["5+ years digital marketing", "Team management experience", "Analytics proficiency"],
            "skills_required": ["SEO", "Google Ads", "Social Media", "Content Strategy", "Analytics"],
            "positions_available": 1,
            "work_hours": "9:30 AM - 6:30 PM",
            "start_date": datetime.utcnow() + timedelta(days=30),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=120),
            "updated_at": datetime.utcnow() - timedelta(hours=120),
            "is_active": True
        },
        {
            "title": "Data Analyst - Business Intelligence",
            "description": "Join our analytics team to transform data into actionable insights. Work with SQL, Python, Power BI to analyze business metrics, create dashboards, and support data-driven decision making. Experience with statistical analysis required.",
            "job_type": "long_term",
            "category": "data_science",
            "location": {
                "address": "Electronic City Phase 1",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.8456, "lng": 77.6603}
            },
            "salary": {
                "amount": 95000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "dataanalytics@test.com",
            "employer_name": "DataViz Solutions",
            "employer_contact": "+91 9876543224",
            "requirements": ["3+ years analytics experience", "SQL expert", "Python/R knowledge"],
            "skills_required": ["SQL", "Python", "Power BI", "Statistics", "Data Visualization"],
            "positions_available": 2,
            "work_hours": "9 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=25),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=144),
            "updated_at": datetime.utcnow() - timedelta(hours=144),
            "is_active": True
        },
        {
            "title": "Content Writer - Technical Writing",
            "description": "Seeking talented technical content writer to create documentation, blog posts, and marketing content for our software products. Must have excellent English writing skills and ability to explain complex technical concepts simply.",
            "job_type": "long_term",
            "category": "writing",
            "location": {
                "address": "JP Nagar 7th Phase",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.8890, "lng": 77.5779}
            },
            "salary": {
                "amount": 55000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "content@test.com",
            "employer_name": "ContentCraft Media",
            "employer_contact": "+91 9876543225",
            "requirements": ["2+ years technical writing", "Excellent English", "Portfolio required"],
            "skills_required": ["Technical Writing", "Content Creation", "SEO Writing", "Editing"],
            "positions_available": 1,
            "work_hours": "Remote - Flexible",
            "start_date": datetime.utcnow() + timedelta(days=14),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=60),
            "updated_at": datetime.utcnow() - timedelta(hours=60),
            "is_active": True
        },
        {
            "title": "Mobile App Developer - React Native",
            "description": "Looking for React Native developer to build cross-platform mobile applications. You'll work on both iOS and Android apps, integrate native modules, and optimize app performance. Experience with push notifications and app store deployment required.",
            "job_type": "long_term",
            "category": "software",
            "location": {
                "address": "Bellandur Main Road",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9259, "lng": 77.6766}
            },
            "salary": {
                "amount": 110000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "mobiledev@test.com",
            "employer_name": "AppBuilders Inc",
            "employer_contact": "+91 9876543226",
            "requirements": ["3+ years React Native", "Published apps on stores", "Native module experience"],
            "skills_required": ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
            "positions_available": 2,
            "work_hours": "10 AM - 7 PM",
            "start_date": datetime.utcnow() + timedelta(days=18),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=84),
            "updated_at": datetime.utcnow() - timedelta(hours=84),
            "is_active": True
        },
        {
            "title": "HR Manager - Talent Acquisition",
            "description": "Join our HR team as Talent Acquisition Manager. Responsible for end-to-end recruitment, employer branding, and building talent pipeline. Must have experience in tech hiring and strong communication skills.",
            "job_type": "long_term",
            "category": "human_resources",
            "location": {
                "address": "MG Road Metro Area",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9759, "lng": 77.6061}
            },
            "salary": {
                "amount": 75000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "hr@test.com",
            "employer_name": "TalentHunt Consultancy",
            "employer_contact": "+91 9876543227",
            "requirements": ["4+ years HR experience", "Tech recruitment experience", "Good interpersonal skills"],
            "skills_required": ["Recruitment", "Interviewing", "HR Operations", "Communication"],
            "positions_available": 1,
            "work_hours": "9 AM - 6 PM",
            "start_date": datetime.utcnow() + timedelta(days=22),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=108),
            "updated_at": datetime.utcnow() - timedelta(hours=108),
            "is_active": True
        },
        {
            "title": "DevOps Engineer - Cloud Infrastructure",
            "description": "Seeking DevOps engineer to manage cloud infrastructure on AWS/Azure. Responsibilities include CI/CD pipeline setup, container orchestration with Kubernetes, monitoring, and automation. Strong Linux and scripting skills required.",
            "job_type": "long_term",
            "category": "software",
            "location": {
                "address": "Outer Ring Road, Marathahalli",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9591, "lng": 77.6974}
            },
            "salary": {
                "amount": 130000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "devops@test.com",
            "employer_name": "CloudOps Systems",
            "employer_contact": "+91 9876543228",
            "requirements": ["4+ years DevOps experience", "AWS/Azure certified", "Kubernetes experience"],
            "skills_required": ["AWS", "Docker", "Kubernetes", "Linux", "Terraform", "CI/CD"],
            "positions_available": 1,
            "work_hours": "Flexible (On-call support)",
            "start_date": datetime.utcnow() + timedelta(days=12),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=56),
            "updated_at": datetime.utcnow() - timedelta(hours=56),
            "is_active": True
        },
        {
            "title": "Product Manager - SaaS Platform",
            "description": "Looking for experienced product manager to lead our B2B SaaS product. You'll define product strategy, work with engineering and design teams, conduct market research, and drive product roadmap. MBA preferred but not mandatory.",
            "job_type": "long_term",
            "category": "product_management",
            "location": {
                "address": "Koramangala 8th Block",
                "city": "Bangalore",
                "state": "Karnataka",
                "coordinates": {"lat": 12.9279, "lng": 77.6271}
            },
            "salary": {
                "amount": 140000,
                "currency": "INR",
                "period": "monthly"
            },
            "employer_id": "product@test.com",
            "employer_name": "SaaS Innovations Pvt Ltd",
            "employer_contact": "+91 9876543229",
            "requirements": ["5+ years product management", "B2B SaaS experience", "Strong analytical skills"],
            "skills_required": ["Product Strategy", "Analytics", "Roadmap Planning", "Stakeholder Management"],
            "positions_available": 1,
            "work_hours": "10 AM - 7 PM",
            "start_date": datetime.utcnow() + timedelta(days=35),
            "status": "open",
            "applicants": [],
            "created_at": datetime.utcnow() - timedelta(hours=168),
            "updated_at": datetime.utcnow() - timedelta(hours=168),
            "is_active": True
        }
    ]
    
    # Insert jobs
    all_jobs = daily_jobs + long_term_jobs
    
    print(f"📝 Creating {len(all_jobs)} sample jobs...")
    print(f"   - {len(daily_jobs)} daily wage jobs")
    print(f"   - {len(long_term_jobs)} long-term jobs")
    print()
    
    result = await jobs_collection.insert_many(all_jobs)
    
    print(f"✅ Successfully created {len(result.inserted_ids)} sample jobs!")
    print()
    print("📍 Daily Wage Jobs (spread across Bangalore):")
    for job in daily_jobs[:5]:  # Show first 5
        print(f"   - {job['title']} at {job['location']['address']} (₹{job['salary']['amount']}/day)")
    print(f"   ... and {len(daily_jobs) - 5} more")
    print()
    print("💼 Long-Term Jobs:")
    for job in long_term_jobs[:5]:  # Show first 5
        print(f"   - {job['title']} at {job['employer_name']} (₹{job['salary']['amount']}/month)")
    print(f"   ... and {len(long_term_jobs) - 5} more")
    print()
    print("🎯 You can now test the Explore Jobs feature!")
    print("   1. Switch to Daily Wage mode → Start Exploring → See nearby jobs on map/cards")
    print("   2. Switch to Long-Term mode → Browse job listings → Apply to jobs")
    
    client.close()

if __name__ == "__main__":
    print("🚀 Starting sample job creation...")
    print()
    asyncio.run(create_sample_jobs())


