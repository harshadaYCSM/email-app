// components/ComposeEmail.js
import React, { useState } from 'react';
import '../styles/ComposeEmail.css';

const ComposeEmail = ({ onCompose }) => {
  const [email, setEmail] = useState({
    to: '',
    subject: '',
    body: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmail((prevEmail) => ({
      ...prevEmail,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCompose(email);
    setEmail({
      to: '',
      subject: '',
      body: ''
    });
  };

  return (
    <div className="compose-email">
      <h2>Compose Email</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="to">To:</label>
          <input
            type="email"
            id="to"
            name="to"
            value={email.to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={email.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            name="body"
            value={email.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ComposeEmail;
