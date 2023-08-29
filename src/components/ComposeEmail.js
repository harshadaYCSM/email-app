import React, { useState } from 'react';

const ComposeEmail = ({ onCompose }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');

  const handleCompose = () => {
    onCompose({ subject, body });
    setSubject('');
    setBody('');
  };

  return (
    <div>
      <h2>Compose Email</h2>
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={handleCompose}>Send</button>
    </div>
  );
};

export default ComposeEmail;
