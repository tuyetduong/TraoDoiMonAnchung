import { IAuthService, IUserService, ISuatAnService} from ".";

export interface IServices {
    authService: IAuthService;
    userService: IUserService;
    suatAnService: ISuatAnService;
}
