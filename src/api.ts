import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003",
});

const POST = "/users";

export const getPost = async () => {
  const response = await api.get(POST);

  return response;
};
