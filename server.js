var express = require ('express');
var app = express();
var path = require ('path');
var port = process.env.PORT || 1616;

app.use(express.static('public'));

app.get('/', function (req, res){
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(port, function(){
  console.log('listening on port:', port);
});
