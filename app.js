const express = require("express");
const app = express();

app.get("/api/notes", async (request, response) => {
  let result = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2023-10-01T17:30:31.098Z",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      date: "2023-10-01T18:39:34.091Z",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2023-10-01T19:20:14.298Z",
      important: true,
    },
  ];
  response.json(result);
});

module.exports = app;
