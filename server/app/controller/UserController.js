const {UserModel, validateSchema} = require('../model/UserModel')
const HttpCode = require('../helper/HttpCode')
const { hashPassword, comparePassword } = require('../middleware/auth')
const jwt = require('jsonwebtoken')

class UserController {
  async Signup(req, res){
    try {
      const userData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      }
      const {error,value} = validateSchema.validate(userData)
      if(error){
        return res.status(HttpCode.badRequest).json({
          status: false,
          message: error.details[0].message
        })
      }
      const hashedPassword = hashPassword(userData.password)
      const newUser = new UserModel({
        name: userData.name, email: userData.email, password : hashedPassword
      })
      await newUser.save()
      return res.status(HttpCode.create).json({
        status: true,
        message: "User sign up successful"
      })
    } catch (error) {
      return res.status(HttpCode.serverError).json({
        status: false,
        message: error.message
      })
    }
  }
  async Signin(req, res) {
    try {
      const {email, password} = req.body
      const user = await UserModel.findOne({email}).select("+password");
      if(!user){
        return res.status(HttpCode.notFound).json({
          status: false,
          message: "User not found!"
        })
      }
      const isMatch = comparePassword(password, user.password)
      if(!isMatch){
        return res.status(HttpCode.unauthorized).json({
          status: false,
          message: "Incorrect password"
        })
      }
      const token = jwt.sign({
        name: user.name,
        email: user.email
      }, process.env.JWT_SECRET_KEY, {expiresIn: "3hr"})
      if(token){
        res.cookie('token', token, {
          maxAge: 1000 * 60 * 60 * 24 *7
        })
      }
      return res.status(HttpCode.success).json({
        status: true,
        message: "Logged in successfully",
        user: {
          id: user._id,
          name: user.name,
          email:user.email
        },
        token: token
      })

    } catch (error) {
      return res.status(HttpCode.serverError).json({
        status: false,
        message: error.message
      })
    }
  }
}
module.exports = new UserController()