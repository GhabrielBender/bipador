import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const MainDiv = styled.div`
  min-width: 60%;
  max-width: 60%;

  display: flex;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  animation-duration: 3s;

  img {
    width: 120px;
    margin-left: 80px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Span = styled.span`
  font-weight: bold;
  margin-top: 20px;

  color: ${(props) => props.color};
`;

export const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 2px solid;
  border-color: ${(props) => props.color};
  border-radius: 20px;
  padding-left: 15px;
  margin-top: 30px;

  ::placeholder {
    font-weight: 500;
    border-color: ${(props) => props.color};

    color: #000;
  }

  &:focus {
    outline: none;

    border-color: ${(props) => props.color};
  }
`;

export const ValidatorImage = styled.img`
  width: 120px;
  margin-left: 80px;
`;

export const Button = styled.button`
  width: 300px;
  height: 40px;
  border: 1px solid;
  border-radius: 20px;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  margin-right: 320px;
  margin-bottom: 30px;
`;
