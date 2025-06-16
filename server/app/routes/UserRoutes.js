const UserController = require('../controller/UserController')
const express = require('express')
const router = express.Router()
const multer = require('multer')
const uploads = multer()

router.post('/signup',uploads.none(), UserController.Signup )
router.post('/signin',uploads.none(),UserController.Signin)
module.exports = router