const express = require("express");
const dotnev = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("./Middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors")
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/todos", require("./routes/todoRoutes"));

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`));
