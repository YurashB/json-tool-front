import axios from "axios";
import router from "@/components/router/router";

axios.defaults.baseURL = "http://localhost:8081/jsontool/"


axios.interceptors.response.use(response => response, async error => {
    if (error.response.status === 401) {
        const response = await axios.post("auth/refresh", {}, {withCredentials: true})

        if (response.status === 200) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data["accessToken"]}`
            return axios(error.config)
        }

    }
    return error;
})