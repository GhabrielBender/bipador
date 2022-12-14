import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import urls from "./urls";

export async function signUpService(user, password, station, stage) {
  const request = axios.create({
    baseURL: urls.baseURL,
    headers: {
      // Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  try {
    const response = await request.post(`/login`, {
      usuario: user,
      senha: password,
      etapa: stage,
      estacao: station,
    });
    const jsonValue = JSON.stringify(response.data);
    await AsyncStorage.setItem("@userToken", jsonValue);
    return response;
  } catch (err) {
    console.log(err);
  }
}
