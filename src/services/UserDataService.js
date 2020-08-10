import http from "../http-common";

const token = localStorage.getItem('token')
class UserDataService {
    getAll() {
        return http.get("/users", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/users/${id}`, { headers: { Authorization: 'Bearer ' + token }, });
    }

    create(data) {
        return http.post("/users", data, { headers: { Authorization: 'Bearer ' + token } });
    }
    update(id, data) {
        return http.put(`/users/${id}/`, data, { headers: { Authorization: 'Bearer ' + token },'Content-Type': 'multipart/form-data', });
    }

    delete(id) {
        return http.delete(`/users/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/users`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/users?title=${title}`,{ headers: { Authorization: 'Bearer ' + token } });
    }
}
export default new UserDataService();