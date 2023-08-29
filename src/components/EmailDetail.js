import React from 'react';

const EmailDetail = ({ email }) => {
  return (
    <div>
      <h2>Email Detail</h2>
      <p>From: {email.sender}</p>
      <p>Subject: {email.subject}</p>
      <p>{email.body}</p>
    </div>
  );
};

export default EmailDetail;
