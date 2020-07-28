import http from "../http-common";
// import authHeader from './auth-header';

const token = localStorage.getItem('token')
// const token = 'dadada'
class TopicDataService {
  getAll() {
    return http.get("/topics", { headers:{Authorization: 'Bearer ' + token }});
  }

  get(id) {
    return http.get(`/topics/${id}`);
  }
  create(data) {
    return http.post("/topics", data, { headers:{Authorization: 'Bearer ' + token }});
    }
  
  update(id, data) {
    return http.put(`/topics/${id}`, data);
  }

  delete(id) {
    return http.delete(`/topics/${id}`);
  }

  deleteAll() {
    return http.delete(`/topics`);
  }

  findByTitle(title) {
    return http.get(`/topics?title=${title}`);
  }
}

export default new TopicDataService();