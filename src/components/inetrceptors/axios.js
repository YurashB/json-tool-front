import axios from "axios";

axios.defaults.baseURL = "http://localhost:8081/jsontool/auth"

axios.interceptors.response.use(response => response, error => {
    if(error.response.status === 401) {
        axios.post("/refresh", {}, {withCredentials: true})
            .then((response) => {
                if(response.status === 200) {
                    console.log(response.data)
                    axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`
                }
            })
            .catch(error => {
                console.log(error)
            })

    }

    return error;
})