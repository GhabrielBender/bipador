import React, { useState } from "react";

import Correct from "../../assets/correct.png";
import Errorr from "../../assets/error.jpg";
import white from "../../assets/white.png";
import Loading from "../../assets/loading.gif";

import { putCode } from "../../service/putCode";

import { Main, MainDiv, Input, ValidatorImage, Span } from "./styles";

export default function Home() {
  const [valid, setValid] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");

  async function handleSearch(event) {
    if (event.code !== "Enter") return;

    setLoading(true);

    const response = await putCode(inputValue);

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

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <Main>
        <MainDiv>
          {valid === "" ? (
            <>
              {loading === false && (
                <>
                  <Input
                    autoFocus
                    value={inputValue}
                    color={"#000"}
                    onKeyDown={handleSearch}
                    onChange={handleChange}
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
                      value={inputValue}
                      color={valid === "incorrect" ? "#e4011c" : "#3db39e"}
                      onKeyDown={handleSearch}
                      onChange={handleChange}
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
              <Input autoFocus color={"#000"} onChange={handleSearch} />
              {loading ? <img src={Loading} /> : <ValidatorImage src={white} />}
            </>
          )}
        </MainDiv>
      </Main>
    </>
  );
}
