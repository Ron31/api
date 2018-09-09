var express = require('express');
var app = express();
var fs = require("fs");
let apiRoutes = require("./api-routes")

app.use('/api', apiRoutes)
app.get('/', function (req, res) {
   res.send("Docs are coming! We are in rewrite!")
})


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
