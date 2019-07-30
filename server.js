const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/User');

//link to our database on mongoDB
mongoose.connect(
    'mongodb+srv://Schevene:fuckinpw@dsa-cluster-3ehfp.azure.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    }
);

var db = mongoose.connection
db.on('error', e => console.error(e));
db.once('open', () => console.log('Mongoose connected successfully'));

const app = express();
// const router = express.Router();


//prepare application to use cookies and json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

//setup view engine
app.set('views', path.join(__dirname, 'views'));

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', require('./server/api'));
// app.get('*', express.static('public'));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', function (req, res) {
    console.log("Yes");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.use(express.static(path.join(__dirname, 'build')));

//CRUD Methods

//Get Method for User
// router.get('/getUser', (req, res) => {
//     User.find((e, data) => {
//         if (e) {
//             return res.json({ success: false, error: e });
//         }
//         return res.json({ success: true, data: data })
//     });
// });

// //Create Method for User
// router.post('/putUser', (req, res) => {
//     const { username, email, password } = req.body;
//     const user = new User({
//         username, email, password
//     });
//     user.username = username;
//     user.email = email;
//     user.password = password;
//     user.save(function (e) {
//         if (e) {
//             res.status(500).send("Sorry, error in registering new user, please try again.")
//         } else {
//             res.status(200).send(`Welcome ${username}`);
//         }
//     });
// });

//Authentication Setup


//Error Handling
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (e, req, res, next) {
    res.locals.message = e.message;
    res.locals.error = req.app.get('env') === 'development' ? e : {};

    // render the error page
    res.status(e.status || 500);
    res.json({error: e})
});

app.listen(3000);

module.exports = app;