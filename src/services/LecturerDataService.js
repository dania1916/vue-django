import http from "../http-common";

const token = localStorage.getItem('token')


class LecturerDataService {
  getAll() {
    return http.get("/lecturers",{ headers:{Authorization: 'Bearer ' + token }});
  }

  get(id) {
    return http.get(`/lecturers/${id}`,{ headers:{Authorization: 'Bearer ' + token }});
  }

  create(data) {
    return http.post("/lecturers", data, { headers:{Authorization: 'Bearer ' + token }});
  }

  update(id, data) {
    return http.put(`/lecturers/${id}`, data, { headers:{Authorization: 'Bearer ' + token }});
  }

  delete(id) {
    return http.delete(`/lecturers/${id}`,{ headers:{Authorization: 'Bearer ' + token }});
  }

  deleteAll() {
    return http.delete(`/lecturers`,{ headers:{Authorization: 'Bearer ' + token }});
  }

  findByTitle(title) {
    return http.get(`/lecturers?name=${title}`,{ headers:{Authorization: 'Bearer ' + token }});
  }
}

export default new LecturerDataService();