FT.manifest({
    "filename": "index.html",
    "width": 300,
    "height": 250,
    "clickTagCount": 1,
    "hideBrowsers": ["ie8"],
    "richloads": [
 		{"name":"main_rl", "src":"JetBlue_Credit_NoFee_Route2_300x250_RichLoad"}
 	],
    "instantAds": [
        {"name":"main_rl",          "type":"richloads"}, 
        {"name":"clickTag1_url",    "type":"text", "default":"http://www.landingpageurl.com/?blahblah"}
    ]
});