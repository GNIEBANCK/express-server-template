'use strict';
exports.getParams = function (req, res) {
	try {
		let results = {};
		// path parameters
		results[pathParam] = req.params.pathParam;
		// query parameters
		for (var param in req.query) {
			results[param] = req.query[param];
		}
		res.status(200).json(results);
	}
	catch (error) {
		res.status(500).send({ error: "An error has occurred" });
	}
};

