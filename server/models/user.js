var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true,  match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/},
	first_name: { type: String, required: true, minlength: 2},
	last_name: { type: String, required: true, minlength: 2},
	pwhash: { type: String, required: true, minlength: 8 },
	birthday: { type: Date, required: true}
}, {timestamps: true});

var User = mongoose.model("User", UserSchema);
