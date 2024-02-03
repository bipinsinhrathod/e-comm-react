import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement your logic here to send the email to your server or API
    console.log(`Email submitted: ${email}`);
    // Optionally, you can reset the email state after submission
    setEmail('');
  };

  return (
    <div>
      <h2>Subscribe To Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
