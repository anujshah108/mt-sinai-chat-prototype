import React, { useEffect } from "react";
import { MessageContainer } from "../MessageContainer.tsx/MessageContainer";
import { ConversationWrapper, ScrollingAreaWrapper } from "./styled";
import { Message } from "../MessageContainer.tsx/MessageContainer";
import { sendMsg } from "../../socket";

export const Messenger = (props: {
  email: string;
  messageHistory: Message[];
  setMessageHistory: (value: React.SetStateAction<Message[]>) => void;
}) => {
  const { email, setMessageHistory, messageHistory } = props;

  useEffect(() => {
    fetch(`http://localhost:8080/messages/${email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.length) {
          setMessageHistory((oldMessages) => [...oldMessages, ...response]);
        } else {
          sendMsg({
            text: "Welcome to the Mount Sinai helper bot!",
            timestamp: new Date().getTime(),
            from: "bot",
            to: email,
          });
        }
      })
      .catch((error) => console.log(error));
  }, [email, setMessageHistory]);

  return (
    <ConversationWrapper>
      <ScrollingAreaWrapper>
        <MessageContainer
          sendMsg={sendMsg}
          messageHistory={messageHistory}
          email={email}
        />
      </ScrollingAreaWrapper>
    </ConversationWrapper>
  );
};
