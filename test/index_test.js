//Import Modules
const assert = require('assert')
const {sequelize, testConnection }= require('../database/dbconnection.js')

//Test DB Connection
describe('Test Database Connection', () => {
  it('Connection Successful', async () => {
      
    // Setup
    expected = true

    // Exercise
    result = false

    // Validate
    assert.equal(result, expected)

    // Teardown

  })
})