import mongoose from 'moongose'
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  res.json({
    name: "rohit",
    age: 32,
  });
});

app.listen(3000, () => console.log("running"));
