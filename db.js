// todo{
//     title:string,
//     description:string,
//     completed:boolean
// }

const mongoose = require("mongoose");
const { boolean } = require("zod");
// mongo URL
// mongodb+srv://jyotishankarlearn:Subham%40mongo@cluster0.ldfa6vq.mongodb.net/
mongoose.connect(
  "mongodb+srv://jyotishankarlearn:Subham%40mongo@cluster0.ldfa6vq.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports({
  todo,
});
