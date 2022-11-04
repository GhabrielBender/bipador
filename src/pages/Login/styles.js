import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    color: #ce2029;
    text-align: center;
    font-size: 15px;
  }
`;

export const LoginDiv = styled.div`
  height: 20%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  img {
    width: 40px;
  }

  div {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
      width: 256px;
      height: 30px;
      border: 1px solid;
      border-radius: 20px;
      padding-left: 15px;

      ::placeholder {
        font-weight: 500;
        color: #000;
      }
    }
  }

  button {
    width: 100%;
    height: 35px;
    border: 1px solid;
    border-radius: 20px;
    background-color: #000;
    color: #fff;
    cursor: pointer;
  }
`;
