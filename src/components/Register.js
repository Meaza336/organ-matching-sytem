// src/components/Register.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Register = ({ onLoginClick }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name, 'Email:', email, 'Password:', password);
        // Here you can add registration logic
        onLoginClick(); // Automatically log in after registration for demo purposes
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow" style={{ width: '450px', height: '500px', border: '2px solid white', backgroundColor: 'white', fontWeight: 'bold', borderRadius: '10px' }}>
                <h2 className="mb-4" style={{ fontWeight: 'bold', textAlign: 'center', color: '#333' }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3 position-relative">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={{ border: 'none', borderBottom: '1px solid #333', borderRadius: '0', padding: '10px 0 10px 0', outline: 'none' }}
                        />
                        <i className="fas fa-user position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}></i>
                    </div>
                    <div className="mb-3 position-relative">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Your Email Address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={{ border: 'none', borderBottom: '1px solid #333', borderRadius: '0', padding: '10px 0 10px 0', outline: 'none' }}
                        />
                        <i className="fas fa-envelope position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}></i>
                    </div>
                    <div className="mb-3 position-relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-control"
                            placeholder="Create a Strong Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ border: 'none', borderBottom: '1px solid #333', borderRadius: '0', padding: '10px 0 10px 0', outline: 'none' }}
                        />
                        <i className={`fas ${showPassword ? 'fa-lock-open' : 'fa-lock'} position-absolute`} 
                           onClick={() => setShowPassword(!showPassword)}
                           style={{ cursor: 'pointer', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#666' }}></i>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                        <button type="submit" className="btn" style={{ backgroundColor: '#5BC088', color: 'white', borderRadius: '5px', width: '100%', padding: '10px', fontWeight: 'bold' }}>
                            Register
                        </button>
                    </div>
                </form>

                <div className="text-center mt-3">
                    <a href="#login" onClick={onLoginClick} className="text-decoration-none" style={{ color: 'black' }}>
                        Already have an account? / Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Register;