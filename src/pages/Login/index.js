import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Main, LoginDiv } from "./styles.js";
import { signUpService } from "../../service/signUp";
import Loading from "../../assets/loading.gif";

const defaultFormFields = {
  user: "",
  password: "",
};

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  async function SingUp() {
    setLoading(true);
    let response;
    if (!user || !password) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);

    try {
      response = await signUpService(user, password);
      console.log(response);
      setLoading(false);
      // setTimeout(() => {
      navigate("/Home");
      // }, 5000)
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <Main>
      <LoginDiv>
        <div>
          <input
            placeholder="Insira seu usuário"
            name="user"
            value={user}
            onChange={handleChange}
          />
          <input
            placeholder="Insira sua senha"
            name="password"
            value={password}
            onChange={handleChange}
            type="password"
          />
        </div>
        {error && <span>Preencha todos os campos</span>}
        {loading ? (
          <img src={Loading} />
        ) : (
          <button onClick={SingUp} type="button">
            Entrar
          </button>
        )}
      </LoginDiv>
    </Main>
  );
}
