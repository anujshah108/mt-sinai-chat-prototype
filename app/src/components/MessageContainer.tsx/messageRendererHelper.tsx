import { Message } from "./MessageContainer";
import moment from "moment";
import { MessageRow } from "../MessageRow/MessageRow";
import React from "react";

export const renderMessages = (messages: Message[], email: string) => {
  let i = 0;
  let messageCount = messages.length;
  let tempMessages = [];

  while (i < messageCount) {
    let previous = messages[i - 1];
    let current = messages[i];
    let next = messages[i + 1];
    let isMine = current.from === email;
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
