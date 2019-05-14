import { Request, Response, NextFunction } from "express";
import { IRouteConfig, IAuthService, CError, IUser } from "../../interfaces";

export class AuthController {
    private authService: IAuthService;

    constructor(config: IRouteConfig) {
        this.authService = config.services.authService;
    }

    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const reqBody: IUser = {
                TenDangNhap: req.body.TenDangNhap,
                Password: req.body.Password,
                Email: req.body.Email,
            };
            // const userForm: IUser = await User.fromObject(req.body);
            const user = await this.authService.register(reqBody);
            res.json(user);
        } catch (err) {
            next(new CError(err));
        }
    }

    public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { TenDangNhap, Password } = req.body;
            const result = await this.authService.login(TenDangNhap, Password);
            res.json(result);
        } catch (err) {
            next(new CError(err.error.error || err.error, err.status));
        }
    }

    // public async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const { email } = req.body;
    //         const result = await this.authService.forgotPassword(email);
    //         res.json(result);
    //     } catch (err) {
    //         next(new CError(err));
    //     }
    // }

    // public async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const { newPassword, user } = req.body;
    //         const result = await this.authService.resetPassword(user, newPassword);
    //         res.json(result);
    //     } catch (err) {
    //         next(new CError(err));
    //     }
    // }

    // public async activateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    //     try {
    //         const { user } = req.body;
    //         const result = await this.authService.activateUser(user);
    //         res.json(result);
    //     } catch (err) {
    //         next(new CError(err));
    //     }
    // }
}
