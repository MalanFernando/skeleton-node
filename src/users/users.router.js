const router = require('express').Router()
const passport = require('passport')
const adminValidate = require('../middlewares/role.middleware')

const userServices = require('./users.services')

require('../middlewares/auth.middleware')(passport)

router.get('/', 
    passport.authenticate('jwt', {session: false}),
    userServices.getAllUsers
    )

router.route('/me')
    .get(
        passport.authenticate('jwt', {session: false}),
        userServices.getMyUser)
    .patch(
        passport.authenticate('jwt', { session: false }),
        userServices.editMyUser
    )
    .delete(
        passport.authenticate('jwt', { session: false }),
        userServices.deleteMyUser
    )

    // api/users/:id
router.route('/:id')
    .get(userServices.getUserById)
    .patch(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        userServices.patchUser)
    .delete(
        passport.authenticate('jwt', { session: false }),
        adminValidate,
        userServices.deleteUser)

module.exports = router