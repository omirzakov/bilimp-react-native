import axios from "axios"
const BASE_URL = "http://192.168.0.110:8080"


export const registerAccount = (user) => {

    return  axios.post(`${BASE_URL}/authentication/register`, {
        email: user.email,
        fullName: user.fullName,
        id: null,
        password: user.password,
        roles: [
            {
                id: 0,
                role: null
            }
        ]
    })
    .then(res => res)
    .catch(err => err)
}

export const loginInit = (user) => {
    return  axios.post(`${BASE_URL}/auth`, {
        email: user.email,
        password: user.password,
    })
    .then(res => res)
    .catch(err => err)
}