const router = require('express').Router();

//CRUD Methods

  //Get Method for User
  router.get('/getUser', (req,res) =>{
    User.find((e, data) => {
        if(e) {
            return res.json({success: false, error: e});
        }
        return res.json({success:true, data : data})
    });
});

//Create Method for User
router.post('/putUser', (req,res) => {
  const {username, email, password} = req.body;
  const user = new User({
      username, email, password});
  user.username = username;
  user.email = email;
  user.password = password;
  user.save(function(e){
      if(e){
          res.status(500).send("Sorry, error in registering new user, please try again.")
      }else{
          res.status(200).send(`Welcome ${username}`);
      }
  });
});


//router.all('*', (req, res) => res.json({ hello: 'world '}));

module.exports = router;