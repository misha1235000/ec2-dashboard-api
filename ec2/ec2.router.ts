// ec2.router

import { Ec2Controller } from './ec2.controller';
import { Router } from 'express';
import { Wrapper } from '../utils/wrapper';

export class Ec2Router {
    get router() {
        const router: Router = Router();
        router.get('/', Wrapper.wrapAsync(Ec2Controller.getAllInstances));

        return router;
    }
}
