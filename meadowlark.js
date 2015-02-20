var express = require("express");
var app = express();

//this is an html templating engine
var handlebars = require("express-handlebars")
	.create({defaultLayout:"main"});

app.engine("handlebars", handlebars.engine);	

app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

// get method, defines routes for us, in this case: "/"
app.get("/", function(req, res){
	res.type("text/plain");
	//res.status defaults to 200, not needed :)
	res.send("Meadow Lark Travel");
});

app.get("/about", function(req, res){
	res.type("text/plain");
	res.send("About Meadow Lark Travel");
});

//404 page, for when invalid resource requested.
app.use(function(req,res){
	res.type("text/plain");
	res.status(404);
	res.send('404 - Not Found');
});

app.use(function(req,res,next){
	res.type("text/plain");
	res.status(500);
	res.send("server error");
});

app.listen(app.get("port"), function(){
	console.log("express server starting up on http://localhost:"+app.get("port")+";");
});



