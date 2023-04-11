'use strict';

const router = require('express').Router();
const Joi = require('joi');

const login = require('../utilities/login');
const signup = require('../utilities/signup');
const error= require('./error')

router.post('/signup', (req, res) => {
  signup.validateAsync(req.body)
  .then(value => {
    res.status(201).json({
      error: false,
      user: value
    });
  })
  .catch(error => {
    res.status(401).json({
      error: true,
      data: {
        error: error.details
      }
    });
  });
});

router.post('/login', (req, res) => {
  // Write your code here
  login.validateAsync(req.body)
  .then(value => {
    res.status(200).json({
      error: false,
      data: {
        user: value
      }
    });
  })
  .catch(error => {
    res.status(400).json({
      error: true,
      data: {
        error: error.details
      }
    });
  });
});

router.use(error.client);
router.use(error.server);

module.exports = router;
