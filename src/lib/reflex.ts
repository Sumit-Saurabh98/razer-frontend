import axios from "axios";

const reflex = axios.create({
    baseURL: "https://reflex-server-n7m8.onrender.com/api",
    withCredentials: true, 
});

export default reflex;
