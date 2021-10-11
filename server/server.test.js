let testServer = require('supertest');
let app = require('./server');

describe('testing the server', () => {
  it('should respond 200 the LOGOUT route', async (done) => {
    const response = await testServer(app).post('/api/user/logout');
    expect(response.statusCode).toBe(200);
    done();
  });

  it('should protect the /USER route', async (done) => {
    const response = await testServer(app).get('/api/user');
    expect(response.statusCode).toBe(403);
    done()
  });

  // this test requires the database to be set up AND EMPTY
  it('should return user info when authenticated', async (done) => {
    let agent = testServer.agent(app);
    await agent.post('/api/user/register')
               .send({username: 'jarydkrish', password: 'password123'});

    const response = await agent
                            .post('/api/user/login')
                            .send({username: 'jarydkrish', password: 'password123'});
    expect(response.statusCode).toBe(200);

    const userResponse = await agent.get('/api/user');
    expect(userResponse.statusCode).toBe(200);

    done();
  });
});
