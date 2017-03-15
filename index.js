var express = require('express');
var app = express();
var cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
	//console.log('req.query: ' + req.query);
	console.log('req.query.username: ' + req.query.username);
	//const re = new RegExp('(https?:)?(\/\/)?((telegram|vk|vkontakte)[^\/]*\/)?([a-zA-Z0-9]*)');


	
	//console.log(array);
	/*var jsonValue = res.json({
		url: req.query.url,
	});*/
	//console.log(jsonValue);

	var input = req.query.username;
	var parseInput = username(input);

	if(parseInput != null){
		res.send('@' + parseInput);
	}else{
		res.send('Invalid username');
	}
  	
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

function username(input){
	var array = [
	'pavel.durov',
	'dan_abramov',
	'tjholowaychuk',
	'durov',
	'skillbranch',
	'kriasoft',

	];
	for(var i = 0; i < array.length; i++){
		var inputNew = input.match(array[i]);
		console.log('inputNew: ' + inputNew);
		if(inputNew != null){
			return inputNew;
		}
	}
	return null;
}