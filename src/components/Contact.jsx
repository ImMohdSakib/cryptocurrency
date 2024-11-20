import React, { useState } from 'react';

const Contact = () => {
  const [email, setEmail] = useState('');

  const handleSendEmail = () => {
    window.location.href = `mailto:mohdsakib481@gmail.com?subject=Contact Form&body=User Email: ${email}`;
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Contact Me</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page refresh
          handleSendEmail();
        }}
      >
        <label htmlFor="email">Your Email:</label>
        <br />
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            margin: '10px 0',
            width: '100%',
            maxWidth: '300px',
            border: '1px solid #ccc',
            borderRadius: '5px',
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default Contact;
