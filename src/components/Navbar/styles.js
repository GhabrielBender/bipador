import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 70px;
  box-shadow: 0 8px 6px -6px #0015;
  z-index: 1000;
  background-color: #fff;
`;

export const Logo = styled.img`
  width: 110px;
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  span,
  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Navigation = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  padding-right: 20px;
`;

export const AuthDiv = styled.div`
  display: flex;
  width: 200px;
  padding-left: 0px;
  justify-content: center;

  img {
    width: 25px;
    height: 25px;
    padding-right: 5px;
  }
`;
