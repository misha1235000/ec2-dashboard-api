// ec2.controller.spec

import { expect } from 'chai';
import { utils } from 'mocha';
import { IEC2 } from '../../ec2/ec2.interface';
import { getFakeData } from '../../utils/faker';

describe('Check getFakeData function functionality', () => {
    it('Should return an array containing floored size when given a float size', () => {
        const data = getFakeData(5.5);

        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(5);
        validateEc2Type(data[0]);
    });

    it('Should generate array of one ec2 instance', () => {
        const data = getFakeData(1);
        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(1);
        validateEc2Type(data[0]);
    });

    it('Should generate array of 50 ec2 instances', () => {
        const data = getFakeData(50);
        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(50);
        validateEc2Type(data[0]);
    });

    it('Should generate array of 50000 ec2 instance', () => {
        const data = getFakeData(50000);
        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(50000);
        validateEc2Type(data[0]);
    });

    it('Should generate an empty array when zero given', () => {
        const data = getFakeData(0);
        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(0);
    });

    it('Should generate an empty array when negative number given', () => {
        const data = getFakeData(-5);
        expect(data).to.be.an('array');
        expect(data).to.have.lengthOf(0);
    });
});

function validateEc2Type(data: IEC2): void {
    expect(data).to.have.keys(['name', 'id', 'state', 'az', 'publicIp', 'privateIp', 'type']);
    expect(typeof data.name).to.eql('string');
    expect(typeof data.id).to.eql('string');
    expect(typeof data.state).to.eql('string');
    expect(typeof data.az).to.eql('string');
    expect(typeof data.publicIp).to.eql('string');
    expect(typeof data.privateIp).to.eql('string');
    expect(typeof data.type).to.eql('object');
    expect(typeof data.type.name).to.eql('string');
    expect(typeof data.type.size).to.eql('number');
}
