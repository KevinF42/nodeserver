
var http = require ('http');
var server = http.createServer (function(request, response){
	if(request.url === '/' ){
	  response.setHeader('Content-Type','text/html');
	  response.end('<hr /> <strong> Howdy! Would you like to play a game?</strong><hr />');
	}

	console.log(request.url);
});
server.listen(8080,function(){
	console.log('42 port 8080');
});

