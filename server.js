var express = require('express');
var app = express();
var fs = require("fs");
let apiRoutes = require("./routes/api-routes");
let imageRoutes = require('./routes/image-routes');
let bodyParser = require('body-parser');
var DB = require("./database");

// TODO: für alles: Token check!

app.use(bodyParser.json({ type: "application/json"}));

//app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/image', imageRoutes);
app.use('/api', apiRoutes);


app.get('/', function (req, res) {
   res.send("Docs are coming! We are in rewrite! -> Endpoints: /api & /api/image")
});


var server = app.listen(8081, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);

  try {
    DB.connection.sync();
    console.log("Synced!")
  } catch(e) {
    console.log("No Syncing! err!" + e)
  }

});
