import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export async function fetchContacts() {
  const { data } = await axios.get("/pharmacy");

  return data;
}
