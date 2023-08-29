// components/EmailDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmailDetail.css';

const EmailDetail = ({ email }) => {
  return (
    <div className="email-detail">
      <Link to="/emails" className="go-back">
        &lt; Back to Email List
      </Link>
      <h2>Email Detail</h2>
      <p>From: {email.sender}</p>
      <p>Subject: {email.subject}</p>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailDetail;
