import request from "superagent";

export function getTodos() {
  return request.get("/api/v1/todos").then(res => res.body);
}

export function getByPriority(priority) {
  return request
    .get("/api/v1/todos/priority/" + priority)
    .then(res => res.body);
}
