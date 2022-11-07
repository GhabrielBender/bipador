import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    min-width: 700px;
    height: 80px;
    border: 1px solid #000;
    border-style: dashed;
    cursor: pointer;
    justify-content: center;
    align-items: center;
  }
`;

export const SendButton = styled.button`
  width: 20%;
  height: 37px;
  border: 1px solid;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-top: 50px;
`;
