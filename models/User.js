const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//const MongoDatabase = mongoose.database; 
const bcrypt = require('bcrypt');


//setup needed parts of mongo
//const DSA_db = new MongoDatabase;

//setup the number of rounds of hashing using bcrypt
const saltRounds = 1;

const userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
},
{
  //database: DSA_db,
  collection: 'users'});

//assign password to a user using a hook on the document to verify it
userSchema.pre('save', function(next){
  if(this.isNew || this.isModified('password')){
    const document = this;
    bcrypt.hash(document.password, saltRounds, function(e, hashedPassword){
      if(e){
        next(e);
      } else{
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

module.exports = mongoose.model('User', userSchema);