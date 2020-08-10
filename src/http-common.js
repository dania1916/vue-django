import Axios from "axios";
const token = localStorage.getItem('token')

export default Axios.create({
    baseURL: "http://localhost:8000/api/",
    Headers: {
        'Content-Type': 'multipart/form-data',
        "dataType": "json",
        "headers":{Authorization: 'Bearer ' + token}
    }
});