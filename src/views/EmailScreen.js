// views/EmailScreen.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Login from '../components/Login';
import EmailList from '../components/EmailList';
import EmailDetail from '../components/EmailDetail';
import ComposeEmail from '../components/ComposeEmail';

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
      <div>
        <h1>Email Application</h1>
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
      </div>
    </Router>
  );
};

const Logout = ({ onLogout }) => {
  onLogout();
  return <Navigate to="/" />;
};

export default EmailScreen;
