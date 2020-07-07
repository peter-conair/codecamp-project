const express = require('express')
const userController = require('../controllers/userController')
const authentication = require('../middleware/authenticationHandler');
const authorization = require('../middleware/authorizationHandler');

const router = express.Router()

router.post('/signin', userController.signin);
router.post('/', userController.signup);
router.get('/me', authentication.isLoggedIn, userController.getProfile);

router.get('/', userController.index);
router.get('/:id', authentication.isLoggedIn, userController.getUserById);
router.put('/:id', authentication.isLoggedIn, userController.updateUser);
router.delete('/:id', [authentication.isLoggedIn,authorization.isAdmin], userController.deleteUser);
module.exports = router

