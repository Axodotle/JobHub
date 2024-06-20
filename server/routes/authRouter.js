const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// authRouter.get('/', (req, res) => {
//   res.json({ message: 'Server Workin' });
// });

router.post(
  '/signup',
  userController.hashing,
  userController.createUser,
  (req, res) => {
    console.log('back in router');
    return res.status(200).json(res.locals.newUser);
  }
);

// router.post('/login', userController.setCookies, userController.verifyUser,
//   (req, res) => {
//     console.log(res.locals.loginPassword + ' end middleware');
//     sessionStorage.username = res.locals.userName;
//     return res.status(200).json(res.locals.loginPassword);
//   }
// );

module.exports = router;
