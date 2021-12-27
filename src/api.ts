import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const isLogin = async () => {
  const response = await api.get("/login");
  return response;
};

export const getRoom = async () => {
  const response = await api.get("/rooms");
  return response;
};

export const addPost = async ({
  contactTitle,
  content,
  email,
  select,
  check,
}: {
  contactTitle: string;
  content: string;
  email: string;
  select: number;
  check: boolean;
}) => {
  await api.post("/posts", { email, contactTitle, content, select, check });
};
