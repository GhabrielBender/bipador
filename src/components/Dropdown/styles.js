import styled from "styled-components";

export const Main = styled.div`
  position: fixed;
  right: 10%;
  left: 4%;
  width: 270px;
  height: 270px;
  border-color: black;
  border-width: 2px;
  margin-top: 48px;
  border: 0.5px solid #0015;
  box-shadow: 5px 5px 5px #0015;
  background-color: #fff;
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  height: 90%;

  div {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  span {
    margin-top: 10px;
  }

  button {
    width: 90%;
    height: 35px;
    border: 1px solid;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    margin: 0 auto;
  }
`;
