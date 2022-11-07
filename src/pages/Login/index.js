import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Main, LoginDiv } from "./styles.js";
import { signUpService } from "../../service/signUp";
import Loading from "../../assets/loading.gif";

const defaultFormFields = {
  user: "",
  password: "",
  stage: "",
  station: "",
};

export default function Login() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { user, password, stage, station } = formFields;
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  async function SingUp() {
    setLoading(true);
    if (!user || !password || !stage || !station) {
      setLoading(false);
      setError(true);
      return;
    }
    setError(false);

    try {
      const response = await signUpService(user, password, station, stage);
      setLoading(false);
      navigate("/Home");
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

          <select
            onChange={handleChange}
            name="stage"
            placeholder="Insira sua etapa"
          >
            <option value="">Insira sua etapa</option>
            <option value="corte">Corte</option>
            <option value="laminacao">Laminação</option>
            <option value="usinagem">Usinagem</option>
          </select>

          <input
            placeholder="Insira sua estação"
            name="station"
            value={station}
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
