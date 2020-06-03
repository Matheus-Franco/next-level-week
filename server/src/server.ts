import express from "express";

const app = express();

app.get("/users", (req, res) => {
  console.log("User List");

  res.json(["Matheus", "Cinthya", "Naju", "Zelia"]);
});

app.listen(3333, () => {
  console.log("Backend Executando.");
});
