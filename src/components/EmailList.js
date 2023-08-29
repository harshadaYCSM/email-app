// components/EmailList.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmailList.css';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="email-list">
      <h2>Email List</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id}>
            <Link to={`/emails/${email.id}`} onClick={() => onSelectEmail(email)}>
              <div className="email-item">
                <div className="email-sender">{email.sender}</div>
                <div className="email-summary">
                  <div className="email-subject">{email.subject}</div>
                  <div className="email-body-preview">{email.body.substr(0, 100)}...</div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;

