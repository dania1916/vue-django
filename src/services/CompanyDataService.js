import http from "../http-common";

const token = localStorage.getItem('token')
class CompanyDataService {
    getAll() {
        return http.get("/companies", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/companies/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    create(data) {
        return http.post("/companies", data, { headers: { Authorization: 'Bearer ' + token } });
    }

    update(id, data) {
        return http.put(`/companies/${id}`, data, { headers: { Authorization: 'Bearer ' + token } });
    }

    delete(id) {
        return http.delete(`/companies/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/companies`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/companies?name=${title}`,{ headers: { Authorization: 'Bearer ' + token } });
    }
}

export default new CompanyDataService();