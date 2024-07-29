import axios from "axios";
import { headers } from "next/headers";

export default axios.create({
  baseURL: "https://achareh.liara.run/",
  headers: {
    "Content-type": "application/json; charset=utf-8",
  },
});
