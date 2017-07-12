const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./model/users');
const app = express();
const router = express.Router();
const port = process.env.API_PORT || 8080;

//db config
// const dbHost = 'mongodb://<dbuser>:<dbpassword>@ds153652.mlab.com:53652/heroku_rx9hjxxd';
// mongoose.connect(dbHost);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});
router.route('/users')
.get(function(req, res) {
  User.find(function(err, users) {
    if (err)
    res.send(err);
    res.json(users)
  });
})
.post(function(req, res) {
  console.log("REQUEST", req)
  let user = new User();
  user.author = req.body.first_name;
  user.text = req.body.last_name;
  user.address = req.body.address;
  user.company = req.body.company;
  user.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'User added!' });
  });
});

app.use('/api', router);
app.listen(port, function() {
	console.log(`api running on port ${port}`);
});
