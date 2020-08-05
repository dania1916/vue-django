import http from "../http-common";
const token = localStorage.getItem('token')


class AuthenticationDataService {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`,{ headers: { Authorization: 'Bearer ' + token } });
  }

  create(data) {
    return http.post("/auth/login/", data);
  }

  update(id, data) {
    return http.put(`/companies/${id}`, data);
  }

  delete(id) {
    return http.delete(`/companies/${id}`);
  }

  deleteAll() {
    return http.delete(`/companies`);
  }

  findByTitle(title) {
    return http.get(`/companies?title=${title}`);
  }
}

export default new AuthenticationDataService();