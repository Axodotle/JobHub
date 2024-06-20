const express = require('express');
const router = express.Router();
const appController = require('../controllers/appController');

router.post('/newapp', appController.newApp, (req, res) => {
  return res.status(200).json(res.locals.newApp);
});

// router.get('/:id', appController.getApp, (req, res) => {
//   return res.status(200).json(res.locals.getApp);
// });

module.exports = router;
