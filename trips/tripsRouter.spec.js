const request = require('supertest');
const server = require('../api/server');



describe('POST/trips/create', () => {
    it('return a JSON', async () => {
        const res = await request(server).post('/api/trips/create')
        .send({
            "airportname":"jfk",
            "deapturetime":"11:15",
            "flightnumber": "1111111",
            "numberofcarryons": 4,
            "numberofchildren": 0,
            "specialneeds": false
        });
        expect(res.type).toEqual('application/json');
    
    });
    it('return status 500', async () => {
        const res = await request(server).post('/api/trips/create')
        .send({
            "airportname":"jfk",
            "deapturetime":"11:15",
            "flightnumber": "1111111",
            "numberofcarryons": 4,
            "numberofchildren": 0,
            "specialneeds": false

        });
        expect(res.status).toEqual(401);  
});



});
