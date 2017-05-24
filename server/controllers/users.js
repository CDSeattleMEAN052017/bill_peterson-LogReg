var mongoose = require('mongoose');
var User = mongoose.model("User");
var bcrypt = require("bcrypt");
var session = require("express-session");

module.exports = {

	register: function(req, res){
		var user = new User({email: req.body.email, first_name: req.body.first_name, last_name: req.body.last_name, birthday: req.body.birthday, pwhash: req.body.password });

		var salt = bcrypt.genSaltSync(8);
		var hash = bcrypt.hashSync(user.pwhash, salt);
		user.pwhash = hash;

        user.save(function(err){
            if(err){
                console.log("something went wrong");
                console.log(err);
                res.status(400).json(err);
            }
            else{
                console.log("user created");
                res.json(user);
            }
        })
	},

	login: function(req, res){
		console.log(req.body);
		User.findOne({email: req.body.email}, function(err, user){

			if(err){
				console.log("something went wrong");
                console.log(err);
				res.json(err);
			}
			else if(!bcrypt.compareSync(req.body.password, user.pwhash)){
				console.log("password does not match");
				res.status(400).json({message: "Password incorrect."})
			}
			else{
				console.log("getting friend");
				req.session.userFirstName = user.first_name;
				req.session.userLastName = user.last_name;
				req.session.user_id = user._id;
				res.json({_id: req.session.user_id, first_name: req.session.userFirstName, last_name: req.session.userLastName});
			}
		})
	}
}
