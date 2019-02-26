exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("todos")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("todos").insert([
        {
          id: 1,
          task: "good luck",
          priority: "5",
          category: "work",
          is_complete: "true"
        },
        {
          id: 2,
          task: "work hard",
          priority: "4",
          category: "work",
          is_complete: "false"
        },
        {
          id: 3,
          task: "you are great",
          priority: "3",
          category: "personal",
          is_complete: "true"
        }
      ]);
    });
};
