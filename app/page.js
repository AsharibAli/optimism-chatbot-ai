"use client"
import React, { useEffect } from 'react';

const FlowiseChatbot = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (!document.querySelector('script[src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js';
      script.type = 'module';
      script.async = true;
      script.onload = () => {
        if (window.Chatbot) {
          window.Chatbot.initFull({
            chatflowid: '50d920d2-cff2-44a8-beb7-d122ae76e763',
            apiHost: 'https://flowise-r1c3.onrender.com',
            // ...other configuration
          });
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="m-0">
      <flowise-fullchatbot></flowise-fullchatbot>
    </div>
  );
};

export default FlowiseChatbot;
