import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

// Auth pages
import LoginSignup from './pages/auth/LoginSignup';

// Shared pages
import Home from './pages/Home';
import UserSettings from './pages/UserSettings';

// Posted Jobs pages
import PostedJobs from './pages/posted-jobs/PostedJobs';
import JobDetail from './pages/posted-jobs/JobDetail';
import Applicants from './pages/posted-jobs/Applicants';
import PostDailyJob from './pages/posted-jobs/PostDailyJob';
import PostLongTermJob from './pages/posted-jobs/PostLongTermJob';

// Applied Jobs pages
import AppliedJobs from './pages/applied-jobs/AppliedJobs';

// Explore Jobs pages
import ExploreJobs from './pages/explore-jobs/ExploreJobs';

// Job Responses pages
import JobResponses from './pages/job-responses/JobResponses';

import { ModeProvider } from './context/ModeContext';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ModeProvider>
        <Router>
          <Routes>
            <Route path="/login" element={<LoginSignup />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="posted-jobs" element={<PostedJobs />} />
              <Route path="job-detail/:mode/:jobId" element={<JobDetail />} />
              <Route path="applicants/:mode/:jobId" element={<Applicants />} />
              <Route path="job-responses/:mode/:jobId" element={<JobResponses />} />
              <Route path="post-daily-job" element={<PostDailyJob />} />
              <Route path="post-long-term-job" element={<PostLongTermJob />} />
              <Route path="applied-jobs" element={<AppliedJobs />} />
              <Route path="explore-jobs" element={<ExploreJobs />} />
              <Route path="settings" element={<UserSettings />} />
            </Route>
          </Routes>
        </Router>
      </ModeProvider>
    </ThemeProvider>
  );
};

export default App;
