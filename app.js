const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

global.messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const newRouter = require("./routes/new");
app.use("/new", newRouter);

app.listen(3000);
