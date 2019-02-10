////////////////////////
// Process arguments
////////////////////////
var commander = require('commander');
commander.option('-p, --port [port]', 'default [8081]')
         .parse(process.argv);
//setup express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('port', Number(commander.port) || 8081);
var path = require("path");
//********** register API router **************************************
var router= require('./api/router'); 
router(app);
//**************** Start listening ***********************************
app.listen(app.get('port'), function(){
    console.log('Express started on port: ' + app.get('port') +
		'; press Ctrl-C to terminate.');
});
