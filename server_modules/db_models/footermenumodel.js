var mongoose = require("../mongo");
var schemaFooterMenu = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});
var FooterMenu = mongoose.model("FooterMenu", schemaFooterMenu);
module.exports = FooterMenu;