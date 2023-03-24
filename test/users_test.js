//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')

//Test: GET /route/users
describe('GET /routes/users', () => {
  it('status_code: 200', async () => {
    // Setup
    const excerciseUrl = '/route/users'
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
    const excerciseUrl = '/route/users'
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
    
    const excerciseUrl = '/route/users'
    const expected = 'User_Test'

    // Exercise
    const response = await request(app)
        .get(excerciseUrl)

    const result = response._body.data[0].name

    // Verify
    assert.equal(result, expected)
  })
});

//Test: GET /route/users/:id
describe('GET /routes/users/:id', () => {
  it('status_code: 200', async () => {
    // Setup
    const excerciseUrl = '/route/users/1'
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
    const excerciseUrl = '/route/users/1'
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
    const setupUrl = '/route/users/?name=User_Test&url=fie://User_Test&citation=Daisy Rue Cox'
   
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
    const expected = 'user_Test'

    // Exercise
    const response = await request(app)
      .get(excerciseUrl)

    const result = response._body.data[0].name

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })
})

//Test: Post /route/users/:id
describe('POST /route/users/:id', () => {
  it('status_code: 201', async () => { 
    // Setup
    const excerciseUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    const expected = 201

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response.status
    const userId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })

  it('Status: Success', async () => {  
    // Setup
    const excerciseUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    const expected = 'Success'

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response._body.status
    const userId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })  
  
  it('Validate: Database Retrieval', async () => { 
    // Setup
    const excerciseUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    const expected = 'user_Test'

    // Exercise
    const response = await request(app)
      .post(excerciseUrl)

    const result = response._body.data.name
    const userId = response._body.data.id

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })
});

//Test: PUT /route/users/:id
describe('PUT /routes/users/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
    const expected = 200

    // Exercise
    const response = await request(app)
      .put(excerciseUrl)

    const result = response.status

     // Verify
    assert.equal(result, expected)

    //Teardown
      const teardownUrl = `/route/users/${userId}`
 
      await request(app)
        .delete(teardownUrl)
  })

  it('Status: Success', async () => {    
    // Setup
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
    const expected = 'Success'

    // Exercise
    const response = await request(app)
        .put(excerciseUrl)

    const result = response._body.status

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })

  it('Validate: Database Retrieval', async () => {     
    // Setup
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
    const expected = 1

    // Exercise
    const response = await request(app)
      .put(excerciseUrl)

    const result = response._body.data

    // Verify
    assert.equal(result, expected)

    //Teardown
    const teardownUrl = `/route/users/${userId}`
 
    await request(app)
      .delete(teardownUrl)
  })
})

//Test: DELETE /route/users/:id
describe('DELETE /routes/users/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
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
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
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
    const setupUrl = '/route/users/?name=user_Test&url=fie://user_Test&citation=Daisy Rue Cox'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=user_Test_2&url=fie://user_Test_2&citation=Daisy Rue Cox`
    const expected = '1'

    // Exercise
    const response = await request(app)
      .delete(excerciseUrl)

      const result = response._body.data

    // Verify
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
*/