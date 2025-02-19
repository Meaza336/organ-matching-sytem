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

  // Sample data for Patients
  const patients = [
    { id: '01', patientName: 'Mr. Someone', donorName: 'Mr. Someone', email: 'asdfdsf@gmail.com', phone: '+251 9232422', organFound: 'Pancreas' },
    { id: '02', patientName: 'Mr. Someone', donorName: 'Mr. Someone', email: 'asdfdsf@gmail.com', phone: '+251 9232422', organFound: 'Heart' },
    { id: '03', patientName: 'Mr. Someone', donorName: 'Mr. Someone', email: 'asdfdsf@gmail.com', phone: '+251 9232422', organFound: 'Kidney' },
  ];

  return (
    <div className="container">
      {/* Header with logo, search bar, and logout button */}
      <header className="d-flex justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center">
          <img src="path/to/logo.png" alt="Logo" style={{ width: '50px', marginRight: '10px' }} />
          <h1 className="h4" style={{ fontSize: '1rem' }}>Organ Matching Management System</h1>
        </div>
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            placeholder="Search for donor or patient"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="button">Search</button>
          <button className="btn btn-success ms-2">Log Out</button> {/* Changed here */}
        </div>
      </header>

      {/* Sidebar and Main Content */}
      <div className="row flex-fill">
        {/* Sidebar */}
        <div className="col-md-3 sidebar">
          <ul className="list-group">
            {[
              { to: '/', icon: faHome, label: 'Home' },
              { to: '/donor-registration', icon: faUserPlus, label: 'Donor Registration' },
              { to: '/patient-registration', icon: faUserInjured, label: 'Patient Registration' },
              { to: '/donor-detail', icon: faIdCard, label: 'Donor Detail' },
              { to: '/patient-detail', icon: faIdCard, label: 'Patient Detail' },
              { to: '/patient-list', icon: faList, label: 'Patient List' },
              { to: '/match-organ', icon: faHeartbeat, label: 'Match Organ' },
              { to: '/notification', icon: faBell, label: 'Notification' },
            ].map((item) => (
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
          <h2 className="my-4">Organ Matching Alert</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="bg-success text-light">
                <tr>
                  <th>ID</th>
                  <th>Patient Name</th>
                  <th>Donor Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Organ Found</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient.id}>
                    <td>{patient.id}</td>
                    <td>{patient.patientName}</td>
                    <td>{patient.donorName}</td>
                    <td>{patient.email}</td>
                    <td>{patient.phone}</td>
                    <td>{patient.organFound}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer */}
          <footer className="mt-4">
            <div className="text-center">
              <p className="mb-0">© 2025 Organ Matching System. All Rights Reserved.</p>
              <p className="mb-0">Privacy Policy | Terms of Service</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;