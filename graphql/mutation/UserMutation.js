var adduser = require('./AddUser').addUser
var updateuser = require('./UpdateUser').updateUser
var deleteuser = require('./DeleteUser').remove
module.exports = {
  adduser,
  updateuser,
  deleteuser
}
