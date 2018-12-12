let express = require("express"),
    app = express();

app.set("view engine", "ejs");
app.use(express.static("public/css"));
app.use("/cssFiles", express.static(__dirname + "/public/css"));



app.get("/", function(req, res){
    res.render("boards/index", {user: "Logan"});
});

app.listen(6969, () => { console.log("listening on 6969")});