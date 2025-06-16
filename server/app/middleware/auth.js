const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  const salt = 10;
  const hashedPassword = bcrypt.hashSync(password, salt)
  return hashedPassword
}
const comparePassword = (password, hashedPassword) => {
  return bcrypt.compareSync(password, hashedPassword)
}
const AuthCheck = () => {

}

module.exports = {hashPassword, comparePassword, AuthCheck}