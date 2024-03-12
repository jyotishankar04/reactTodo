const express = require("express");

const app = express();

//!Creating a todo
app.post("/todo", (req, res) => {});

//!Getting a todo
app.get("/todos", (req, res) => {});

//!Completing a todo
app.post("/completed", (req, res) => {});
