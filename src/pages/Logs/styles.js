import styled from "styled-components";

export const Main = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  tr {
    img {
      width: 30px;
      margin-left: 35%;
    }
  }
`;

export const DivTable = styled.div`
  width: 95%;
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
  gap: 20px;
  margin-bottom: 25px;
`;

export const InputDiv = styled.div`
  display: flex;
  max-width: 55%;
  z-index: 1;

  img {
    width: 18px;
    height: 18px;
    margin-top: 5px;
    margin-left: -30px;
    z-index: 10;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  border-radius: 20px;
  border: 1px solid #000;
  padding-left: 15px;
  height: 25px;
  width: 205px;
  z-index: 1;
`;

export const LoadingImage = styled.img`
  width: 25px;
`;
