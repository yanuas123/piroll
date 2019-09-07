var mongoose = require("../mongo");
var GallerySocialNetwork = new mongoose.Schema({
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
var schemaGallery = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true,
		unique: true
	},
	image_url: {
		type: String,
		required: true
	},
	alt: String,
	thumbnail_image_url: {
		type: String,
		required: true
	},
	thumbnail_image_fit_ratio: Boolean,
	description: String,
	client: String,
	date: Date,
	share: [GallerySocialNetwork]
});
var Gallery = mongoose.model("Gallery", schemaGallery);
module.exports = Gallery;