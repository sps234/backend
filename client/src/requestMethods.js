import axios from "axios";

const BASE_URL = "http://localhost:5000/backend/";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
let TOKEN = currentUser?.accessToken;
TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjRkMDM0YmM2ODU1YTZhNDZhOTI3YiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxNDYzOTcxMywiZXhwIjoxNzE0NjQzMzEzfQ.rLCf3TOodpmJrgnJ6LsDpO2o8DQpkktC2MzWAkuRTsw"
console.log(TOKEN)

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
