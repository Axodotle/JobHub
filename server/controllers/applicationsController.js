const db = require('../models/userModels');

const applicationController = {};

applicationController.createApp = async (req, res, next) => {
  const { company, date_applied, roles, status } = req.body;

  const params = [company, date_applied, roles, status];
  const query = `INSERT INTO applications (company, date_applied, roles, status) VALUES ($1, $2, $3, $4)`;

  await db
    .query(query, params)
    .then((data) => {
      console.log('Create application, ', data);
      res.status(200).send('Created App');
      res.locals.createApp = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        error: err,
        message: 'Error in applicationController.createApp',
      });
    });
};

applicationController.getApp = async (req, res, next) => {
  const { id } = req.params;
  const query = `SELECT a.id, a.company, a.date_applied, a.status, a.role, users.username
    FROM applications a INNER JOIN users 
    ON applications.user_id = users.id
    WHERE applications.id = $1`;
  const params = [id];

  await db
    .query(query, params)
    .then((data) => {
      console.log('Get application, ', data);
      res.status(200).send('Get App');
      res.locals.getApp = data.rows[0];
      return next();
    })
    .catch((err) => {
      console.log(err);
      return next({
        error: err,
        message: 'Error in applicationController.getApp',
      });
    });
};

module.exports = applicationController;
