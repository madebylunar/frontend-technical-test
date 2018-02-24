import { expect } from 'chai';
import server from '../server';
import VehicleAPI from '../src/api';

describe("VehicleAPI Tests", function() {
    before(() => {
        server.listen(9988);
    });

    it('getAll should respond with an array of vehicles', (done) => {
        VehicleAPI.getAll().then(data => {
            expect(data.vehicles).to.be.a('array');
            done();
        });
    });

    it('getSingle should respond with an object of vehicle details', (done) => {
        VehicleAPI.getSingle('xe').then(data => {
            expect(data).to.be.a('object');
            done();
        })
    });
});
