const db = require('../db');
const appModel = require('../models/appModel');

const appController = {};

appController.newApp = async (req, res, next) => {
  const {
    username,
    company,
    date_applied,
    role,
    status,
    notes,
    next_interview,
  } = req.body;
  try {
    const result = await appModel.createApp(
      username,
      company,
      date_applied,
      role,
      status,
      notes,
      next_interview
    );
    res.locals.newApp = result;
    return next();
  } catch (err) {
    return next(err);
  }
};
module.exports = appController;

// appController.getApp = async (req, res, next) => {
//   const { id } = req.params;
//   const query = `SELECT a.id, a.company, a.date_applied, a.status, a.role, users.username
//     FROM applications a INNER JOIN users
//     ON applications.user_id = users.id
//     WHERE applications.id = $1`;
//   const params = [id];

//   await db
//     .query(query, params)
//     .then((data) => {
//       console.log('Get application, ', data);
//       res.status(200).send('Get App');
//       res.locals.getApp = data.rows[0];
//       return next();
//     })
//     .catch((err) => {
//       console.log(err);
//       return next({
//         error: err,
//         message: 'Error in appController.getApp',
//       });
//     });
// };
