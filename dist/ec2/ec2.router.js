"use strict";
// ec2.router
Object.defineProperty(exports, "__esModule", { value: true });
const ec2_controller_1 = require("./ec2.controller");
const express_1 = require("express");
const wrapper_1 = require("../utils/wrapper");
class Ec2Router {
    get router() {
        const router = express_1.Router();
        router.get('/', wrapper_1.Wrapper.wrapAsync(ec2_controller_1.Ec2Controller.getAllInstances));
        return router;
    }
}
exports.Ec2Router = Ec2Router;
//# sourceMappingURL=ec2.router.js.map