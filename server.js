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
var routes = require('./api/router'); 
routes(app);
//************Generic Error Handling*************************************
app.use(function(req,res,next,err){
    res.status(404);
    res.sendFile(path.join(__dirname+'/views/404.html'));
});
app.use(function(req,res,next,err){
    console.error(err.stack);
    res.status(500);
    res.sendFile(path.join(__dirname+'/views/500.html'));
});

//**************** Start listening ***********************************
app.listen(app.get('port'), function(){
    console.log('Express started on port: ' + app.get('port') +
		'; press Ctrl-C to terminate.');
});
