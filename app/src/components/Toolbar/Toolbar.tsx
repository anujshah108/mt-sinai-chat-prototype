import React from "react";
import { ToolbarWrapper, ToolbarTitle, ToolbarCount } from "./styled";
import { Message } from "../MessageContainer.tsx/MessageContainer";

export const Toolbar = (props: {
  messageHistory: Message[];
  email: string;
}) => {
  const { messageHistory, email } = props;
  return (
    <>
      <ToolbarWrapper>
        <ToolbarTitle>{`Mount Sinai helper bot: ${email}`}</ToolbarTitle>
      </ToolbarWrapper>
      <ToolbarCount>
        {messageHistory.filter((msg) => msg.from === email).length}
      </ToolbarCount>
    </>
  );
};
