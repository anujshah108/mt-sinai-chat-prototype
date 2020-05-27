import styled from "styled-components/macro";

export const ToolbarTitle = styled.h1`
  margin: 10px;
  font-size: 16px;
  font-weight: 800;
  padding-top: 10px;
  color: #212070;
`;

export const ToolbarCount = styled.div`
  margin-top: 5px;
  margin-right: 50px;
  padding: 5px;
  border-radius: 50%;
  max-width: 50px;
  float: right;
  color: blue;
  background: lightblue;
  text-align: center;
`;

export const ToolbarWrapper = styled.div<{ mine?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  font-weight: 500;
  border-bottom: 1px solid #eeeef1;

  position: sticky;
  top: 0px;
`;
