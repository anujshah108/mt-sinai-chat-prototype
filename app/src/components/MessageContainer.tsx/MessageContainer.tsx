import React from "react";
import Compose from "../MessageInput/MessageInput";
import { Toolbar } from "../Toolbar/Toolbar";
import { MessageRow } from "../MessageRow/MessageRow";
import moment from "moment";
import { MessageContainerWrapper } from "./styled";

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
  const renderMessages = () => {
    let i = 0;
    let messageCount = props.messageHistory.length;
    let tempMessages = [];

    while (i < messageCount) {
      let previous = props.messageHistory[i - 1];
      let current = props.messageHistory[i];
      let next = props.messageHistory[i + 1];
      let isMine = current.from === props.email;
      let currentMoment = moment(current.timestamp);
      let prevBySameAuthor = false;
      let nextBySameAuthor = false;
      let startsSequence = true;
      let endsSequence = true;
      let showTimestamp = true;

      if (previous) {
        let previousMoment = moment(previous.timestamp);
        let previousDuration = moment.duration(
          currentMoment.diff(previousMoment)
        );
        prevBySameAuthor = previous.from === current.from;

        if (prevBySameAuthor && previousDuration.as("hours") < 1) {
          startsSequence = false;
        }

        if (previousDuration.as("hours") < 1) {
          showTimestamp = false;
        }
      }

      if (next) {
        let nextMoment = moment(next.timestamp);
        let nextDuration = moment.duration(nextMoment.diff(currentMoment));
        nextBySameAuthor = next.from === current.from;

        if (nextBySameAuthor && nextDuration.as("hours") < 1) {
          endsSequence = false;
        }
      }

      tempMessages.push(
        <MessageRow
          key={i}
          isMine={isMine}
          startsSequence={startsSequence}
          endsSequence={endsSequence}
          showTimestamp={showTimestamp}
          data={current}
        />
      );

      // Proceed to the next message.
      i += 1;
    }

    return tempMessages;
  };

  return (
    <>
      <Toolbar messageHistory={props.messageHistory} email={props.email} />

      <MessageContainerWrapper>{renderMessages()}</MessageContainerWrapper>

      <Compose sendMsg={props.sendMsg} email={props.email} />
    </>
  );
};
