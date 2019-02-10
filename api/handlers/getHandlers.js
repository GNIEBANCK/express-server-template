'use strict';
exports.getEntity = function (req, res) {
	// path parameters
	var pathParam = req.params.pathParam;
	// query parameters
	for (var param in req.query) {
		query_key = param;
		query_value = req.query[param];
	}

	var request = require('request');
	var yahoo_req = {};
	yahoo_req.url = "https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + zip + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
	request.get(yahoo_req, function (error, response, body) {
		if (error) {
			res.status(400).send({ error: "Bad Request" });
		}
		else {
			var body_obj = JSON.parse(body);
			var temp = Number(body_obj.query.results.channel.item.condition.temp);
		}
		var response_object = {};
		if (query_value === "Celsius") temp = Math.round((temp - 32) / 1.8);
		response_object.temperature = temp;
		response_object.scale = query_value;
		res.status(200).json(response_object);
	});
};
	
