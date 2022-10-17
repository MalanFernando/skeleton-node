const router = require('express').Router()
const authServices = require('./auth.services')
const {registerUser} = require('../users/users.services')

//api/v1/auth prefijo de este router

router.post('/register', registerUser)
router.post('/login', authServices.login)


module.exports = router