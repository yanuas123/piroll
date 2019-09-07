var mongoose = require("../mongo");
var ContactInfo = new mongoose.Schema({
	description: String,
	address: String,
	phone: String,
	email: {
		type: String,
		required: true
	},
	fax: String,
	coord_lng: Number,
	coord_lat: Number,
	company_name: {
		type: String,
		required: true
	},
	copyright: {
		type: String,
		required: true
	}
});
var schemaContactInfo = new mongoose.Schema({
	logo_url: {
		type: String,
		required: true
	},
	contact_info: {
		type: ContactInfo,
		required: true
	},
	short_description: {
		title: String,
		description: String
	},
	banner_description: {
		image_url: {
			type: String,
			required: true
		},
		title: {
			type: String,
			required: true
		},
		description: String
	},
	about_me: {
		type: {
			description: {
				type: String,
				required: true
			},
			sign_image_url: String,
			image_url: {
				type: String,
				required: true
			}
		},
		required: true
	},
	work_process: {
		type: {
			description: String,
			video_url: {
				type: String,
				required: true
			}
		},
		required: true
	},
	order_description: String
});
var ContactInfo = mongoose.model("ContactInfo", schemaContactInfo);
module.exports = ContactInfo;