import styled from "styled-components/macro";

export const MessageInputWrapper = styled.div<{ mine?: boolean }>`
  padding: 10px;
  display: flex;
  align-items: center;
  background: white;
  border-top: 1px solid #eeeef1;
  position: fixed;
  width: calc(100% - 50px);
  bottom: 0px;

  @supports (backdrop-filter: blur(20px)) {
    input {
      border: none;
      background-color: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(20px);
    }
  }
`;

export const MessageInput = styled.input`
  flex: 1;
  border: none;
  font-size: 14px;
  height: 40px;
  background: none;
  padding-left: 10px;
  ::placeholder {
    opacity: 0.3;
    padding-left: 10px;
  }
`;
