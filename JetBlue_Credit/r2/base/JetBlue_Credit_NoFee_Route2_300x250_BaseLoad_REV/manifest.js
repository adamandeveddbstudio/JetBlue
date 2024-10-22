FT.manifest({
	"filename": "index.html",
	"width": 300,
	"height": 250,
	"clickTagCount": 3,
	"hideBrowsers": ["ie8"],
	"richLoads": [
		{ "name": "RL1", "src": "JetBlue_Credit_NoFee_Route2_300x250_RichLoad_REV" },
	],
	"instantAds": [
		{ "name": "RL1", "type": "richLoad" },
		{ "name": "clickTag1_url", "type": "text", "default": "http://www.landingpageurl.com/?blahblah" }
	]
});
