let express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let todoRoutes = require("./routes/todos");
    
app.get("/", function(req, res){
    res.send("Hello from root route");
});

app.use("/api/todos", todoRoutes);

app.listen(3000, () => { console.log("listening on 3000")});