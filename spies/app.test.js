const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');
describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Madjer', 31);
        expect(spy).toHaveBeenCalledWith('Madjer', 31)
    })
    it('should call saveUser with user object', () => {
        let email = 'madjerbo@gmail.com';
        let password = '123321';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
})