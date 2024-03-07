import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export async function fetchProduct() {
  const { data } = await axios.get("/product");

  return data;
}
