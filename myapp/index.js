var express = require("express");
var path = require("path");
var app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get("/", function (req, res) {
    // Send HTML file for the root route
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get("/will", function (req, res) {
  res.send('{ "response": "Hello World" }');
});

app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, It works!" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
