// get-ec2.spec

import { App } from '../../app';
import request from 'supertest';
import { expect } from 'chai';

describe('GET /api/ec2', () => {
    it('Should respond with json array', (done) => {
        request(App)
        .get('/api/ec2')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
            if (err) {
                throw err;
            }

            expect(res.body).to.not.be.empty;
            expect(res.body).to.be.an('array').that.is.not.empty;

            done();
        });
    });
});

describe('GET /api/notExisting', () => {
    it('Should return 404 error', (done) => {
        request(App)
        .get('/api/notExistingRoute')
        .expect(404)
        .end((err, res) => {
            if (err) {
                throw err;
            }

            done();
        });
    });
});
