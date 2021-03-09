"use strict";
// ec2.controller.spec
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const faker_1 = require("../../utils/faker");
describe('Check getFakeData function functionality', () => {
    it('Should return an array containing floored size when given a float size', () => {
        const data = faker_1.getFakeData(5.5);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(5);
        validateEc2Type(data[0]);
    });
    it('Should generate array of one ec2 instance', () => {
        const data = faker_1.getFakeData(1);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(1);
        validateEc2Type(data[0]);
    });
    it('Should generate array of 50 ec2 instances', () => {
        const data = faker_1.getFakeData(50);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(50);
        validateEc2Type(data[0]);
    });
    it('Should generate array of 50000 ec2 instance', () => {
        const data = faker_1.getFakeData(50000);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(50000);
        validateEc2Type(data[0]);
    });
    it('Should generate an empty array when zero given', () => {
        const data = faker_1.getFakeData(0);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(0);
    });
    it('Should generate an empty array when negative number given', () => {
        const data = faker_1.getFakeData(-5);
        chai_1.expect(data).to.be.an('array');
        chai_1.expect(data).to.have.lengthOf(0);
    });
});
function validateEc2Type(data) {
    chai_1.expect(data).to.have.keys(['name', 'id', 'state', 'az', 'publicIp', 'privateIp', 'type']);
    chai_1.expect(typeof data.name).to.eql('string');
    chai_1.expect(typeof data.id).to.eql('string');
    chai_1.expect(typeof data.state).to.eql('string');
    chai_1.expect(typeof data.az).to.eql('string');
    chai_1.expect(typeof data.publicIp).to.eql('string');
    chai_1.expect(typeof data.privateIp).to.eql('string');
    chai_1.expect(typeof data.type).to.eql('object');
    chai_1.expect(typeof data.type.name).to.eql('string');
    chai_1.expect(typeof data.type.size).to.eql('number');
}
//# sourceMappingURL=ec2.controller.spec.js.map