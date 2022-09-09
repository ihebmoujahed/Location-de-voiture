const express = require("express");
const itemRoutes = require('./routes/item.routes')
const cors = require("cors");
const morgan = require('morgan')
const serveStatic = require('serve-static')
const path = require('path')
const bodyParser = require('body-parser')


// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require('./database-mysql');
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3001


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static(path.join('dist')));

app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log("listening on port "+PORT);
});
