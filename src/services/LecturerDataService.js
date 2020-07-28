import http from "../http-common";

const token = localStorage.getItem('token')


class LecturerDataService {
  getAll() {
    return http.get("/lecturers");
  }

  get(id) {
    return http.get(`/lecturers/${id}`);
  }

  create(data) {
    return http.post("/lecturers", data, { headers:{Authorization: 'Bearer ' + token }});
  }

  update(id, data) {
    return http.put(`/lecturers/${id}`, data);
  }

  delete(id) {
    return http.delete(`/lecturers/${id}`);
  }

  deleteAll() {
    return http.delete(`/lecturers`);
  }

  findByTitle(title) {
    return http.get(`/lecturers?title=${title}`);
  }
}

export default new LecturerDataService();