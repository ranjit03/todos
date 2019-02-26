const connection = require("./connection");

function getToDos(testDb) {
  const db = testDb || connection;
  return db("todos");
}

function getToDosCategory(category, testDb) {
  const db = testDb || connection;
  return db("todos").where("category", category);
}

function getToDosPriority(priority, testDb) {
  const db = testDb || connection;
  return db("todos").where("priority", priority);
}

module.exports = {
  getToDosCategory,
  getToDosPriority,
  getToDos
};
