const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("newMessageForm");
});

router.post("/", (req, res) => {
  messages.push({
    user: req.body.userName,
    text: req.body.userMessage,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
