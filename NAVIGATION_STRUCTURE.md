# FITE App - Complete Navigation Structure

## Overview: Hybrid Workforce Ecosystem
This document maps out all routing and navigation flows for the FITE (Flexible Integrated Task Exchange) platform, which serves two distinct user groups:

### 1. **Daily Wage Mode** (Blue Collar - "Rapido" Engine)
Gig workers seeking immediate, location-based work opportunities

### 2. **Long-term Mode** (White Collar - "Naukri" Engine)
Career professionals looking for full-time positions and internships

---

## Route Structure

### Public Routes
```
/login → LoginSignup.tsx (Entry point for authentication)
```

### Protected Routes (Requires Authentication)
All routes below are wrapped in Layout.tsx with navigation sidebar

```
/home → Home.tsx
├─ Main dashboard
└─ Overview of activities

/explore-jobs → ExploreJobs.tsx ⭐
├─ DAILY MODE:
│  ├─ Start Exploring button → Requests geolocation
│  ├─ Shows nearby jobs within radius (2km, 5km, 10km, 20km)
│  ├─ Filter by distance & pay range
│  ├─ View modes: Card grid | Interactive map
│  ├─ Click job → Job detail modal with:
│  │  ├─ Call Employer button
│  │  ├─ Negotiate Price button
│  │  └─ Accept Job button → Apply → Success modal
│  └─ Success modal options:
│     ├─ Continue Exploring
│     └─ View My Applications → /applied-jobs
│
└─ LONG-TERM MODE:
   ├─ Auto-loads all long-term jobs
   ├─ Card grid display
   ├─ Apply Now button → Apply → Success modal
   └─ Success modal options:
      ├─ Continue Exploring
      └─ View My Applications → /applied-jobs

/applied-jobs → AppliedJobs.tsx
├─ Shows all applications submitted by user
├─ Filter by date (today, yesterday, this week, this month, all)
├─ View modes: Card | List
├─ Application status: Applied | Completed | Cancelled
├─ Actions:
│  ├─ View application details
│  └─ Cancel application (before employer accepts)
└─ Applications data fetched from: GET /api/applications/my-applications

/posted-jobs → PostedJobs.tsx
├─ Shows all jobs posted by employer (user)
├─ Filter by category and status
├─ "Post New Job" button → Slide-over drawer with multi-step form
│  ├─ Step 1: Details (title, category)
│  ├─ Step 2: Description
│  ├─ Step 3: Location (daily) | Requirements (long-term)
│  └─ Step 4: Pay & Time (daily) | Compensation (long-term)
├─ Click job card → /job-detail/:mode/:jobId
└─ "View Applicants" button → /applicants/:mode/:jobId

/job-detail/:mode/:jobId → JobDetail.tsx
├─ Full job details for jobs posted by employer
├─ Shows: title, description, location, pay, requirements
├─ Nearby workers functionality (for daily jobs)
├─ "View Responses" button → /job-responses/:mode/:jobId
└─ Back button → /posted-jobs

/applicants/:mode/:jobId → Applicants.tsx
├─ List of all applicants for a specific job
├─ For each applicant shows:
│  ├─ Name, rating, distance
│  ├─ Resume (long-term) | Skills (daily)
│  └─ Actions: Accept | Reject | Negotiate (daily)
├─ Filter applicants by: All | Pending | Accepted | Rejected
└─ Back button → /posted-jobs

/job-responses/:mode/:jobId → JobResponses.tsx
├─ Dashboard for managing all responses for a job
├─ Shows applications grouped by status
├─ DAILY MODE: DailyWageJobResponses.tsx
│  ├─ Negotiation interface
│  ├─ Price adjustment controls
│  ├─ Accept/Reject workers
│  └─ Real-time status updates
│
└─ LONG-TERM MODE: LongTermJobResponses.tsx
   ├─ Resume viewer
   ├─ ML Match score display (0-100%)
   ├─ Cover letter preview
   ├─ Download all resumes (ZIP)
   └─ Shortlist candidates

/post-daily-job → PostDailyJob.tsx
├─ Dedicated page for posting daily wage jobs
├─ Geofence settings (5km default, expandable to 20km)
├─ Travel charge feature (for radius expansion)
└─ Auto-notification to nearby workers

/post-long-term-job → PostLongTermJob.tsx
├─ Dedicated page for posting long-term positions
├─ Resume parsing integration (ML model)
├─ Skill tag extraction
└─ Daily digest email scheduling

/settings → UserSettings.tsx
├─ User profile management
├─ Notification preferences
├─ Privacy settings
└─ Account settings
```

---

## Key Navigation Flows

### Flow 1: Worker Discovers & Applies for Daily Wage Job
```
1. /login → Authenticate
2. /home → Toggle to Daily mode
3. /explore-jobs (Daily) → Click "Start Exploring"
4. Browser requests location permission → Allow
5. Backend geospatial query → Returns nearby jobs within 5km
6. Worker applies filters: distance: 5km, pay: ₹800-1200
7. Click job card → Job detail modal opens
8. Review details → Click "Accept Job"
9. Success modal appears
10. Click "View My Applications" → /applied-jobs
11. See newly applied job with status "Applied"
```

