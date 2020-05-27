import React, { useState, useEffect } from "react";
import "./App.css";
import { Messenger } from "./components/Messenger/Messenger";
import Login from "./components/Login/Login";
import { connect } from "./socket";
import { Message } from "./components/MessageContainer.tsx/MessageContainer";

const App = () => {
  const [email, setEmail] = useState("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);

  useEffect(
    () =>
      connect((msg) => {
        setMessageHistory((oldMessages) => [
          ...oldMessages,
          JSON.parse(msg.data),
        ]);
      }),
    []
  );

  return (
    <div className="App">
      {!email ? (
        <Login setEmail={setEmail} />
      ) : (
        <Messenger
          messageHistory={messageHistory}
          email={email}
          setMessageHistory={setMessageHistory}
        />
      )}
    </div>
  );
};

export default App;
