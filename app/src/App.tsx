import React, { useState, useEffect } from "react";
import { Messenger } from "./components/Messenger/Messenger";
import Login from "./components/Login/Login";
import { connect, closeSocket } from "./socket";
import { Message } from "./components/MessageContainer.tsx/MessageContainer";
import styled from "styled-components/macro";

const AppWrapper = styled.div`
  text-align: center;
`;

const App = () => {
  const [email, setEmail] = useState("");
  const [messageHistory, setMessageHistory] = useState<Message[]>([]);

  useEffect(() => {
    connect((msg) => {
      setMessageHistory((oldMessages) => [
        ...oldMessages,
        JSON.parse(msg.data),
      ]);
    });
    return closeSocket();
  }, []);

  return (
    <AppWrapper>
      {!email ? (
        <Login setEmail={setEmail} />
      ) : (
        <Messenger
          messageHistory={messageHistory}
          email={email}
          setMessageHistory={setMessageHistory}
        />
      )}
    </AppWrapper>
  );
};

export default App;
