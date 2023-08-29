// components/EmailListItem.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EmailListItem.css';

const EmailListItem = ({ email, onSelectEmail }) => {
  return (
    <li className="email-list-item" key={email.id}>
      <Link to={`/emails/${email.id}`} onClick={() => onSelectEmail(email)}>
        <div className="email-item">
          <div className="email-details">
            <div className="email-sender">{email.sender}</div>
            <div className="email-summary">
              <div className="email-subject">{email.subject}</div>
              <div className="email-body-preview">{email.body.substr(0, 100)}...</div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default EmailListItem;
