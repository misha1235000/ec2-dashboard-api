"use strict";
// app
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const ec2_router_1 = require("./ec2/ec2.router");
const app = express_1.default();
const port = 3005;
app.use(cors_1.default());
/**
 * Use the ec2 router.
 */
app.use('/api/ec2', new ec2_router_1.Ec2Router().router);
/**
 * Runs the server on a specified port.
 */
app.listen(port, () => {
    return console.log(`Server is running on port ${port}`);
});
exports.App = app;
//# sourceMappingURL=app.js.map