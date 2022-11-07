import AsyncStorage from "@react-native-async-storage/async-storage";
import Fetch from "react-fetch";

export async function uploadImage(path) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzIjoiMjAyMi0xMS0wN1QwNDowNjoxOC4wNTk2ODgiLCJzZXNzaW9uIjoiZmFiaW8sY29ydGUsdGVzdGUifQ.eou1pjHFM4yk0TLC8EmBqlFiZkXfIzee7yBW6g71vbA"
  );
  myHeaders.append("Content-Type", "application/octet-stream");

  var file = path;

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: file,
    redirect: "follow",
  };

  fetch(
    "https://8zo9fxrn3c.execute-api.us-east-1.amazonaws.com/dev/post",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log("adasdasd", result))
    .catch((error) => console.log("error", error));
}
