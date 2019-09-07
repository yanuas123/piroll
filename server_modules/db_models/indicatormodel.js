var mongoose = require("../mongo");
var schemaIndicator = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	class_name: {
		type: String,
		required: true
	},
	count: {
		type: Number,
		required: true
	}
});
var Indicator = mongoose.model("Indicator", schemaIndicator);
module.exports = Indicator;