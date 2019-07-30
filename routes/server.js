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
const router = express.Router();


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

getUsers = () => {
    axios.get('http://localhost:3000/api/getUser').then(({ data }) => {
      console.log(data)
      this.setState({ user: data })
    });
    
    fetch('http://localhost:3000/api/getUser')
       .then((user) => user.json())
       .then((res) => this.setState({user: res.data}));
};

//Put Method
   putUser = (message) => {
      const { username, email, password } = this.state;
      let currentUsers = this.state.data.map((data) => data.id);
       const user = new User({
       username, email, password});
     axios.post('http://localhost:3000/api/putUser', {
       username: username,
       email: email,
       password: password
     });
   }

//Authentication Setup





//Error Handling
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(e, req, res, next) {
    res.locals.message = e.message;
    res.locals.error = req.app.get('env') === 'development' ? e : {};
  
    // render the error page
    res.status(e.status || 500);
    res.render('error');
  });
  
  module.exports = app;