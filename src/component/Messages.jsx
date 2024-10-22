import React, { useState } from 'react';
import './Messages.css';

const MessagesPage = () => {
  const [messages, setMessages] = useState([
    { name: 'Alice', text: 'Hello everyone!' },
    { name: 'Bob', text: 'Hi Alice!' },
  ]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setMessages([...messages, { name, text: message }]);
      setName('');
      setMessage('');
    }
  };

  return (
    <div className="container-m">

    <div className="app-container">
      <h1 className="app-title">Message Board</h1>
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="name-input"
          />
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message"
          className="message-input"
          />
        <button type="submit" className="message-button">Send</button>
      </form>
      <div className="message-list">
        {messages.map((msg, index) => (
          <div key={index} className={`message-item ${index % 2 === 0 ? 'message-left' : 'message-right'}`}>
            <div className="message-content">
              <strong className="message-name">{msg.name}</strong>
              <p className="message-text">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default MessagesPage;
