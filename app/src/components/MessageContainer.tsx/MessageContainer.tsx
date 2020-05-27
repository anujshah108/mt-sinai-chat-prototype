import React from "react";
import Compose from "../MessageInput/MessageInput";
import { Toolbar } from "../Toolbar/Toolbar";
import { MessageContainerWrapper } from "./styled";
import { renderMessages } from "./messageRendererHelper";

export interface Message {
  from: string;
  to: string;
  text: string;
  timestamp: number;
}

export const MessageContainer = (props: {
  sendMsg: (msg: Message) => void;
  messageHistory: Message[];
  email: string;
}) => {
  return (
    <>
      <Toolbar messageHistory={props.messageHistory} email={props.email} />
      <MessageContainerWrapper>
        {renderMessages(props.messageHistory, props.email)}
      </MessageContainerWrapper>
      <Compose sendMsg={props.sendMsg} email={props.email} />
    </>
  );
};
