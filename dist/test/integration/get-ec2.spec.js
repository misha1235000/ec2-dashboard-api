"use strict";
// get-ec2.spec
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../../app");
const supertest_1 = __importDefault(require("supertest"));
const chai_1 = require("chai");
describe('GET /api/ec2', () => {
    it('Should respond with json array', (done) => {
        supertest_1.default(app_1.App)
            .get('/api/ec2')
            .expect(200)
            .expect('Content-Type', /json/)
            .end((err, res) => {
            if (err) {
                throw err;
            }
            chai_1.expect(res.body).to.not.be.empty;
            chai_1.expect(res.body).to.be.an('array').that.is.not.empty;
            done();
        });
    });
});
describe('GET /api/notExisting', () => {
    it('Should return 404 error', (done) => {
        supertest_1.default(app_1.App)
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
//# sourceMappingURL=get-ec2.spec.js.map