import http from "../http-common";
const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6Im5hbmRhQG1haWwudWdtLmFjLmlkIiwiZXhwIjoxNTk1Mzg1NTY5LCJlbWFpbCI6Im5hbmRhQG1haWwudWdtLmFjLmlkIn0.tFcxzf-SaWLTrVphnEiJHvmg6bgVriNM6mbLn8CLUoE";

class TopicDataService {
  getAll() {
    return http.get("/topics");
  }

  get(id) {
    return http.get(`/topics/${id}`);
  }

  create(data) {
    return http.post("/topics", data,
    {
      headers:{Authorization: 'Bearer ' + token }
    });
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