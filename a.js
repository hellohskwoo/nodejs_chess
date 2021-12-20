var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var ini= require('./js/board.js');
var map=ini();
var player=2;
var flag=0;
console.log(map);
app.use('/js',express.static(__dirname+"/js/"));
app.use('/css',express.static(__dirname+"/css/"));

app.get('/',function(req,res){
	res.sendFile(__dirname+'/index.html');
});
io.on('connection',function(socket){
	console.log('hello');
	if(player==0) 
	{
		socket.emit('no');
	}
	else player--;
	socket.on('init',function(){
		socket.emit('init',map,player);
	});
	if(player==2 && flag==0)
	{
		socket.emit('start');
	}
	socket.on('turn_change',function(a,arr){
		if(a==1) 
			io.emit('return_change',0,arr );
		else 
			io.emit('return_change',1,arr );
	});
});



http.listen(8080);
