import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import urls from "./urls";

export async function getCode(barCode) {
  const dataUserJson = await AsyncStorage.getItem("@userToken");

  const dataUser = JSON.parse(dataUserJson);

  const request = axios.create({
    baseURL: urls.baseURL,
    headers: {
      Authorization: dataUser.token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  try {
    const response = await request.get(`/get/${barCode}`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
