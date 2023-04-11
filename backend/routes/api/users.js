const express = require('express');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Guide } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

//Look at the crential vs email key

const validateSignup = [
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username').not().isEmail().withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post('/', validateSignup, async (req, res) => {
  const { password, username } = req.body;
  console.log('user API: ', username, password);
  const user = await Guide.signup({ password, username });

  const token = await setTokenCookie(res, user);

  const payload = {
    id: user.id,
    username: user.username,
    token,
  };

  return res.json(payload);
});

module.exports = router;
