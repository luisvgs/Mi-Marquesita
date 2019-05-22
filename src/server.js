const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


var app = express();

Mongoose.connect("mongodb://localhost/marquesita");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Food Model
const foodModel = Mongoose.model("food", {
    name: String,
    description:String
    price:Number
})

app.liste(3000, () =>{
    console.log("Connected");
})