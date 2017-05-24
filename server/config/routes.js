var mongoose = require('mongoose');
var users = require("../controllers/users.js");

module.exports = function(app){

	app.post("/register", function(req, res){
		console.log("register");
		users.register(req, res);
	})

	app.post("/login", function(req, res){
		users.login(req, res);
	})

	app.get("*", function(req, res){
	    res.sendFile(path.resolve("client/dist/index.html"))
	})

}
