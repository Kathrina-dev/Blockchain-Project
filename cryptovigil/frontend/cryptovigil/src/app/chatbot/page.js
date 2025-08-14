import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! 👋 I'm CryptoVigile Assistant. Ask me anything about using this platform, and I'll do my best to help." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const predefinedResponses = {
    "what is cryptovigil": {
      text: "CryptoVigil is a blockchain-enhanced platform that provides:",
      details: [
        "🔍 AI-powered analysis of blockchain transactions",
        "🤖 Automated transaction explanations",
        "🔐 Secure user authentication",
        "🌐 IP tracking for security",
        "🧠 LLM integration for intelligent assistance"
      ]
    },
    "features": {
      text: "Here are CryptoVigil's core features:",
      details: [
        "🔗 Blockchain Transaction Analysis - Detect anomalies and summarize financial movements",
        "🤖 AI Integration - Uses OpenRouter with LLMs (GPT-4, Claude, Gemini) for explanations",
        "🔐 User Authentication - Secure signup/login with personalized dashboards",
        "🌐 IP Address Logging - For security and fraud detection",
        "📊 Transaction Automation - Automate repetitive DeFi transactions",
        "🧪 LLM Playground - Test different AI models for blockchain assistance"
      ]
    },
    "how does it work": {
      text: "CryptoVigil works by:",
      details: [
        "1. Users authenticate securely",
        "2. Submit blockchain transactions or queries",
        "3. Our AI analyzes transactions using multiple LLMs",
        "4. Provides explanations and detects potential issues",
        "5. Offers automated solutions when possible"
      ]
    },
    "contact": {
      text: "For support, you can reach us at:",
      details: [
        "📧 Email: kathrinaelangbam@gmail.com",
        "🌐 Official support channels (check our website footer)"
      ]
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);
    setInput("");

    const lowerInput = input.toLowerCase();
    let foundPredefined = false;

    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerInput.includes(key)) {
        foundPredefined = true;
        setMessages(prev => [
          ...prev,
          { from: "bot", text: response.text },
          ...response.details.map(detail => ({ from: "bot", text: `• ${detail}` }))
        ]);
        break;
      }
    }

    if (foundPredefined) {
      setLoading(false);
      return;
    }
    
    try {
      const response = await fetch("http://localhost:4000/api/ai/analyze-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          transaction: { question: input },
          useLLM: true
        })
      });

      const data = await response.json();
      let botReply = "";

      // If the LLM returns a flagged field, treat it as a generic answer
      if (data && typeof data === "object" && data.reasons && Array.isArray(data.reasons)) {
        botReply = data.reasons.join(" ");
      } else if (data && data.answer) {
        botReply = data.answer;
      } else if (data && data.error) {
        botReply = "Sorry, I couldn't process your question. If your issue persists, please contact kathrinaelangbam@gmail.com.";
      } else {
        botReply = "Sorry, I couldn't understand your question. For unresolved issues, please contact kathrinaelangbam@gmail.com.";
      }

      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Sorry, there was an error connecting to the assistant. For unresolved issues, please contact kathrinaelangbam@gmail.com." }
      ]);
    } finally {
      setLoading(false);
      setInput("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-80 h-96 bg-white rounded-xl shadow-lg border border-gray-300  flex flex-col">
      <div className="bg-green-600 text-white px-4 py-4 rounded-t-xl font-bold">
        CryptoVigil Chatbot
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-2 bg-white">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-3 py-2 rounded-lg max-w-[80%] text-sm ${
                msg.from === "user"
                  ? "bg-green-100 text-black"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start mb-2">
            <div className="px-3 py-2 rounded-lg bg-gray-200 text-gray-800 text-sm">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="border-t border-gray-200">
        <input
          className="flex-1 px-3 py-2 rounded-bl-xl outline-none text-black w-full"
          type="text"
          placeholder="Ask a question..."
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={loading}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-br-xl font-bold absolute right-0 bottom-0"
          onClick={handleSend}
          disabled={loading}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;