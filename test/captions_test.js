//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')

//Test: GET /route/captions
describe('GET /route/captions', () => {
  it('status_code: 200', async () => {
    // Setup
    const excerciseUrl = '/route/captions'
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
    const excerciseUrl = '/route/captions'
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response._body.status

    // Verify
    assert.equal(result, expected)
  })


  it('Validate: Database Retrieval', async () => {
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
   
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/${captionId}`
    const expected = 'This is a test'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response._body.data[0].comment

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
        .delete(teardownUrl)
  })
})

//Test: GET /route/captions/:id
describe('GET /route/captions/:id', () => {
  it('status_code: 200', async () => {
    // Setup
    const excerciseUrl = '/route/captions/1'
    const expected = 200

    // Exercise
    const response = await request(app)
      .get(excerciseUrl)

    const result = response.status

    // Verify
    assert.equal(result, expected)
  })

  it('Status: Sucess', async () => {  
    // Setup
    const excerciseUrl = '/route/captions/1'
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response._body.status

    // Verify
    assert.equal(result, expected)
  })

  it('Validate: Database Retrieval', async () => {
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
       
    const idResponse = await request(app)
      .post(setupUrl)
    
    const captionId = idResponse._body.data.id
    
    const excerciseUrl = `/route/captions/${captionId}`
    const expected = 'This is a test'
    
    // Exercise
    const response = await request(app)
      .get(excerciseUrl)
    
    const result = response._body.data[0].comment
    
    // Verify
    assert.equal(result, expected)
    
    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
     
    await request(app)
      .delete(teardownUrl)
    })
})


//Test: Post /route/captions/
describe('POST /route/captions/', () => {
  it('status_code: 201', async () => { 
    // Setup
    const excerciseUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    const expected = 201

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response.status
    const captionId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })

  it('Status: Success', async () => {  
    // Setup
    const excerciseUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    const expected = 'Success'

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response._body.status
    const captionId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })  
  
  it('Validate: Database Retrieval', async () => { 
    // Setup
    const excerciseUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    const expected = 'This is a test'

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response._body.data.comment
    const captionId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })
});

//Test: PUT /route/captions/:id
describe('PUT /routes/captions/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/28?photo_id=2&user_id=1&comment=This is Test Number 2`
    const expected = 200

    // Exercise
    const response = await request(app)
      .put(excerciseUrl)

    const result = response.status

     // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })

  it('Status: Success', async () => {    
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/28?photo_id=2&user_id=1&comment=This is Test Number 2`
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .put(excerciseUrl)

    const result = response._body.status

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })

  it('Validate: Database Retrieval', async () => {     
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/${captionId}?photo_id=2&user_id=1&comment=This is Test Number 2`
    const expected = 1

    // Exercise
    const response = await request(app)
      .put(excerciseUrl)

    const result = response._body.data

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/captions/${captionId}`
 
    await request(app)
      .delete(teardownUrl)
  })
})

//Test: DELETE /route/captions/:id
describe('DELETE /routes/captions/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/${captionId}`
    const expected = 200

    // Exercise
    const response = await request(app)
      .delete(excerciseUrl)

    const result = response.status

    // Verify
    assert.equal(result, expected)
  })

  it('Status: Success', async () => {  
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/${captionId}`
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .delete(excerciseUrl)

    const result = response._body.status

    // Verify
    assert.equal(result, expected)
  })

  it('Validate: Database Retrieval', async () => {
        
    // Setup
    const setupUrl = '/route/captions?photo_id=1&user_id=1&comment=This is a test'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const captionId = idResponse._body.data.id

    const excerciseUrl = `/route/captions/${captionId}`
    const expected = '1'

    // Exercise
    const response = await request(app)
      .delete(excerciseUrl)

    const result = response._body.data

    // Verify
    assert.equal(result, expected)
  })
})