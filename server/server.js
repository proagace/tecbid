const mongoExecute = require('./handleMongo.js').mongoExecute;
var multer		= require('multer');
var express 	= require('express');
var bodyParser 	= require('body-parser');

const upload = multer({ dest: './images/' });

const server = express();
server.use( bodyParser.json() );
server.use( bodyParser.urlencoded({extended: true}));
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.get('/users/:email', function(req, res) {
	mongoExecute(find, {email: req.params.email}, 'users', response => res.json(response));
});

server.get('/produtos', function(req, res) {
  mongoExecute(list, null, 'produtos', response => res.json(response));
});

server.get('/produtos/images/:id', (req, res) => {
  res.sendFile(__dirname + '/images/' + req.params.id);
});

server.get('/images/:id', (req, res) => {
  res.sendFile(__dirname + '/images/' + req.params.id);
});

server.get('/produtos/:id', function(req, res) {
  mongoExecute(findById, {_id: req.params.id}, 'produtos', response => res.json(response));
});

server.post('/produtos/images', upload.single('avatar'), (req, res) => {
  if(!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });
  }
  console.log('File received');
  return res.send({
    success: true
  });
});

server.listen(8080);
console.log("Servidor rodando na porta 8080");