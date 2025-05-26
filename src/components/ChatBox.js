import React, { useState } from "react";
import Message from "./Message";
import InputBar from "./InputBar";
import medicalData from "../data/medicalData";

const ChatBox = () => {
  const [messages, setMessages] = useState([
    {
      text: "👋 Hi! I’m MedicAI — your offline health assistant. Ask me about any illness, symptom, or medication.",
      isUser: false,
    },
  ]);

  const handleUserMessage = (input) => {
    const userMessage = input.trim().toLowerCase();
    setMessages((prev) => [...prev, { text: input, isUser: true }]);

    setTimeout(() => {
      // 💬 Respond to "thank you"
      if (userMessage.includes("thank you") || userMessage.includes("thanks")) {
        setMessages((prev) => [
          ...prev,
          {
            text:
              "🙏 You're very welcome! Stay healthy and feel free to come back anytime for more health guidance. 👨‍⚕️",
            isUser: false,
          },
        ]);
        return;
      }

      // 💬 Respond to confusion
      if (
        userMessage.includes("sorry") ||
        userMessage.includes("don't get it") ||
        userMessage.includes("i don't understand")
      ) {
        setMessages((prev) => [
          ...prev,
          {
            text:
              "🙋‍♂️ No worries! You can try asking me about an illness like 'headache', 'covid', or simply type your symptoms like 'fever and sore throat'. I’ll help you out!",
            isUser: false,
          },
        ]);
        return;
      }

      // 🔍 Try to match illness
      const key = Object.keys(medicalData).find((illness) =>
        userMessage.includes(illness.toLowerCase())
      );

      if (key) {
        const info = medicalData[key];
        const reply = `
🧾 **${key.toUpperCase()}**
${info.description}

🩺 **Symptoms:**
${info.symptoms.map((s, i) => `  ${i + 1}. ${s}`).join("\n")}

💊 **Medications:**
${info.medications.map((m, i) => `  ${i + 1}. ${m}`).join("\n")}

⚠️ **Precautions:**
${info.precautions.map((p, i) => `  ${i + 1}. ${p}`).join("\n")}
        `.trim();

        setMessages((prev) => [...prev, { text: reply, isUser: false }]);
      } else {
        // ❓ Unknown query
        setMessages((prev) => [
          ...prev,
          {
            text: `🤔 Hmm, I couldn’t find anything about that. Try entering a known illness like *headache*, *covid*, or describe your symptoms like "I have a sore throat and fever". I'm here to help!`,
            isUser: false,
          },
        ]);
      }
    }, 600);
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, idx) => (
          <Message key={idx} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <InputBar onSend={handleUserMessage} />
    </div>
  );
};

export default ChatBox;
