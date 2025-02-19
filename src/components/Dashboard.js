import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faUserPlus,
  faUserInjured,
  faIdCard,
  faList,
  faHeartbeat,
  faBell,
} from '@fortawesome/free-solid-svg-icons';
import './Dashboard.css'; // Import the CSS file

const Dashboard = () => {
  const location = useLocation(); // Get current location

  // Sidebar navigation items
  const navItems = [
    { to: '/', icon: faHome, label: 'Home' },
    { to: '/donor-registration', icon: faUserPlus, label: 'Donor Registration' },
    { to: '/patient-registration', icon: faUserInjured, label: 'Patient Registration' },
    { to: '/donor-detail', icon: faIdCard, label: 'Donor Detail' },
    { to: '/patient-detail', icon: faIdCard, label: 'Patient Detail' },
    { to: '/patient-list', icon: faList, label: 'Patient List' },
    { to: '/match-organ', icon: faHeartbeat, label: 'Match Organ' },
    { to: '/notification', icon: faBell, label: 'Notification' },
  ];

  // Quick stats data
  const quickStats = [
    { icon: faHeartbeat, title: 'Total Matches', count: 120 },
    { icon: faUserInjured, title: 'Patients Waiting', count: 85 },
    { icon: faUserPlus, title: 'Available Donors', count: 45 },
    { icon: faBell, title: 'Urgent Cases', count: 15 },
  ];

  return (
    <div className="container">
      {/* Header */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img src="/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <h1 className="h4" style={{ fontSize: '1rem' }}>
            Organ Matching Management System
          </h1>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for donor or patient"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="button">Search</button>
          <button className="btn btn-success ms-2">Log Out</button>
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <ul className="list-group">
            {navItems.map((item) => (
              <li className={`list-group-item ${location.pathname === item.to ? 'active' : ''}`} key={item.label}>
                <Link to={item.to}>
                  <FontAwesomeIcon icon={item.icon} className="me-2" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Section */}
        <div className="col-md-9">
          {/* Quick Stats Section */}
          <div className="row mb-4">
            {quickStats.map((stat) => (
              <div className="col-md-3" key={stat.title}>
                <div className="card text-center hover-card">
                  <div className="card-body bg-light">
                    <FontAwesomeIcon icon={stat.icon} size="2x" className="mb-3 text-success" />
                    <h5 className="card-title">{stat.title}</h5>
                    <p className="card-text display-4">{stat.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Transplants Section */}
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="card hover-card">
                <div className="card-body">
                  <h5 className="card-title">Upcoming Transplants</h5>
                  <div className="border-bottom mb-3"></div>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex align-items-center">
                      <FontAwesomeIcon icon={faHeartbeat} className="me-2 text-success" />
                      Patient John Doe - Kidney - 15th October
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <FontAwesomeIcon icon={faHeartbeat} className="me-2 text-success" />
                      Patient Jane Smith - Liver - 20th October
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <FontAwesomeIcon icon={faHeartbeat} className="me-2 text-success" />
                      Patient Michael Brown - Heart - 25th October
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <span>Privacy Policy</span>
        <span>2025 ©</span>
      </footer>
    </div>
  );
};

export default Dashboard;