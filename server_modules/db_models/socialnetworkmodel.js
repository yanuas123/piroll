var mongoose = require("../mongo");
var schemaSocialNetwork = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	msg_title: {
		type: String,
		required: true
	},
	msg_text: String,
	msg_image_url: String,
	msg_url: {
		type: String,
		required: true
	}
});
var SocialNetwork = mongoose.model("SocialNetwork", schemaSocialNetwork);
module.exports = SocialNetwork;