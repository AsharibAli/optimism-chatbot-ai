"use client";
import React, { useEffect } from "react";

const FlowiseChatbot = () => {
  useEffect(() => {
    // Check if the script is already loaded
    if (
      !document.querySelector(
        'script[src="https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js"]'
      )
    ) {
      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/AsharibAli/FlowiseChatEmbed@latest/dist/web.js";
      script.type = "module";
      script.async = true;
      script.onload = () => {
        if (window.Chatbot) {
          window.Chatbot.initFull({
            chatflowid: "50d920d2-cff2-44a8-beb7-d122ae76e763",
            apiHost: "https://flowise-r1c3.onrender.com",
            theme: {
              chatWindow: {
                welcomeMessage:
                  "Hello, I am the Optimism AI chatbot developed by team (Optimism AI)  . My role is to provide information and help developers to build on Optimism L2 chain or Op Stack. How may I assist you today?",
                backgroundColor: "#ffffff",
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                  backgroundColor: "#f7f8ff",
                  textColor: "#303235",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/optimism-chatbot-ai/main/public/logo.png",
                },
                userMessage: {
                  backgroundColor: "#3B81F6",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/optimism-chatbot-ai/main/public/usericon.png",
                },
                textInput: {
                  placeholder: "Type your question",
                  backgroundColor: "#ffffff",
                  textColor: "#303235",
                  sendButtonColor: "#3B81F6",
                },
              },
            },
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
