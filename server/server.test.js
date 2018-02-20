const request = require('supertest');
const expect = require('expect');
const app = require('./server').app;

it('shoud return hello world response', (done) => {
    request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
            expect(res.body).toInclude({
                error: 'Page not found'
            })
        })
        .end(done);
});

it('sould return my user object', (done) => {
    request(app)
        .get('/users')
        .expect(200)
        .expect((res) =>{
            expect(res.body).toInclude({
                name: 'Madjer',
                age: 31
            });    
        })
        .end(done);
})