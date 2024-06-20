const {
  createUser,
  checkAccess,
  getUserById,
  updateUser,
  deleteUser,
  getAllUsers,
} = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const userController = {};

userController.hashing = async (req, res, next) => {
  const { password } = req.body;
  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hashWord = await bcrypt.hash(password, salt);
    res.locals.hashWord = hashWord;
    return next();
  } catch (err) {
    return next({
      log: err,
      message: { err: 'Error in userController.hashing' },
    });
  }
};

userController.createUser = async (req, res, next) => {
  const { username, firstName, lastName } = req.body;
  const hashWord = res.locals.hashWord;
  try {
    const result = await createUser(username, hashWord, firstName, lastName);
    res.locals.newUser = { message: 'User created successfully', user: result };
    return next();
  } catch (err) {
    return next(err);
  }
};

userController.validateLogin = async (req, res, next) => {
  const { username, password } = req.body;
  const isAllowed = await checkAccess(username, password);
  res.locals.isAllowed = isAllowed;
  return next();
};

module.exports = userController;

//   const params = [firstName, lastName, username, hashWord];
//   console.log('inside createUser');
//   const query = `INSERT INTO users(firstname, lastname, username, password) VALUES ($1, $2, $3, $4) RETURNING *`;
//   // const passQuery = `SELECT password FROM users WHERE username = '${username}'`;

// //   db.query(query, params) //look into this
// //     .then((createdUser) => {
//       console.log('Hi from createUser method');
//       res.locals.createdUser = createdUser.rows[0];

//       console.log('Created user: ', createdUser);
//       return next();
//     })
//     .catch((err) => {
//       console.log(err);
//       return next({
//         error: err,
//         message: 'Error in userController.createUser',
//       });
//     });
// };

// userController.verifyUser = async (req, res, next) => {
//   const { username, password } = req.body;

//   const passQuery = `SELECT password FROM users WHERE username = '${username}'`;
//   //query for the stored password in the database using the username as the condition
//   //use bcrypt compare to check entered password and stored password
//   try {
//     const storedPass = await db.query(passQuery);
//     //console.log(storedPass, ' this is storedPass');
//     const dbPass = storedPass.rows[0].password;
//     //console.log(dbPass, ' this is dbPass');

//     const queryResult = await bcrypt.compare(
//       password.toString(),
//       dbPass.toString()
//     );
//     //console.log(queryResult + ' this is queryResult');
//     //console.log(storedPass + 'this is storedpass');
//     if (queryResult) {
//       res.locals.loginPassword = dbPass;
//       res.locals.userName = username;
//     }
//     return next();
//   } catch (err) {
//     return next({
//       log: err,
//       message: { err: 'small error in userController.verifyUser' },
//     });
//   }
// };

// userController.setCookies = (req, res, next) => {
//   const { username } = req.body;
//   res.cookie(currentUser, username);
//   res.send('cookie set');
//   return next();
