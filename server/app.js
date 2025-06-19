const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const DatabaseCon = require('./app/config/DatabaseCon')
const cookieParser = require('cookie-parser')
const ejs = require("ejs");
const path = require("path")

DatabaseCon()
const app = express()
app.use(express.json())
app.use(cors({
  origin:"http://localhost:3000",
  credentials: true
}))
app.use(cookieParser())
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.static(__dirname + "/public"));
app.use("/upload", express.static(path.join(__dirname, "upload")));

//Auth Routes
const authRouter = require('./app/routes/UserRoutes')
app.use('/auth',authRouter)


// Admin Routing
const publicRoutes = require("./app/routes/admin/publicRoutes.js");
app.use(adminRoutes);

// Api Routing
const ApiRouter = require("./app/routes/api/ApiRoute.js");
app.use("/api", ApiRouter);


const port = 5000;
app.listen(port, () => {
  console.log("Server is running on http://localhost:5000/");
});