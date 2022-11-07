import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Main, MainDiv, Input, ValidatorImage, Span, Button } from "./styles";
import Correct from "../../assets/correct.png";
import Errorr from "../../assets/error.jpg";
import white from "../../assets/white.png";
import { putCode } from "../../service/putCode";
import Loading from "../../assets/loading.gif";

export default function Home() {
  const [valid, setValid] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  async function wololo(event) {
    setLoading(true);
    setInputValue(event.target.value);
    const response = await putCode(event.target.value);

    const status = response.data.message;

    setMessage(status);

    if (status === "ATUALIZADO!") {
      setValid("correct");
      setLoading(false);
    } else {
      setValid("incorrect");
      setLoading(false);
    }
  }

  return (
    <>
      <Main>
        <MainDiv>
          {valid === "" ? (
            <>
              {loading === false && (
                <>
                  <Input
                    value={inputValue}
                    autoFocus
                    color={"#000"}
                    onChange={wololo}
                  />
                  <ValidatorImage src={white} />
                </>
              )}
            </>
          ) : (
            <>
              {loading === false && (
                <>
                  <div>
                    <Input
                      autoFocus
                      color={valid === "incorrect" ? "#e4011c" : "#3db39e"}
                      onChange={wololo}
                      value={inputValue}
                    />
                    <Span color={valid === "incorrect" ? "#e4011c" : "#3db39e"}>
                      {message}
                    </Span>
                  </div>
                  <ValidatorImage
                    src={valid === "incorrect" ? Errorr : Correct}
                  />
                </>
              )}
            </>
          )}
          {loading && (
            <>
              <Input autoFocus color={"#000"} onChange={wololo} />
              {loading ? <img src={Loading} /> : <ValidatorImage src={white} />}
            </>
          )}
        </MainDiv>
        <Button onClick={() => navigate("/Logs")}>
          Ir para página dos logs
        </Button>
        <Button onClick={() => navigate("/Upload")}>
          Ir para página de upload
        </Button>
      </Main>
    </>
  );
}
