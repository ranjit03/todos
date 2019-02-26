const express = require("express");
const router = express.Router();
const db = require("../db/todos");

router.get("/", (req, res) => {
  getToDos()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "somethingwent wrong" });
    });
});

router.get("/category/:category", (req, res) => {
  res.json();
});
router.get("/priority/:priority", (req, res) => {
  priority = req.params.priority;
  db.getToDosPriority(priority).then(todos => {
    res.json(todos);
  });
});
router.get("/completed", (req, res) => {
  res.json();
});

module.exports = router;
