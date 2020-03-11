
const request = require('supertest');
const server = require('../api/server');
const restricted = require('../auth/restricted-middleware.js')





describe('GET/api/users', () => {
    it('should return registered users', async () =>{
        const res = await request(server)
        .get('/api/users');
        console.log(res.body);
        expect(res.type).toEqual('application/json');
    })
});


describe('GET/users/:id', ()=>{
    it('should return one user via ID', async ()=> {
        const res = await request(server)
        .get('/api/users/1', restricted);
        console.log(res.body);
        expect(res.type).toEqual('application/json');
    });
});


describe('PUT/users/:id', () =>{
    it('Test my secure routes to update', async () => {
        const res = await request (server)
        .get('/api/users/1', restricted)
        .send({
            "firstname":'joshua'
        });
        console.log(res.body);
        expect(res.type).toEqual('application/json');
        expect(res.status).toBe(401);
    });
});



