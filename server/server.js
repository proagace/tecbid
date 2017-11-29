const mongoExecute = require('./handleMongo.js').mongoExecute;
var multer		= require('multer');
var express 	= require('express');
var bodyParser 	= require('body-parser');
const path = require('path');

let trackProdutos = {};

let updateTrackProdutos = () => {
  mongoExecute(list, null, 'produtos', response => {if (response) trackProdutos = response;});
};

updateTrackProdutos();

//Atualiza o status dos produtos
let timer = setInterval(
  () => {
    trackProdutos.forEach(prod => {
      if (prod.status === 'ativo' && (new Date(prod.finalDate).getTime() <= new Date().getTime())) {
        mongoExecute(update, [{_id: prod._id },{ status: 'inativo' }], 'produtos', response => {
          if(response) {
            prod.status = 'inativo';
          } else {
            console.log("error trying to update poduct status");
          }
        });
      } else if (prod.status === 'criado' && (new Date(prod.startDate).getTime() <= new Date().getTime())) {
        mongoExecute(update, [{_id: prod._id },{ status: 'ativo' }], 'produtos', response => {
          if(response) {
            prod.status = 'ativo';
          } else {
            console.log("error trying to update poduct status");
          }
        });
      }
    }); 
  },
  1000
);

//const upload = multer({ dest: './images/' });
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images/');
  },
  filename: function (req, file, cb) {
    var id = Math.random().toString(16) + Date.now() + path.extname(file.originalname);
    cb(null, id);
  }
});
var upload = multer({ storage: storage }).single('image');

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
  //mongoExecute(list, null, 'produtos', response => res.json(response));
  res.json(trackProdutos);
});

server.get('/produtos/images/:id', (req, res) => {
  res.sendFile(__dirname + '/images/' + req.params.id);
});

server.get('/images/:id', (req, res) => {
  res.sendFile(__dirname + '/images/' + req.params.id);
});

server.get('/produtos/:id', function(req, res) {
  //mongoExecute(findById, {_id: req.params.id}, 'produtos', response => res.json(response));
  res.json(trackProdutos.find(prod => (prod._id == req.params.id)));
});

server.post('/users', (req, res) => {
  mongoExecute(insert, [req.body], 'users', response => res.send({success: true}));
});

server.post('/produtos', (req, res) => {
  mongoExecute(insert, [req.body], 'produtos', response => {
    updateTrackProdutos();
    res.send({success: true});
  });
});

server.post('/produtos/images', function (req, res) {
  upload(req, res, function (err) {
    if (err){
      console.log(JSON.stringify(err));
      res.status(400).send('fail saving image');
    } else {
      res.send(res.req.file.filename);  
    }
  });
});

server.post('/produtos/:id', function(req, res) {
  mongoExecute(updateById, [{_id: req.params.id}, req.body], 'produtos', response => {
    res.json(response);
    updateTrackProdutos();
  });
});

server.listen(8080);
console.log("Servidor rodando na porta 8080");