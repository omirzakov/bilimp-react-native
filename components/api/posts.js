import axios from "axios";
import { BASE_URL } from ".";
import { getToken } from "./token";

export const getAllPosts = async () => {
  const jwt = await getToken();
  console.log(jwt);
  return axios
    .get(`${BASE_URL}/api/posts`, {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};
