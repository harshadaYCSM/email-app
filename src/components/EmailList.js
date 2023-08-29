// components/EmailList.js
import React from 'react';
import EmailListItem from './EmailListItem';
import '../styles/EmailList.css';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="email-list">
      <h2>Email List</h2>
      <ul>
        {emails.map((email) => (
          <EmailListItem key={email.id} email={email} onSelectEmail={onSelectEmail} />
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
