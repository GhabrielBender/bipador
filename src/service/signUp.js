import { api } from "./api";

export async function signUpService(user, password) {
  try {
    const response = await api.post(`/login`, {
      usuario: user,
      senha: password,
      etapa: "teste",
      estacao: "teste",
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
}
