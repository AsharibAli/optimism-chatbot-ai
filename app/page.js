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
              button: {
                backgroundColor: "#FF0000",
                iconColor: "black",
              },
              chatWindow: {
                welcomeMessage:
                  "Hello, I am the Optimism AI chatbot developed by team (Optimism AI). My role is to provide information and help developers to build on Optimism L2 chain or Op Stack. How may I assist you today?",
                backgroundColor: "#ffffff",
                fontSize: 16,
                poweredByTextColor: "#303235",
                botMessage: {
                  backgroundColor: "#FF0000                  ",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/optimism-chatbot-ai/main/public/op.jpg",
                },
                userMessage: {
                  backgroundColor: "#000000",
                  textColor: "#ffffff",
                  showAvatar: true,
                  avatarSrc:
                    "https://raw.githubusercontent.com/AsharibAli/optimism-chatbot-ai/main/public/usericon.png",
                },
                textInput: {
                  placeholder: "Type your question",
                  backgroundColor: "#ffffff",
                  textColor: "#303235",
                  sendButtonColor: "#000000",
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
