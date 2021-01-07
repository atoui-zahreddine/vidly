import axios from "axios"

const axiosinstance=axios.create({
    baseURL: "http://localhost:3900/api",  
})

export default  axiosinstance;
