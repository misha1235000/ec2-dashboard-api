"use strict";
// wrapper
Object.defineProperty(exports, "__esModule", { value: true });
class Wrapper {
    /**
     * Creates an async wrap for a given function.
     * @param func - Any function.
     */
    static wrapAsync(func) {
        return (req, res, next) => {
            func(req, res, next).catch((err) => next(err));
        };
    }
}
exports.Wrapper = Wrapper;
//# sourceMappingURL=wrapper.js.map