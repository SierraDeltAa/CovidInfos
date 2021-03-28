// packages

const express                   = require("express");
const https                     = require("https");

// middlewares

const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/node_modules/flatpickr/dist/"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Routes const

const routes = require("./controllers/routes");
app.use(routes);

// Server start

app.listen(process.env.PORT || 3000);
