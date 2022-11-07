import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  max-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivTable = styled.div`
  width: 90%;
  max-height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  flex-direction: column;
`;
export const Div = styled.div`
  width: 95%;
  display: flex;
  justify-content: left;
`;

export const InputDiv = styled.div`
  display: flex;
  max-width: 55%;

  img {
    width: 18px;
    height: 18px;
    padding-left: 15px;
    margin-top: 5px;
    margin-right: -30px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  border-radius: 20px;
  border: 1px solid #000;
  padding-left: 37px;
  height: 25px;
  width: 205px;
`;
