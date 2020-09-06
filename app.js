// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
// require the date module created in the views folder
// returns the date in a specified format
const date = require(__dirname + "/date.js");

const app = express();


// enable use of ejs
app.set("view engine", "ejs");

// enable body parser
app.use(bodyParser.urlencoded({
  extended: true
}));

// makes sure express adds these files
app.use(express.static("public"));

// array to store new todo items user has created
const items = ["One", "Two", "Three"];
// array for work items todo list
const workItems = [];

app.get("/", function(req, res) {
  // call function bound to Date
  // from the module  created @ date.js
  const day = date.getDate();
  // send back ejs file
  res.render("list", {
    listTitle: day,
    newListItems: items
  });

});

app.post("/", function(req, res) {

  // get the new todo item created by user
  const item = req.body.newItem;

  // if post request came from /work page
  // then push item to workItems array and redirect
  // back to /work
  if (req.body.list === "Work") {
    workItems.push(item);
    res.redirect("/work");

    // post request came from "/"
  } else {
    // store it in array items
    items.push(item);
    // redirect to the main page
    res.redirect("/");
  }

});

app.get("/work", function(req, res) {
  res.render("list", {
    listTitle: "Work list",
    newListItems: workItems
  });
});


app.listen(3000, function() {

  console.log("Server started on port 3000");

});
