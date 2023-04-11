const Joi = require('joi');

const signup = Joi.object({
    username: Joi.string()
    .alphanum()
    .min(3)
    .max(7)
    .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$')).required(), 
    confirmation: Joi.ref('password'),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    role: Joi.valid('admin', 'user'),
    mobile: Joi.number().min(7).required()
});


  module.exports = signup;