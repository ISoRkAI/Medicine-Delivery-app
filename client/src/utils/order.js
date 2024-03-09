import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export async function addOrder(data) {
  const { data: result } = await axios.post("/order", data);

  return result;
}
