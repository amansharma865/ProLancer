import axios from "axios";

const axiosFetch = axios.create({
    baseURL: "https://prolancer-server.onrender.com",
    withCredentials: true
});

export default axiosFetch;
