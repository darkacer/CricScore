const express = require("express");
var app = express();


// Create link to Angular build directory
//var distDir = __dirname + "/dist/";
app.use(express.static(_dirname + '/dist'));
app.listen(process.env.PORT || 8080);
