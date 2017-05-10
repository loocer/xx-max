var app = require('express')();
var express = require('express'); //引入express模块
var http = require('http').Server(app);
var port = process.env.PORT || 12345;
var path = require('path');
app.use(express.static(path.join(__dirname, '/')))
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


http.listen(port, function(){
  console.log('listening on *:' + port);
});