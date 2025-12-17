import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
// Import pages
import LoginSignup from './pages/LoginSignup';
import Home from './pages/Home';
import MapWorker from './pages/MapWorker';
import LongTermJobSeekerBoard from './pages/LongTermJobSeekerBoard';
import LongTermDashboard from './pages/LongTermDashboard';
import MyApplications from './pages/MyApplications';
import ChatInbox from './pages/ChatInbox';
import UserSettings from './pages/UserSettings';
import PostedJobs from './pages/PostedJobs';
import AppliedJobs from './pages/AppliedJobs';
import JobResponses from './pages/JobResponses';
import JobDetail from './pages/JobDetail';
import PostDailyJob from './pages/PostDailyJob';
import PostLongTermJob from './pages/PostLongTermJob';
import Applicants from './pages/Applicants';

import { ModeProvider } from './context/ModeContext';

const App: React.FC = () => {
  return (
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
            <Route path="chat-inbox" element={<ChatInbox />} />
            <Route path="chat" element={<ChatInbox />} />
            <Route path="settings" element={<UserSettings />} />

            {/* Legacy routes */}
            <Route path="map" element={<MapWorker />} />
            <Route path="profile" element={<UserSettings />} />
            <Route path="jobs" element={<LongTermJobSeekerBoard />} />
            <Route path="dashboard" element={<LongTermDashboard />} />
            <Route path="applications" element={<MyApplications />} />
          </Route>
        </Routes>
      </Router>
    </ModeProvider>
  );
};

export default App;
