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
import './PatientDetails.css'; // Import the CSS file

const Dashboard = () => {
  const location = useLocation(); // Get current location

  // Sample data for Donors
  const donors = [
    { id: '01', name: 'Mr. Someone', age: 27, gender: 'M', address: '12 street', bloodGroup: 'A-', email: 'asdffg@gmail.com', phone: '+251 6232422', donationType: 'Kidney' },
    { id: '02', name: 'Ms. Someone', age: 27, gender: 'F', address: '15 street', bloodGroup: 'B+', email: 'someone@gmail.com', phone: '+251 6232422', donationType: 'Heart' },
    { id: '03', name: 'Mr. Someone', age: 27, gender: 'M', address: '10 street', bloodGroup: 'O+', email: 'someoneelse@gmail.com', phone: '+251 6232422', donationType: 'Liver' },
    { id: '04', name: 'Ms. Someone', age: 27, gender: 'F', address: '22 street', bloodGroup: 'AB-', email: 'anotherone@gmail.com', phone: '+251 6232422', donationType: 'Lung' },
    { id: '05', name: 'Mr. Someone', age: 27, gender: 'M', address: '30 street', bloodGroup: 'A+', email: 'yetanother@gmail.com', phone: '+251 6232422', donationType: 'Kidney' },
    { id: '06', name: 'Ms. Someone', age: 27, gender: 'F', address: '5 street', bloodGroup: 'B-', email: 'lastone@gmail.com', phone: '+251 6232422', donationType: 'Blood' },
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
          <h2 className="my-4">Donors Detail</h2>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Donor Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Address</th>
                  <th>Blood Group</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Donation Type</th>
                </tr>
              </thead>
              <tbody>
                {donors.map((donor) => (
                  <tr key={donor.id}>
                    <td>{donor.id}</td>
                    <td>{donor.name}</td>
                    <td>{donor.age}</td>
                    <td>{donor.gender}</td>
                    <td>{donor.address}</td>
                    <td>{donor.bloodGroup}</td>
                    <td>{donor.email}</td>
                    <td>{donor.phone}</td>
                    <td>{donor.donationType}</td>
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