import http from "../http-common";

const token = localStorage.getItem('token')
class TopicDataService {
    getAll() {
        return http.get("/topics", { headers: { Authorization: 'Bearer ' + token } });
    }

    get(id) {
        return http.get(`/topics/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    create(data) {
        return http.post("/topics", data, { headers: { Authorization: 'Bearer ' + token } });
    }
    update(id, data) {
        return http.put(`/topics/${id}`, data, { headers: { Authorization: 'Bearer ' + token } });
    }

    delete(id) {
        return http.delete(`/topics/${id}`, { headers: { Authorization: 'Bearer ' + token } });
    }

    deleteAll() {
        return http.delete(`/topics`, { headers: { Authorization: 'Bearer ' + token } });
    }

    findByTitle(title) {
        return http.get(`/topics?name=${title}`,{ headers: { Authorization: 'Bearer ' + token } });
    }
}
export default new TopicDataService();