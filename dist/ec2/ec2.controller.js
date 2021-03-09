"use strict";
// ec2.controller
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const faker_1 = require("../utils/faker");
class Ec2Controller {
    /**
     * Gets all the ec2 instances, by calling a fake data generator function.
     * @param req - Request
     * @param res - Response
     */
    static getAllInstances(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // TODO: Think maybe to use it as a singleton, instead of getting this data on each request.
            return res.send(faker_1.getFakeData(0));
        });
    }
}
exports.Ec2Controller = Ec2Controller;
//# sourceMappingURL=ec2.controller.js.map