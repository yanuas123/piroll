var mongoose = require("../mongo");
var schemaMainMenu = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});
var MainMenu = mongoose.model("MainMenu", schemaMainMenu);
module.exports = MainMenu;