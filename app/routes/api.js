var Cargo       = require('../models/cargo');
var Func        = require('../models/func');

module.exports = function (app, express)
{
  var apiRouter = express.Router();

  // Lista todos os cargos
  apiRouter.get('/cargo', function(req, res) {

    Cargo.find({}, function (err, funcoes) {
      if (err) {
        console.log('Erro na leitura da coleção Cargo', err);
        res.json( { err: err } );
      }
      else {
        res.json( { dados: funcoes } )
      };
    
    });

  });

  // Lista o cargo selecionado
  apiRouter.get('/cargo/:cod', function(req, res) {

    Cargo.findOne ({ cod: req.params.cod }, function (err, funcao) {
      if (err) {
        console.log('Erro na leitura da coleção Cargo', err);
        res.json( { err: err } );
      }
      else {
        res.json( { dados: funcao } )
      };
    
    });

  });

  // Lista todos os funcionários
  apiRouter.get('/func', function(req, res) {
    Func.find({}, function (err, funcionarios) {
      if (err) {
        console.log('Erro na leitura da coleção Func', err);
        res.json( { dados: funcionarios } );
      }
      else{
        res.json( { dados: funcionarios } )
      };

    });

  });

  // Lista o funcionário
  apiRouter.get('/func/:cod', function(req, res) {
    Func.findOne ({ cod: req.params.cod }, function (err, funcionario) {
      if (err) {
        console.log('Erro na leitura da coleção Func', err);
        res.json( { dados: funcionario } );
      }
      else{
        res.json( { dados: funcionario } )
      };
    });
  })
  
  /*
  apiRouter.get('/func-nome/:cod', function(req, res) {

    Func.findOne ({ cod: req.params.cod })
    .select('nome')
    .exec(function (err, funcao) {
      if (err) {
        console.log('Erro na leitura da coleção Func', err);
        res.json( { err: err } );
      }
      else {
        res.json( { dados: funcao } )
      };
    })
  });
  */
  return apiRouter;
};