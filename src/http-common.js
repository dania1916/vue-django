import Axios from "axios";

export default Axios.create({
    baseURL: "http://localhost:8000/api/",
    Headers:{
        "Content-type": "application/json",
        "dataType": "json",
    }
});