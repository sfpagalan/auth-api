const supertest = require('supertest');
const app = require('../src/server');

const request = supertest(app);

describe('AUTH Routes', () => {
  it('POST /signup creates a new user and sends an object with the user and the token to the client', async () => {
    const newUser = {
      username: 'testuser',
      password: 'testpassword',
      role: 'user',
    };

    // Send a POST request to /signup to create a new user
    const response = await request.post('/signup').send(newUser);

    // Assert that the response status is 201 (Created)
    expect(response.status).toBe(201);

    // Assert that the response contains a user object with a username
    expect(response.body.user).toBeDefined();
    expect(response.body.user.username).toBe(newUser.username);

    // Assert that the response contains a token
    expect(response.body.token).toBeDefined();
  });
});
