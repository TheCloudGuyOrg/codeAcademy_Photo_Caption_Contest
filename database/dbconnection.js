//Database Connection
const { Sequelize } = require('sequelize');
const {DB_USER, PORT, DB_HOST, DB_DATABASE} = require('./dbconfig');
const connectionString = `postgresql://${DB_USER}@${DB_HOST}:${PORT}/${DB_DATABASE}`;
const sequelize = new Sequelize(connectionString); 


const testConnection = async (request, response) => {
    
  try {
    await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } 
    catch (error) {
      return 'Unable to connect to the database.';
    }
};

testConnection()


//Export DB Connection
module.exports = { sequelize, testConnection }