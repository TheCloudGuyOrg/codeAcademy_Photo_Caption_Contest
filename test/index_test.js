//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')


//Test: GET /routes/photos
describe('GET /routes/photos', () => {
  it('status_code: 200', async () => {
      
      // Setup
      const excerciseUrl = '/route/photos'
      const expected = 200

      // Exercise
      const response = await request(app)
          .get(excerciseUrl)

      const result = response.status

      // Verify
      assert.equal(result, expected)
  })

  it('Status: OK', async () => {
        
    // Setup
    const excerciseUrl = '/route/photos'
    const expected = 'OK'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response.res.statusMessage

    // Verify
    assert.equal(result, expected)
  })

  it('Validate: Database Retrieval', async () => {
        
    // Setup
    const excerciseUrl = '/route/photos'
    const expected = 'Bryce Canyon 1'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response.body[0].name

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
