import React, { useContext, useRef, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user-context";
import { ModalContext } from "../../contexts/modal-context";

import { Main, MainDiv } from "./styles";

export default function Dropdown() {
  const navigate = useNavigate();
  const ref = useRef();

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { setModalOpen } = useContext(ModalContext);

  useOnClickOutside(ref, () => setModalOpen(false));

  function useOnClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [ref, handler]);
  }

  async function Logout() {
    await AsyncStorage.removeItem("@userToken");
    setCurrentUser("");
    setModalOpen(false);
    navigate("/");
  }

  return (
    <Main ref={ref}>
      <MainDiv>
        <div>
          <p>
            <strong>Usuário:</strong> {currentUser?.usuario}
          </p>
          <p>
            <strong>Etapa:</strong> {currentUser?.etapa}
          </p>
          <p>
            <strong>Estação:</strong> {currentUser?.estacao}
          </p>
        </div>

        <button onClick={Logout}>Logout</button>
      </MainDiv>
    </Main>
  );
}
