const router = require('express').Router();
const { setTokenCookie } = require('../../utils/auth.js');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');
const sessionRouter = require('./session.js');
const userRouter = require('./users.js');
const childRouter = require('./children.js');

router.use(restoreUser); //<---- ME FIRST
router.use('/session', sessionRouter);
router.use('/users', userRouter);
router.use('/children', childRouter);

module.exports = router;
