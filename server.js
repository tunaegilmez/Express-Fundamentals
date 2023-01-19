const express = require("express");

const users = [
  {
    id: 1,
    name: "Tuna Eğilmez",
    place: "Antalya",
  },
];

const app = express();
const PORT = 3000;

app.use(express.json());

// Get Request
// localhost:3000/users
app.get("/users", (req, res, next) => {
  //   res.send("<h1>Hello Express</h1>");
  res.json({
    success: true,
    data: users,
  });
});

app.post("/users", (req, res, next) => {
  const user = req.body;
  users.push(user);
  res.json({
    success: true,
    data: users,
  });
});

app.put("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users[i] = {
        ...users[i],
        ...req.body,
      };
    }
  }
  res.json({
    success: true,
    data: users,
  });
});

app.delete("/users/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      users.splice(i, 1);
    }
  }
  res.json({
    success: true,
    data: users,
  });
});

app.listen(PORT, () => {
  console.log("Server Started - PORT: " + PORT);
});
