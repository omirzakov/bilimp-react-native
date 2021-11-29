import axios from "axios";
import { BASE_URL } from ".";
import { getToken } from "./token";

export const getAllSubjects = async () => {
  const jwt = await getToken();
  console.log(jwt)
  return axios.get(`${BASE_URL}/api/subjects`, {
      headers: {
        Authorization: "Bearer " + jwt,
      },
    })
    .then((res) => res)
    .catch((err) => err);
};


export const getAllTeachersBySubject = async (id) => {
    
    return axios.get(`${BASE_URL}/api/v3/teachers/subjects/${id}`)
                .then(res => res)
                .catch(err => err);
}