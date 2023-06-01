const {readdirSync} = require ("fs");
const path = require("path");
const express = require("express");
const app = new express();
const helmet = require("helmet")
const mongoose = require("mongoose");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

//Immediately Invoked Middlewares
app.use(cors())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet())

// Routing middleware
readdirSync("./routes").map(r=>app.use("/api/v1",require(`./routes${r}`)));

// Definning Port
const port = process.env.Running_Server||8000;

// Database Connection and Server Connection
mongoose
        .connect(process.env.DATABASE)
        .then(()=>{
            app.listen(port, () => {
                console.log(`Server Running on port ${port}`);
            });
        })
        .catch((err) => console.log(err));
    