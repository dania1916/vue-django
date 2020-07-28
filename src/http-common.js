import Axios from "axios";
const token = localStorage.getItem('token')

export default Axios.create({
    baseURL: "http://localhost:8000/api/",
    Headers: {
        "Content-type": "application/json",
        "dataType": "json",
        "headers":{Authorization: 'Bearer ' + token}
    }
});