// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DonorRegistration from './components/DonorRegistration';
import PatientRegistration from './components/PatientRegistration';
import DonorDetail from './components/DonorDetail';
import PatientDetail from './components/PatientDetail';
import PatientList from './components/PatientList';
import MatchOrgan from './components/MatchOrgan';
import Notification from './components/Notification';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  const toggleLogin = () => {
    setIsLogin(true); // Set to true to navigate to the dashboard
  };

  return (
    <Router>
      <Routes>
        {/* Show Login/Register based on isLogin state */}
        {!isLogin ? (
          <>
            <Route path="/login" element={<Login onLoginClick={toggleLogin} />} />
            <Route path="/" element={<Register onLoginClick={toggleLogin} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/donor-registration" element={<DonorRegistration />} />
            <Route path="/patient-registration" element={<PatientRegistration />} />
            <Route path="/donor-detail" element={<DonorDetail />} />
            <Route path="/patient-detail" element={<PatientDetail />} />
            <Route path="/patient-list" element={<PatientList />} />
            <Route path="/match-organ" element={<MatchOrgan />} />
            <Route path="/notification" element={<Notification />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;