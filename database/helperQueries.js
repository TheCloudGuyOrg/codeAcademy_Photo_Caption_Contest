//Import DB Modules
const models = require('./models');
const User = models.user

//Get Users by Name
const getUserByName = async (username) => {
  return await User.findAll({
    where: {name: username},
  })
}

//Get Users by Id
const getUserById = async (id) => {
  return await User.findAll({
    where: {id: id},
  })
}

getUserById(1).then((user) => console.log(user))

module.exports = {
    getUserByName,
    getUserById
}