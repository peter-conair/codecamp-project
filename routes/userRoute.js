const express = require('express')
const userController = require('../controllers/userController')
const isLoggedIn = require('../middleware/checkLogin');
const router = express.Router()

router.get('/', isLoggedIn, userController.index);
router.get('/:id', isLoggedIn,  userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', isLoggedIn, userController.updateUser);
router.delete('/:id', isLoggedIn, userController.deleteUser);
module.exports = router

