FT.manifest({
    "filename": "index.html",
    "width": 300,
    "height": 250,
    "clickTagCount": 1,
    "hideBrowsers": ["ie8"],
    "richloads": [
 		{"name":"main_rl", "src":"JetBlue_Credit_NoFee_Route1_300x250_RichLoad"}
 	],
    "instantAds": [
        {"name":"main_rl",          "type":"richload"}, 
        {"name":"clickTag1_url",    "type":"text", "default":"http://www.landingpageurl.com/?blahblah"}
    ]
});