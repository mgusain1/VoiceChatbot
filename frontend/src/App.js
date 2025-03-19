import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleListen = async () => {
    setIsListening(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/listen");
      if (res.data.text) {
        setText(res.data.text);
      } else {
        console.error("Error: No text received.");
      }
    } catch (error) {
      console.error("Error listening:", error);
    } finally {
      setIsListening(false);
    }
  };

  const handleAsk = async () => {
    if (!text.trim()) {
      alert("Please enter or speak a question first.");
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/ask", { prompt: text });
      if (res.data.response) {
        setResponse(res.data.response);
      } else {
        console.error("Error: No response received.");
      }
    } catch (error) {
      console.error("Error asking:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Voice Chatbot</h1>

      <button onClick={handleListen} disabled={isListening}>
        {isListening ? "Listening..." : "Press to Listen"}
      </button>

      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your question..."
        style={{ width: "300px", marginTop: "10px" }}
      />
      
      <br />
      <button onClick={handleAsk} style={{ marginTop: "10px" }}>
        Ask ChatGPT
      </button>

      <h3>Response:</h3>
      <p>{response}</p>
    </div>
  );
}

export default App;
