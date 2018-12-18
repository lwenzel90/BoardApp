let express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + "/views"));

let todoRoutes = require("./routes/todos");
let boardRoutes = require("./routes/boards");
    

app.get("/", function(req, res){
    res.sendFile(__dirname + "/views/boards.html");
});


app.use("/api/todos", todoRoutes);
app.use("/api/boards", boardRoutes);

app.listen(3000, () => { console.log("listening on 3000")});