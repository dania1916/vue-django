import http from "../http-common";

const token = localStorage.getItem('token')
class StudentDataService {
    getAll() {
        return http.get("/students", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/students/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    create(data) {
        return http.post("/students", data, { headers: { Authorization: 'Bearer ' + token } });
    }

    update(id, data) {
        return http.put(`/students/${id}`, data, { headers: { Authorization: 'Bearer ' + token } });
    }

    delete(id) {
        return http.delete(`/students/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/students`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/students?title=${title}`);
    }
}

export default new StudentDataService();