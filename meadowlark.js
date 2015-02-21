var express = require("express");
var app = express();

//this is an html templating engine
//main, refers to views/layouts/main.handlebars as default html template.
var handlebars = require("express-handlebars")
	.create({defaultLayout:"main"});

app.engine("handlebars", handlebars.engine);	

app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

// get method, defines routes for us, in this case: "/"
app.get("/", function(req, res){
	//res.status defaults to 200, not needed :)
	res.render("home");
});

app.get("/about", function(req, res){
	res.render("about");
});

//404 page, for when invalid resource requested.
app.use(function(req,res){
	res.status(404);
	res.render('404');
});

app.use(function(err, req,res,next){
	console.error(err.stack);
	res.status(500);
	res.render("505");
	
});

app.listen(app.get("port"), function(){
	console.log("express server starting up on http://localhost:"+app.get("port")+";");
});



