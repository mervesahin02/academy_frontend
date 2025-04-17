import React, { useState } from "react";
import "./SupportButton.css";

const SupportButton = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Merhaba! Size nasıl yardımcı olabilirim?" }
    ]);
    const [input, setInput] = useState("");

    const toggleChat = () => setShowChat(!showChat);

    const handleSend = () => {
        if (input.trim() === "") return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        // Simüle edilen bot cevabı (opsiyonel)
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Sorunuzu aldık, en kısa sürede yanıtlayacağız." }
            ]);
        }, 700);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            <button className="support-button" onClick={toggleChat}>
                <img src="/images/aaaa.png" alt="Destek Hattı" />
            </button>

            {showChat && (
                <div className="chat-popup">
                    <div className="chat-header">
                        <span>Destek Hattı</span>
                        <button className="chat-close" onClick={toggleChat}>×</button>
                    </div>

                    <div className="chat-body">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div style={{ padding: "10px" }}>
                        <textarea
                            className="chat-input"
                            placeholder="Mesajınızı yazınız..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button className="chat-send" onClick={handleSend}>Gönder</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default SupportButton;
