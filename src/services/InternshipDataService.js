import http from "../http-common";

const token = localStorage.getItem('token')
class InternshipDataService {
    getAll() {
        return http.get("/internships", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/internships/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }
    create(data) {
        return http.post("/internships", data, {                 
            headers: { Authorization: 'Bearer ' + token },'Content-Type': 'multipart/form-data', });
    }
    update(id, data) {
        return http.put(`/internships/${id}`, data, { headers: { Authorization: 'Bearer ' + token } });
    }

    delete(id) {
        return http.delete(`/internships/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/internships`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/internships?title=${title}`,{ headers: { Authorization: 'Bearer ' + token } });
    }
}
export default new InternshipDataService();