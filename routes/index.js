var express = require("express");
var router = express.Router();
const path = require("path");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/first", function(req, res) {
  res.send("This is some text");
});

router.get("/hello/:name", function(req, res) {
  res.send("hello " + req.params.name + "!");
});

router.get("/second", function(req, res) {
  console.log(__dirname);
  res.sendfile("public/file1.html");
});

module.exports = router;
