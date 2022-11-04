import React, { useState } from "react";
import { Main, MainDiv, Input, ValidatorImage } from "./styles";
import Correct from "../../assets/correct.png";
import Errorr from "../../assets/error.jpg";
import white from "../../assets/white.png";

export default function Home() {
  const [valid, setValid] = useState("");

  function wololo(event) {
    const valor = event.target.value;

    if (valor === "vrum") {
      setValid("correct");
    }
    if (valor === "ghabril") {
      setValid("incorrect");
    }

    if (valor === "") {
      setValid("");
    }
  }
  return (
    <Main>
      <MainDiv>
        {valid === "" ? (
          <>
            {/* <Input color={"#3db39e"} onChange={wololo} /> */}
            <Input color={"#000"} onChange={wololo} />

            <ValidatorImage src={white} />
          </>
        ) : (
          <>
            <Input
              color={valid === "incorrect" ? "#e4011c" : "#3db39e"}
              onChange={wololo}
            />
            <ValidatorImage src={valid === "incorrect" ? Errorr : Correct} />
          </>
        )}
      </MainDiv>
    </Main>
  );
}
