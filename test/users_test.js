//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')

//Test: GET /route/users
describe('GET /route/users', () => {
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
   
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
    const expected = 'User_Test'

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
});

//Test: GET /route/users/:id
describe('GET /route/users/:id', () => {
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
   
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
    const expected = 'User_Test'

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

//Test: Post /route/users/
describe('POST /route/users/', () => {
  it('status_code: 201', async () => { 
    // Setup
    const excerciseUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
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
    const excerciseUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
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
    const excerciseUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    const expected = 'User_Test'

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
describe('PUT /route/users/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=User_Test_2&email=user.test.2@testdomain.com&password=P@ssw0rd`
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=User_Test_2&email=user.test.2@testdomain.com&password=P@ssw0rd`
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}?name=User_Test_2&email=user.test.2@testdomain.com&password=P@ssw0rd`
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
describe('DELETE /route/users/:id', () => {
  it('status_code: 200', async () => { 
    // Setup
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
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
    const setupUrl = '/route/users/?name=User_Test&email=user.test@testdomain.com&password=P@ssw0rd'
    
    const idResponse = await request(app)
      .post(setupUrl)

    const userId = idResponse._body.data.id

    const excerciseUrl = `/route/users/${userId}`
    const expected = '1'

    // Exercise
    const response = await request(app)
      .delete(excerciseUrl)

    const result = response._body.data

    // Verify
    assert.equal(result, expected)
  })
})

//Test: Post /route/login
describe('POST /route/login', () => {
  it('status_code: 201', async () => { 
    // Setup
    const excerciseUrl = '/route/login'
    const expected = 201
  
    // Exercise
    const response = await request(app)
      .post(excerciseUrl)
  
    const result = response.status
    const userId = response._body.data.id
  
    // Verify
    assert.equal(result, expected)
  
    //Teardown
  })

  it('Status: Success', async () => {  
    // Setup
    const excerciseUrl = '/route/login'
    const expected = 'Success'
  
    // Exercise
    const response = await request(app)
      .post(excerciseUrl)
  
    const result = response._body.status
    const userId = response._body.data.id
  
    // Verify
      assert.equal(result, expected)
  
    //Teardown
  })
    
  it('Validate: Database Retrieval', async () => { 
    // Setup
    const excerciseUrl = '/route/login'
    const expected = 'user_Test'
  
    // Exercise
    const response = await request(app)
      .post(excerciseUrl)
  
    const result = response._body.data.name
    const userId = response._body.data.id
  
    // Verify
    assert.equal(result, expected)
  
    //Teardown
  })  
})