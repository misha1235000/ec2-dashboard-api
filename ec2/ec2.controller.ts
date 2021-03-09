// ec2.controller

import { Request, Response } from 'express';
import { getFakeData } from '../utils/faker';

export class Ec2Controller {
    /**
     * Gets all the ec2 instances, by calling a fake data generator function.
     * @param req - Request
     * @param res - Response
     */
    public static async getAllInstances(req: Request, res: Response) {
        // TODO: Think maybe to use it as a singleton, instead of getting this data on each request.
        return res.send(getFakeData(10000));
    }
}
