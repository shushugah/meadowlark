var express = require("express");
var app = express();

//static middleware -makes public directory and its files' static resources availavle
app.use(express.static(__dirname+"/public"));

//this is an html templating engine
//main, refers to views/layouts/main.handlebars as default html template.
var handlebars = require("express-handlebars")
	.create({defaultLayout:"main"});

var motivations = ["You're awesome", "We love you!", "Buy me food!", "Yay!"
];

app.engine("handlebars", handlebars.engine);	

app.set("view engine", "handlebars");

app.set("port", process.env.PORT || 3000);

// get method, defines routes for us, in this case: "/"
app.get("/", function(req, res){
	//res.status defaults to 200, not needed :)
	res.render("home");
});

app.get("/about", function(req, res){
	//takes integer value from range of 0-[array.length-1],for random index
	var randomquotes =
		motivations[Math.floor(Math.random()*(motivations.length))];
	//since we render quote here in brackets, in view page, only use two brackets, instead of three
	//yay dynamic rendering!
	res.render("about",{quote: randomquotes});
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



