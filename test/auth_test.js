//Import Modules
const request = require('supertest')
const assert = require('assert')
const app = require('../index.js')

//Test: Post /register
describe('POST /register', () => {
    it('status_code: 201', async () => { 
      // Setup
      const excerciseUrl = ''
      const expected = 201
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response.status
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })
  
    it('Status: Success', async () => {  
      // Setup
      const excerciseUrl = ''
      const expected = ''
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response._body.status
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })  
    
    it('Validate: Database Retrieval', async () => { 
      // Setup
      const excerciseUrl = ''
      const expected = 'User_Test'
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response._body.data.name
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })
  });

  //Test: Post /register
describe('POST /login', () => {
    it('status_code: 201', async () => { 
      // Setup
      const excerciseUrl = ''
      const expected = 201
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response.status
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })
  
    it('Status: Success', async () => {  
      // Setup
      const excerciseUrl = ''
      const expected = ''
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response._body.status
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })  
    
    it('Validate: Database Retrieval', async () => { 
      // Setup
      const excerciseUrl = ''
      const expected = 'User_Test'
  
      // Exercise
      const response = await request(app)
        .post(excerciseUrl)
  
      const result = response._body.data.name
      const userId = response._body.data.id
  
      // Verify
      assert.equal(result, expected)
  
      //Teardown
      const teardownUrl = ``
   
      await request(app)
        .delete(teardownUrl)
    })
  });