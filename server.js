var express = require("express");
var app = express();

global.rootDir = __dirname;
app.use(express.static(__dirname + "/public"));



var bodyParser = require("body-parser"); // Request content parser
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());

/* connect database */
const MainMenu = require('./server_modules/db_models/mainmenumodel');
const FooterMenu = require('./server_modules/db_models/footermenumodel');
const ContactInfo = require('./server_modules/db_models/contactinfomodel');
const SocialNetwork = require('./server_modules/db_models/socialnetworkmodel');
const Indicator = require('./server_modules/db_models/indicatormodel');
const Gallery = require('./server_modules/db_models/gallerymodel');

function checkDBError(err, data, res) {
	if(err || !data) {
		res.status(500).send();
		return false;
	} else return true;
}
function checkDBRequest(err, data, res) {
	if(checkDBError(err, data, res)) {
		if(data instanceof Array && data.length) return true;
		else {
			res.status(204).send();
			return false;
		}
	}
}




/* routing ------------------------------------------------------------------ */

app.get("/", function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});


app.get("/startinfo", function(req, res) {

	MainMenu.find({}, function(err, main_menu_data) {
		if(checkDBRequest(err, main_menu_data, res)) {

			FooterMenu.find({}, function(err, footer_menu_data) {
				if(checkDBRequest(err, footer_menu_data, res)) {

					SocialNetwork.find({}, function(err, social_network_data) {
						if(checkDBError(err, social_network_data, res)) {

							ContactInfo.find({}, function(err, contact_info_data) {
								if(checkDBRequest(err, contact_info_data, res)) {
									let obj = {
										main_menu: main_menu_data,
										footer_menu: footer_menu_data,
										social_network: social_network_data,
										contact_info: contact_info_data
									};
									res.status(200).send(obj);
								}
							});
						}
					});
				}
			});
		}
	});
});
app.get("/indicators", function(req, res) {
	Indicator.find({}, function(err, data) {
		if(checkDBRequest(err, data, res)) {
			res.status(200).send(data);
		}
	});
});

// getting gallery data
function getAllGallery(req, res) {
	Gallery.find({}, function(err, data) {
		if(checkDBRequest(err, data, res)) res.status(200).send(data);
	});
}
function getGalleryItem(req, res) {
	Gallery.find({
		url: req.params.url
	}, function(err, data) {
		if(checkDBRequest(err, data, res)) res.status(200).send(data[0]);
	});
}
app.get("/gallery/:url", function(req, res) {
	if(req.params.url) getGalleryItem(req, res);
	else getAllGallery(req, res);
});


app.post("/message", function(req, res) {
	res.status(201).send();
});
app.post("/order", function(req, res) {
	res.status(201).send();
});

/* end Routing -------------------------------------------------------------- */

//let new_doc = new SocialNetwork({
//	title: "happy_clients",
//	name: "Happy Clients",
//	url: "icon__happy_clients",
//	msg_title: "",
//	msg_text: "",
//	msg_image_url: "",
//	msg_url: ""
//});

//let new_doc = new Gallery({
//	name: "light_breakfast5",
//	title: "Light Breakfast 5",
//	url: "light_breakfast5",
//	image_url: "images/images/project-5.jpg",
//	thumbnail_image_url: "images/images/project-5.jpg",
//	description: "<p>Light his can't a creeping. Be, bring blessed night. Replenish blessed creature good. Saw earth every creepeth lights day, divided abundantly form. In. Said given lights. Sixth the male. Upon their multiply. Kind beast. Him tree upon.</p> <p>Cattle. Dominion day herb she'd creeping divide darkness. Which. Subdue had.</p>",
//	client: "Emma Morris",
//	date: new Date("2017-06-29")
//});

//new_doc.save(function(err) {
//	if(err) console.log(err);
//	else console.log("OK");
//});





app.listen(process.env.PORT || 8080);
console.log("Run server!");