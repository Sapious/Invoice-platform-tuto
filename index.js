const express = require("express");
const app = express();
const mongoose = require("mongoose");

// DB connection
mongoose.connect("mongodb://localhost:27017/invoice-db");
mongoose.connection.on("connected", () => {
  console.log("DB connected");
});
mongoose.connection.on("error", (err) => {
  console.log("there is error in ", err);
});

//import route middlewares
const authRoutes = require("./routes/auth.routes");
//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//routes middlewares
app.use("/auth", authRoutes);
//server listening
const port = 8000;
app.listen(port, () => {
  console.log(`this server is running on port ${port}`);
});
