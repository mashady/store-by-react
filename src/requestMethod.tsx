import axios from "axios"

const BASE_URL = "http://localhost:8000/api/"
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = localStorage.getItem("token")
//const currentUser = user && JSON.parse(user).currentUser
//const TOKEN = currentUser?.accessToken

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  headers: { token: user },
  baseURL: BASE_URL,
})
