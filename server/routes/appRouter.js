const express = require('express');
const router = express.Router();
const appController = require('../controllers/applicationsController');

router.post('/', appController.createApp, (req, res) => {
  return res.status(200).json(res.locals.createApp);
});

router.get('/:id', appController.getApp, (req, res) => {
  return res.status(200).json(res.locals.getApp);
});

module.exports = router;
