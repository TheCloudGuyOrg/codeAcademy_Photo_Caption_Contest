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


module.exports = {
    getUserByName,
    getUserById
}