const router = require('express').Router()

const homeRoute = require('./home');
const blogRoute = require('./blog');

router.use('/home', homeRoute);
router.use('/blog', blogRoute);


module.exports = router;