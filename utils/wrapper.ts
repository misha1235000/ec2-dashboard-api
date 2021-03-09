// wrapper

import { NextFunction, Request, Response } from 'express';

export class Wrapper {
    /**
     * Creates an async wrap for a given function.
     * @param func - Any function.
     */
    public static wrapAsync(func: any) {
        return (req: Request, res: Response, next: NextFunction) => {
            func(req, res, next).catch((err: Error) => next(err));
        };
    }
}
