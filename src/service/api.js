import axios from "axios";
import urls from "./urls";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function api() {
  const token = await AsyncStorage.getItem("@userToken");

  const request = axios.create({
    baseURL: urls.baseURL,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return request;
}
