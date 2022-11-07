import React, { useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import { uploadImage } from "../../service/uploadImage";
import { Main, SendButton } from "./styles";

export default function Upload(props) {
  const [showButton, setShowButton] = useState(false);
  const [file, setFile] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  async function sendFile() {
    const response = await uploadImage(file.path);
  }

  return (
    <Main>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p> Arraste o arquivo pra cá ... </p>
        ) : (
          <p>
            {file
              ? file.name
              : "Arraste a imagem aqui ou clique para selecionar o arquivo"}
          </p>
        )}
      </div>
      <SendButton onClick={sendFile}>Enviar arquivo</SendButton>
    </Main>
  );
}
