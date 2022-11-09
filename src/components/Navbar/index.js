import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import Dropdown from "../Dropdown/index";

import { UserContext } from "../../contexts/user-context";
import { ModalContext } from "../../contexts/modal-context";

import LogoImg from "../../assets/logo.png";
import user from "../../assets/user.png";

import { Main, Navigation, Nav, AuthDiv, Logo } from "./styles";

export default function Navbar() {
  const { currentUser } = useContext(UserContext);
  const { isModalOpen, setModalOpen } = useContext(ModalContext);

  return (
    <>
      <Main>
        <Nav>
          <AuthDiv>
            {currentUser && (
              <>
                <img src={user} alt="ícone do usuário" />
                <span onClick={() => setModalOpen(!isModalOpen)}>
                  {currentUser?.usuario}
                </span>
              </>
            )}
            {isModalOpen && <Dropdown />}
          </AuthDiv>
          <Logo src={LogoImg} />
          <Navigation>
            {currentUser && (
              <>
                <Link to="/Home">Home</Link>
                <Link to="/Logs">Logs</Link>
              </>
            )}
          </Navigation>
        </Nav>
      </Main>

      <Outlet />
    </>
  );
}
