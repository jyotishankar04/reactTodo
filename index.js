const express = require("express");
const { createTodo, updateTodo } = require("./types.js");
const zod = require("zod");
const app = express();

//!Creating a todo
app.post("/todo", (req, res) => {
  const createPayload = req.body;
  const parsePayload = createTodo.safeParse(createPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  //put it in mongoDb
});

//!Getting a todo
app.get("/todos", (req, res) => {});

//!Completing a todo
app.post("/completed", (req, res) => {
  const updatePayload = req.body;
  const parsePayload = updateTodo.safeParse(updatePayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent wrong inputs",
    });
    return;
  }
  //put it in mongoDb
});
