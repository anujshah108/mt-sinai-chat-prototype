import styled from "styled-components/macro";

export const ConversationWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  background: #eeeef1;
`;

export const ScrollingAreaWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  background: white;
  grid-row-start: 1;
  grid-row-end: span 3;
`;
