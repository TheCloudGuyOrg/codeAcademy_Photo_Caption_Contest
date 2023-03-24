//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')

//Test: GET /route/photos
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

//Test: GET /route/photos/:id
describe('GET /routes/photos/:id', () => {
  it('status_code: 200', async () => {
      
    // Setup
    const excerciseUrl = '/route/photos/1'
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
    const excerciseUrl = '/route/photos/1'
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
    const excerciseUrl = '/route/photos/1'
    const expected = 'Bryce Canyon 1'

    // Exercise
    const response = await request(app)
      .get(excerciseUrl)

    const result = response.body[0].name

    // Verify
    assert.equal(result, expected)
  })
})

//Test: Post /route/photos/:id
describe('POST /api/v1/envelopes', () => {
  it('status_code: 201', async () => {
      
      // Setup
      const excerciseUrl = '/api/v1/envelopes?id=9999&title=test&budget=999'
      const teardownUrl = '/api/v1/envelopes/9999'
      const expected = 201

      // Exercise
      const response = await request(app)
          .post(excerciseUrl)

      const result = response.status

      // Verify
      assert.equal(result, expected)

      // Teardown
     await request(app)
          .delete(teardownUrl)
  })

  it('Status: Success', async () => {
      
      // Setup
      const excerciseUrl = '/route/photos'
      const teardownUrl = ''
      const expected = 'Success'

      // Exercise
      const response = await request(app)
         .post(excerciseUrl)

      const result = response._body.status

      // Verify
      assert.equal(result, expected)

      // Teardown
      await request(app)
          .delete(teardownUrl)
  })  
  
  it('Validate: Database Retrieval', async () => {
        
    // Setup
    const expected = 'Photo_Test'
    const photoId = 24
    
    //console.log(photoId)

    const excerciseUrl = (`/route/photos/${photoId}`)




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
