  require('dotenv').load();
  var express = require('express');
  var path = require('path');
  var favicon = require('serve-favicon');
  var logger = require('morgan');
  var cookieParser = require('cookie-parser');
  var bodyParser = require('body-parser');
  var expressSession = require('express-session');
  var cors = require('cors');
  var jwt = require('jsonwebtoken');
  var cfg = require('./config/passport_config.js');
  var mongodb = require("mongodb");
  var mongoose = require('mongoose');
  var app = express();
  var router = express.Router();
  var debug = require('debug')('KRYPTUAL:server');
  var http = require('http');
  var https = require('https');
  const request = require('request');
  var fs = require('fs');
  // constant file here
  var CONSTANT = require('./config/constants.js');


  //Routes Here:
  var index = require('./routes/index');
  var users = require('./routes/users');
  var Merchandise = require('./routes/merchandise');
  var api = require('./routes/publicApi');
  var eth = require('./routes/eth');
  var admin = require('./routes/adminRoute');

  // Model Here
  var User = require('./app/models/users.js');

  var io = require('socket.io')(server);
  console.log('**********************************Node Server with Express*********************************');

  var Accounts = require('web3-eth-accounts');
  var accounts = new Accounts('ws://192.168.0.101:8546');

  var Personal = require('web3-eth-personal');
  var personal = new Personal('ws://192.168.0.101:8546');

  var Web3 = require('web3');
  // var web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.0.113:8545"));
  var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://192.168.0.101:8546"));
  

 
  var CoinPayments = require('coinpayments');
  let events = CoinPayments.events;


  var db;
  var device = require('express-device');
  app.use(device.capture());

  var port = normalizePort(process.env.PORT || '4000');
  app.set('port', port);





  app.use(bodyParser({limit: '50mb'}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  app.use(function(req, res, next) {
    req.io = io;
    next();
  });
  
  mongoose.connect("mongodb://localhost:27017/tokonology",function (err, database) {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    // Save database object from the callback for reuse.=
    db = database;
    console.log("****MongoDB Database connection ready****");
  });

  //Listen on provided port, on all network interfaces.
  router.use(function(req, res, next) {
    
    // var token =  req.headers["authorization"];
    // if (token) {
    //   try {
    //     token = token.split(' ')[1];
        
    //     var decoded = jwt.verify(token,cfg.secret,function (err,decoded){
    //       if(err){
    //         res.status(401).send({
    //           msg: 'Authorization token is not valid'
    //         });
    //       }else {
    //         console.log(decoded,"decoded token")
    //         req.user = decoded;
    //         next();
    //       }
    //     });
    //   } catch (e) {
    //     return res.status(401).send({
    //       msg: 'Authorization token is not valid'
    //     });
    //   }
    // } else {
    //   console.log("No token");
    //   return res.status(401).send({
    //     msg: 'Authorization token missing in request.'
    //   });
    // }
  });

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  // uncomment after placing your favicon in /public

  app.use(logger('dev'));
  app.use(bodyParser({limit: '50mb'}));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(cors());
  app.use(expressSession({secret: 'tokenology@123',cookie: { maxAge: 1000 }}));
  

  app.use('/ETH/*', function(req, res, next){
    // console.log('****/ETH route required UserId in all apis uses MIDDLEWARE****');
    let userId = req.body.userId;

     // if(userId){
     //             User.findOne({ _id : userId },{ active :1 }, function(err, userStatus){
     //                if(err) res.send({ status : 400, message : 'Please login again'});
     //                console.log('userStatususerStatus',userStatus);
     //                if(!userStatus){
     //                  res.send({ status : 400, message : 'User doest not exists.'})
     //                }
     //                else if(userStatus.active){
     //                    next();
     //                }
     //                else{
     //                    res.send({ status : 400, message : 'Please login again'})
     //                }
     //            })

     //          }
     //          else{
     //            res.send({ status : 400, message : 'Please enter user ID'})
     //          }
    
    var token =  req.headers["authorization"];
    if (token) {
      try {
        token = token.split(' ')[1];
        
        var decoded = jwt.verify(token,cfg.secret,function (err,decoded){
          if(err){
            res.send({status :400, message: 'Authorization token is not valid',error : err});
          }else {
            // console.log(decoded,"decoded token")
            req.user = decoded;
            
                if(userId){
                 User.findOne({ _id : userId },{ active :1 }, function(err, userStatus){
                    if(err) res.send({ status : 400, message : 'Please login again'});
                    // console.log('userStatususerStatus',userStatus);
                    if(!userStatus){
                      res.send({ status : 400, message : 'User doest not exists.'})
                    }
                    else if(userStatus.active){
                        next();
                    }
                    else{
                        res.send({ status : 400, message : 'Please login again'})
                    }
                })

              }
              else{
                res.send({ status : 400, message : 'Please enter user ID'})
              }

            // next();
          }
        });
      } catch (e) {
        return res.send({status:400, message: 'Authorization token is not valid'});
      }
    } else {
      console.log("No token");
      return res.send({status:400,message: 'Authorization token missing in request.'});
    }
    
  })

  // app.use('/users', router);
  // app.use(router);
  app.use('/', index);
  app.use('/api', api);
  app.use('/users', users);
  app.use('/ETH', eth);
  app.use('/admin',admin);
  app.use('/merchandise',Merchandise);
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  // Normalize a port into a number, string, or false.
  function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
      // named pipe
      return val;
    }

    if (port >= 0) {
      // port number
      return port;
    }

    return false;
  }

  // Event listener for HTTP server "error" event.

  function onError(error) {
    console.log('Server',error);
    if (error.syscall !== 'listen') {
      throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }

  // Event listener for HTTP server "listening" event.

  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }

/* Server createion */

// var key = fs.readFileSync(CONSTANT.ssl.key);
// var cert = fs.readFileSync(CONSTANT.ssl.certificate);
// // var ca = fs.readFileSync( 'encryption/intermediate.crt' );
// var options = {
//   key: key,
//   cert: cert
//   // ,
//   // ca: ca
// };
// var server = https.createServer(options, app);
// server.listen(port);

var server = http.createServer(app);
 server.listen(port);




 server.on('error', onError);
 server.on('listening', onListening);

  module.exports = app;
