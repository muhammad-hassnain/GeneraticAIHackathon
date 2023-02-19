import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';

function GetSuggestions() {
  const [userInput, setUserInput] = useState('');
  const [chatbotResponse, setChatbotResponse] = useState([]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `ChatGPT: ${userInput}: `,
        max_tokens: 100,
        temperature: 0.5,
        n: 1,
        stop: '\n'
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        }
      });

      const newChatbotResponse = [
        ...chatbotResponse,
        { userQuestion: userInput, chatbotAnswer: response.data.choices[0].text.trim() }
      ];
      setChatbotResponse(newChatbotResponse);
      setUserInput('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar pageName={"Get Suggestion from ChatGPT"} />
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {chatbotResponse.map((item, index) => (
            <p key={index}>
              <strong>User:</strong> {item.userQuestion}<br />
              <strong>ChatGPT:</strong> {item.chatbotAnswer}
            </p>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <label htmlFor="userInput">Enter a message:</label>
          <input type="text" id="userInput" value={userInput} onChange={handleInputChange} />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default GetSuggestions;
