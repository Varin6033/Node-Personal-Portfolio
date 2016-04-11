/*var express = require("express");
var app = express();

/*
app.use('/',function (req,res) {
  res.send('Hello World');  
});*/

/*
app.get('/',function(req,res){
    res.send("This is a GET request");
});

app.post('/',function(req,res){
    res.send("This is a POST request");
});
*/

/*
app.route('/').get(function(req,res){
    res.send('This is a GET request for the route function');
}).post(function(req,res){
    res.send('This is a POST request');
});
*/

/*
var hashName = function(req,res,next) {
    if(req.param('name')){
        next();
    }
    else{
        res.send('What is your name?');
    }
};

var sayHello = function(req,res,next){
    res.send('Hello' + req.param('name'));
};
*/

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// mongoose = require('./config/mongoose'),
 var express = require('./config/express');

//var db = mongoose();
var app = express();


app.listen(3000);

module.exports = app;
console.log('server running at http://localhost:30000');