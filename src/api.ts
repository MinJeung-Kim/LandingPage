import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003",
});

const POST = "/users";

export const getPost = async () => {
  const response = await api.get(POST);

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
