import React from 'react';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div>
      <h2>Email List</h2>
      <ul>
        {emails.map((email) => (
          <li key={email.id} onClick={() => onSelectEmail(email.id)}>
            {email.subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailList;
