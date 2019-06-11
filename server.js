const express = require('express');
const app = express();


// Create link to Angular build directory
//var distDir = __dirname + "/dist/";
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);
