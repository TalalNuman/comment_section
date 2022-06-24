const express = require("express");
const app = express();
const port = 3000;
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", require("./routes/postRoutes"));
app.use("/api/comments", require("./routes/commentRoutes"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
