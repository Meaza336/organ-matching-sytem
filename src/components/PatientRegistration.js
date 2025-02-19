import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './DonorRegistration.css'; // Corrected import statement
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
          <h2 className="my-4 text-center">Patient Registration Form</h2>
          <div className="bg-success text-white p-3 mb-4">
            <h2 className="mb-0 text-center">Personal Information</h2>
          </div>
          <div className="p-4 border rounded shadow">
            <form>
              {/* Full Name Section */}
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="firstName" className="form-label">First Name:</label>
                  <input type="text" className="form-control" id="firstName" placeholder="First Name" required />
                </div>
                <div className="col-md-6">
                  <label htmlFor="lastName" className="form-label">Last Name:</label>
                  <input type="text" className="form-control" id="lastName" placeholder="Last Name" required />
                </div>
              </div>

              {/* Gender Section */}
              <div className="mb-3">
                <label className="form-label">Gender:</label>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="male" value="male" required />
                  <label className="form-check-label" htmlFor="male">Male</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="gender" id="female" value="female" required />
                  <label className="form-check-label" htmlFor="female">Female</label>
                </div>
              </div>

              {/* Date of Birth */}
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">Date of Birth:</label>
                <input type="date" className="form-control" id="dob" required />
              </div>

              {/* Age */}
              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age:</label>
                <input type="number" className="form-control" id="age" placeholder="MM/DD/YY" required />
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Phone Number:</label>
                <input type="tel" className="form-control" id="phone" placeholder="###-###-####" required />
              </div>

              {/* Email */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email:</label>
                <input type="email" className="form-control" id="email" required />
              </div>

              {/* Address */}
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Address:</label>
                <textarea className="form-control" id="address" rows="3" required></textarea>
              </div>

              {/* Medical History Section */}
              <div className="bg-success text-light p-3 mb-4">
                <h4 className="mb-0 text-center">Medical History</h4>
              </div>
              <div className="mb-3">
                <label htmlFor="bloodType" className="form-label">Blood Type:</label>
                <select className="form-select" id="bloodType" required>
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="organType" className="form-label">Organ Type:</label>
                <select className="form-select" id="organType" required>
                  <option value="">Select Organ Type</option>
                  <option value="Kidney">Kidney</option>
                  <option value="Liver">Liver</option>
                  <option value="Lung">Lung</option>
                  <option value="Pancreas">Pancreas</option>
                  <option value="Intestine">Intestine</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="hlaType" className="form-label">HLA Type:</label>
                <select className="form-select" id="hlaType" required>
                  <option value="">Select HLA Type</option>
                  <option value="A1">A1</option>
                  <option value="B7">B7</option>
                  <option value="C3">C3</option>
                  <option value="DR4">DR4</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="organSize" className="form-label">Organ Size:</label>
                <select className="form-select" id="organSize" required>
                  <option value="">Select Organ Size</option>
                  <option value="Standard">Standard</option>
                  <option value="Large">Large</option>
                  <option value="Small">Small</option>
                </select>
              </div>

              {/* Register Button */}
              <button type="submit" className="btn btn-success mt-3">Register</button>
            </form>
          </div>

             {/* Footer */}
             <footer className="mt-4 text-center">
              <p className="mb-0">© 2025 Organ Matching System. All Rights Reserved.</p>
              <p className="mb-0">Privacy Policy</p>
          </footer>
          </div> 
          
      </div>
    </div>
  );
};

export default Dashboard;