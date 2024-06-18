const express = require('express');
const userController = require('../controllers/userController');

// const fileController = require('../controllers/fileController');

const routerSignup = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE

routerSignup.get('/', (req, res) => {
  res.json({ message: 'Server Working' });
});

routerSignup.post(
  '/signup',
  userController.hashing,
  userController.createUser,
  (req, res) => {
    console.log('back in router');
    return res.status(200).json(res.locals.createdUser);
  }
);

routerSignup.post('/login', userController.setCookies, userController.verifyUser,  (req, res) => {
  console.log(res.locals.loginPassword + ' end middleware');
  sessionStorage.username = res.locals.userName
  return res.status(200).json(res.locals.loginPassword);
});
// ADD GET MORE CHARACTERS ROUTE HANDLER HERE

module.exports = routerSignup;
//amcatee
//codesmith
//ashe
//mcatee
