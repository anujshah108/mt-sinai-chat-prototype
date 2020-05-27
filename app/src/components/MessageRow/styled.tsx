import styled from "styled-components/macro";

export const MessageTimestampWrapper = styled.div<{
  mine?: boolean;
  start?: boolean;
  end?: boolean;
}>`
  display: flex;
  justify-content: center;
  color: #999;
  font-weight: 600;
  font-size: 12px;
  margin: 10px 0px;
  text-transform: uppercase;
`;

export const MessageBubbleWrapper = styled.div<{ mine?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => (props.mine ? "auto" : "0")};
  margin-right: ${(props) => (props.mine ? "0" : "auto")};
  max-width: 75%;
`;

export const MessageBubble = styled.div<{
  mine?: boolean;
  started?: boolean;
  ended?: boolean;
}>`
  display: flex;
  border-top-left-radius: ${(props) => (props.started ? "20px" : "2px")};
  border-bottom-left-radius: ${(props) => (props.ended ? "20px" : "2px")};
  margin: 1px 0px;
  background: ${(props) => (props.mine ? "#06ABEB" : "#DC298D")};
  color: ${(props) => (props.mine ? "white" : "")};
  padding: 10px 15px;
  border-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  margin-top: ${(props) => (props.started ? "10px" : "")};
  margin-bottom: ${(props) => (props.ended ? "10px" : "")};
  text-align: left;
`;

export const MessageWrapper = styled.div<{ mine?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.mine ? "flex-end" : "")};
`;
