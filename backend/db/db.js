const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://kjimenezm:5GGQSqRw5sBSya0h@cluster0.dhz40my.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(DB_URL,{})

    .then(db => console.log("se conecto la base de datos"))
    .catch(err => console.log("error"))