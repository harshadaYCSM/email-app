// components/EmailDetail.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmailDetail.css';

const EmailDetail = ({ email }) => {
  if (!email) {
    return (
      <div className="email-detail">
        <p className="no-email-selected">No email selected.</p>
      </div>
    );
  }

  return (
    <div className="email-detail">
      <div className="email-detail-header">
        <Link to="/" className="back-link">
          Back to Email List
        </Link>
      </div>
      <div className="email-detail-content">
        <h2 className="email-detail-subject">{email.subject}</h2>
        <div className="email-detail-sender">From: {email.sender}</div>
        <div className="email-detail-body">{email.body}</div>
      </div>
    </div>
  );
};

export default EmailDetail;
