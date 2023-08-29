

// views/EmailScreen.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from './Login';
import EmailList from '../components/EmailList';
import EmailDetail from '../components/EmailDetail';
import ComposeEmail from './ComposeEmail';
import '../styles/EmailScreen.css';

const EmailScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await axios.get('http://localhost:3001/emails');
      setEmails(response.data);
    } catch (error) {
      console.error('Error fetching emails:', error);
    }
  };

  const handleLogin = (username, password) => {
    // Simulate login validation
    if (username === 'user' && password === 'password') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleCompose = async (newEmail) => {
    try {
      const response = await axios.post('http://localhost:3001/emails', newEmail);
      setEmails([...emails, response.data]);
    } catch (error) {
      console.error('Error composing email:', error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setSelectedEmail(null);
  };

  return (
    <Router>
      <div className="email-screen">
        <header>
          <h1>Email Application</h1>
          {isLoggedIn && (
            <nav className="navigation-links">
              <Link to="/">Emails</Link>
              <Link to="/compose">Compose</Link>
              <Link to="/logout">Logout</Link>
            </nav>
          )}
        </header>
        <main>
          <Routes>
            {isLoggedIn ? (
              <>
                <Route path="/" element={<EmailList emails={emails} onSelectEmail={setSelectedEmail} />} />
                <Route path="/emails/:emailId" element={<EmailDetail email={selectedEmail} />} />
                <Route path="/compose" element={<ComposeEmail onCompose={handleCompose} />} />
                <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
                <Route path="/*" element={<Navigate to="/" />} />
              </>
            ) : (
              <Route path="/" element={<Login onLogin={handleLogin} />} />
            )}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default EmailScreen;

const Logout = ({ onLogout }) => {
    onLogout();
    return <Navigate to="/" />;
  };