### Flow 2: Job Seeker Applies for Long-term Position
```
1. /login → Authenticate
2. /home → Toggle to Long-term mode
3. /explore-jobs (Long-term) → Auto-loads all positions
4. Browse jobs (Frontend Developer, UI/UX Designer)
5. Click "Apply Now" on job card
6. Backend checks resume uploaded → Applies with auto-cover letter
7. Success modal appears → "Application submitted!"
8. Click "View My Applications" → /applied-jobs
9. Job appears with ML match score (85% match)
```

### Flow 3: Employer Posts Job & Reviews Applicants
```
1. /login → Authenticate (employer account)
2. /home → Overview dashboard
3. /posted-jobs → Click "Post New Job"
4. Slide-over drawer → Complete 4-step form
5. Job posted → appears in /posted-jobs list
6. Worker applies from their side
7. Employer receives notification
8. Click "View Applicants" → /applicants/:mode/:jobId
9. Review applicant details, skills, distance
10. Click "Accept" or "Reject"
11. Accepted worker receives notification
12. Job status updates to "Ongoing"
```

### Flow 4: Radius Expansion & Travel Charge (Daily Jobs)
```
1. Employer posts daily job with 5km geofence
2. No workers accept within 30 minutes
3. Employer clicks "Expand Search to City Level"
4. Backend updates radius to 20km
5. System auto-adds ₹100 travel charge
6. Workers 5-20km away receive push notification
7. Worker accepts job with travel allowance included
8. Worker gets: Base pay (₹800) + Travel (₹100) = ₹900
```

---

## API Endpoints Mapping

### Jobs API
```
GET  /api/jobs/nearby?lat={lat}&lng={lng}&radius={radius}&job_type={type}
     → Used by: ExploreJobs (Daily mode)
     → Returns: Jobs within geofence

GET  /api/jobs?job_type=long_term&status=open
     → Used by: ExploreJobs (Long-term mode)
     → Returns: All long-term positions

GET  /api/jobs/:jobId
     → Used by: JobDetail
     → Returns: Single job details

POST /api/jobs
     → Used by: PostDailyJob, PostLongTermJob
     → Creates: New job posting
```

### Applications API
```
POST /api/applications/apply
     → Used by: ExploreJobs (both modes)
     → Body: { job_id, daily_meta } or { job_id, long_term_meta }
     → Creates: New application

GET  /api/applications/my-applications
     → Used by: AppliedJobs
     → Returns: All applications by current user

POST /api/applications/cancel
     → Used by: AppliedJobs
     → Body: { application_id }
     → Cancels: Pending application

GET  /api/applications/job/:jobId
     → Used by: Applicants, JobResponses
     → Returns: All applicants for job
```

---

## Mode Context Integration

The app uses `ModeContext` to maintain state across all pages:

```typescript
const { mode, toggleMode } = useMode();
// mode: 'daily' | 'longterm'
```

**Mode affects:**
- UI color scheme (Emerald for daily, Amber for long-term)
- Data fetching logic
- Filter options
- Job display format
- Application metadata structure

---

## Future Enhancements

### Phase 1 (Current)
✅ Basic navigation structure
✅ Explore jobs with geolocation
✅ Apply to jobs
✅ View applications

### Phase 2 (Next Sprint)
🔜 Real-time negotiation system (daily jobs)
🔜 ML-based job recommendations
🔜 Push notifications integration
🔜 Resume parsing with Spacy/Python microservice

### Phase 3 (Advanced)
🔜 Video interview scheduling
🔜 In-app messaging between employer/worker
🔜 Payment gateway integration
🔜 Rating & review system after job completion
🔜 Smart radius expansion algorithm

---

## Technical Notes

### Route Parameters
- `:mode` → 'daily' | 'longterm'
- `:jobId` → MongoDB ObjectId (string)

### Authentication Flow
All protected routes check for JWT token in httpOnly cookie. If missing:
```
Protected Route → ProtectedRoute.tsx → Checks auth → Redirect to /login
```

### Geospatial Queries (MongoDB)
Backend uses Haversine formula for distance calculation:
```javascript
// jobs.py - get_nearby_jobs()
R = 6371  // Earth radius in km
distance = 2 * R * arcsin(sqrt(sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlon/2)))
```

---

## Component Hierarchy

```
App.tsx
├─ AuthProvider
│  ├─ ModeProvider
│  │  └─ ThemeProvider
│  │     └─ Router
│  │        ├─ Public: /login
│  │        └─ Protected: Layout
│  │           ├─ Sidebar Navigation
│  │           ├─ Mode Toggle (Global)
│  │           └─ Outlet (Page Content)
│  │              ├─ ExploreJobs ⭐
│  │              ├─ AppliedJobs
│  │              ├─ PostedJobs
│  │              ├─ JobDetail
│  │              ├─ Applicants
│  │              ├─ JobResponses
│  │              └─ UserSettings
```

---

## Summary

Your FITE app now has **complete navigation routing** connecting all pages properly:

1. **Explore Jobs** → Apply → **Success Modal** → **Applied Jobs**
2. **Posted Jobs** → View Job → **Job Detail** → **Applicants/Responses**
3. **Daily Mode** → Geolocation → Nearby jobs → Apply → Track in Applied Jobs
4. **Long-term Mode** → Browse all → ML match → Apply → Resume submitted

All routes work correctly with proper URL parameters, mode context, and authentication protection! 🚀
