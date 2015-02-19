var express = require("express");
var app = exoress();

app.set("port", process.env.PORT || 3000);

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



