import React, { useState } from "react";
import { MessageInput, MessageInputWrapper, MessageSendButton } from "./styled";
import { Message } from "../MessageContainer.tsx/MessageContainer";

interface InputProps {
  sendMsg: (msg: Message) => void;
  email: string;
}

export default function Compose(props: InputProps) {
  const [newMessage, setNewMessage] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(e.target.value);
  };

  const handleSubmit = () => {
    if (newMessage) {
      props.sendMsg({
        text: newMessage,
        timestamp: new Date().getTime(),
        from: props.email,
        to: "bot",
      });
      setNewMessage("");
    }
  };

  return (
    <MessageInputWrapper>
      <MessageInput
        value={newMessage}
        placeholder="Send a message..."
        onChange={handleInput}
        type="text"
        onKeyDown={(e) => (e.key === "Enter" ? handleSubmit() : undefined)}
      />
      <MessageSendButton onClick={() => handleSubmit()}>Send</MessageSendButton>
    </MessageInputWrapper>
  );
}
