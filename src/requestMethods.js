import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYmQ2YjdkYTNlMjViNzg5ODBhYWM3MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MzM1ODI0OCwiZXhwIjoxNjczNjE3NDQ4fQ.Ejdc8wS6ZsRpfyAQWk8GzJMNZ3-92YFO1ODhmHu7EW8"

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})


//Instead of always writing the http endpoint for axios now we can simply call publicReq and userReq for respective uses.