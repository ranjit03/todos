import { getTodos as apiGetTodos } from "../api/todos";
import { getByPriority as apiGetPriority } from "../api/todos";
import { getByCategory as apiGetCategory } from "../api/todos";
import { getCompleted as apiGetCompleted } from "../api/todos";

export function getTodos() {
  return dispatch => {
    return apiGetTodos().then(todos => {
      dispatch(saveTodos(todos));
    });
  };
}

export function saveTodos(todos) {
  return {
    type: "SAVE_TODOS",
    todos: todos
  };
}

export function getByPriority(priority) {
  return dispatch => {
    return apiGetPriority(priority).then(todos => {
      dispatch(saveByPriority(todos));
    });
  };
}

export function saveByPriority(todos) {
  return {
    type: "SAVE_PRIORITY",
    todos: todos
  };
}

export function getByCategory(value) {
  return dispatch => {
    return apiGetCategory(value).then(todos => {
      dispatch(saveByCategory(todos));
    });
  };
}

export function saveByCategory(value) {
  return {
    type: "SAVE_CATEGORY",
    todos: todos
  };
}
export function getCompleted(value) {
  return dispatch => {
    return apiGetCompleted(value).then(todos => {
      dispatch(saveCompleted(todos));
    });
  };
}

export function saveCompleted(value) {
  return {
    type: "SAVE_COMPLETED",
    todos: todos
  };
}
