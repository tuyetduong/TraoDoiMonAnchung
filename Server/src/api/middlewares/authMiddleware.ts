import { Request, Response, NextFunction } from "express";

import {IToken, CError, IUserService } from "../../interfaces";
import { Error } from "../../constants";

export interface IAuthMiddlewareConfig {
    userService: IUserService;
    token: IToken;
    role: string;
}


export const authMiddleware = (data: IAuthMiddlewareConfig) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers["x-access-token"] as string;
        try {
            const payload: any = await data.token.decode(token);
            if (!payload) {
                throw new CError(Error.JWT_TOKEN_INVALID, 401);
            }
            const user = await data.userService.findById(payload._id);
            if (!user) {
                throw new CError(Error.NOT_FOUND, 404);
            } else {
                req.body.user = user;
                next();
            }
        } catch (error) {
            if (error instanceof CError) {
                res.status(error.status).json(error.toResponseJSON());
            } else {
                res.status(401).json({
                    success: false,
                    message: error.message
                });
            }
        }
    };
};
