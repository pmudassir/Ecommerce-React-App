import axios from "axios";

const BASE_URL = "https://ec2-3-133-116-53.us-east-2.compute.amazonaws.com/";

const user = JSON.parse(localStorage.getItem("persist:root")) && JSON.parse(localStorage.getItem("persist:root")).user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser && currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});


//Instead of always writing the http endpoint for axios now we can simply call publicReq and userReq for respective uses.
