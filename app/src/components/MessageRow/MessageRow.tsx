import React from "react";
import moment from "moment";
import {
  MessageWrapper,
  MessageTimestampWrapper,
  MessageBubbleWrapper,
  MessageBubble,
} from "./styled";
import { Message } from "../MessageContainer.tsx/MessageContainer";

export interface MessageRowProps {
  data: Message;
  isMine: boolean;
  startsSequence: boolean;
  endsSequence: boolean;
  showTimestamp: boolean;
}

export const MessageRow = (props: MessageRowProps) => {
  const { data, isMine, startsSequence, endsSequence, showTimestamp } = props;

  const friendlyTimestamp = moment(data.timestamp).format("LLLL");
  return (
    <MessageWrapper mine={isMine}>
      {showTimestamp && (
        <MessageTimestampWrapper>{friendlyTimestamp}</MessageTimestampWrapper>
      )}

      <MessageBubbleWrapper mine={isMine}>
        <MessageBubble
          mine={isMine}
          ended={endsSequence}
          started={startsSequence}
          title={friendlyTimestamp}
        >
          {data.text}
        </MessageBubble>
      </MessageBubbleWrapper>
    </MessageWrapper>
  );
};
