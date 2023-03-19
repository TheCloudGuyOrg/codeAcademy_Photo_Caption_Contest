//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')
const Photo = require('../models/photos.js');


//Test: GET /routes/photos
describe('GET /routes/photos', () => {
  it('status_code: 200', async () => {
      
      // Setup
      const excerciseUrl = '/routes/photos'
      const expected = 200

      // Exercise
      const response = await request(app)
          .get(excerciseUrl)

      const result = response.status

      // Verify
      assert.equal(result, expected)
  })

  it('Status: Success', async () => {
        
    // Setup
    const excerciseUrl = '/routes/photos'
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)
       
    const result = response._body.status

    // Verify
    assert.equal(result, expected)
  })
});


/*
Add tests for the following
- getPhotosById
- addPhotos
- updatePhotos
- deletePhotos

- getUsers
- getUsersById
- addUsers
- addLogin
- updateUsers

- getCaptionById
- addCaption
- updateCaption
- deleteCaption
*/
