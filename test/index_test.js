//Import Modules
const assert = require('assert')
const {sequelize, testConnection }= require('../database/dbconnection.js')

//Test DB Connection
describe('Test Database Connection', () => {
  it('Connection Successful', async () => {
      
    // Setup
    const expected = true
    let result = null

    // Exercise
    

    // Validate
    assert.equal(result, expected)
  })
})

/*
Add tests for the following
- getUsers
- getUsersById
- addUsers
- addLogin
- updateUsers

- getPhotos
- getPhotosById
- addPhotos
- updatePhotos
- deletePhotos

- getCaptionById
- addCaption
- updateCaption
- deleteCaption
*/