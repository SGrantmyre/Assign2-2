const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/User');

//link to our database on mongoDB
mongoose.connect(
    'mongodb+srv://Schevene:<password>@dsa-cluster-3ehfp.azure.mongodb.net/test?retryWrites=true&w=majority',{
        useNewUrlParser: true
    }
);

var db = mongoose.connection
db.on('error', e => console.error(e));
db.once('open', () => console.log('Mongoose connected successfully'));

const app = express();

//prepare application to use cookies and json
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

//setup view engine
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'pages')));

//POST route for creating a user
app.post('../pages/Sign-Up', function(req,res){
    const {username, email, password} = req.body;
    const user = new User({
        username, email, password});
    user.save(function(e){
        if(e){
            res.status(500).send("Sorry, error in registering new user, please try again.")
        }else{
            res.status(200).send(`Welcome ${username}`);
        }
    });
});

//Authentication Setup





//Error Handling
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(e, req, res, next) {
    res.locals.message = e.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });
  
  module.exports = app;