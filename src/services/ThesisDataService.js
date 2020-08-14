import http from "../http-common";

const token = localStorage.getItem('token')
class ThesisDataService {
    getAll() {
        return http.get("/thesis", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/thesis/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }
    create(data) {
        return http.post("/thesis", data, {                 
            headers: { Authorization: 'Bearer ' + token },'Content-Type': 'multipart/form-data', });
    }
    update(id, data) {
        return http.put(`/thesis/${id}`, data, { headers: { Authorization: 'Bearer ' + token },'Content-Type': 'multipart/form-data', });
    }
    delete(id) {
        return http.delete(`/thesis/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/thesis`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/thesis?title=${title}`,{ headers: { Authorization: 'Bearer ' + token } });
    }
}
export default new ThesisDataService();