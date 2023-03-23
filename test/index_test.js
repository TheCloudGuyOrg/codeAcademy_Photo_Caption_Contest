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
    const setupUrl = ''
    const teardownUrl = ''
    const expected = 'Bryce Canyon 1'

    await request(app)
      .post(setupUrl)

    console.log('SETUP / TEARDOWN test entry')

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response.body[0].name

    // Verify
    assert.equal(result, expected)

    //Teardown
    await request(app)
      .delete(teardownUrl)
    
    console.log('SETUP / TEARDOWN test entry')
  })
});

//Test: GET /routes/photos/:id
describe('GET /routes/photos/:id', () => {
  it('status_code: 200', async () => {
      
    // Setup
    const excerciseUrl = '/route/photos/9999'
    const setupUrl = ''
    const teardownUrl = ''
    const expected = 200
      
    await request(app)
      .post(setupUrl)

    console.log('SETUP / TEARDOWN test entry')

    // Exercise
    const response = await request(app)
      .get(excerciseUrl)

    const result = response.status

     // Verify
    assert.equal(result, expected)

    //Teardown
    await request(app)
      .delete(teardownUrl)
    
    console.log('SETUP / TEARDOWN test entry')
  })

  it('Status: OK', async () => {
        
    // Setup
    const excerciseUrl = '/route/photos/9999'
    const setupUrl = ''
    const teardownUrl = ''
    const expected = 'OK'

    await request(app)
      .post(setupUrl)

    console.log('SETUP / TEARDOWN test entry')

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response.res.statusMessage

    // Verify
    assert.equal(result, expected)

    //Teardown
    await request(app)
      .delete(teardownUrl)
      
    console.log('SETUP / TEARDOWN test entry')
  })

  it('Validate: Database Retrieval', async () => {
        
    // Setup
    const excerciseUrl = '/route/photos/9999'
    const setupUrl = ''
    const teardownUrl = ''
    const expected = 'Test_Photo'

    await request(app)
      .post(setupUrl)

    console.log('SETUP / TEARDOWN test entry')

    // Exercise
    const response = await request(app)
      .get(excerciseUrl)

    const result = response.body[0].name

    // Verify
    assert.equal(result, expected)

    //Teardown
    await request(app)
      .delete(teardownUrl)
        
    console.log('SETUP / TEARDOWN test entry')
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
