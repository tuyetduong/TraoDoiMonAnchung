import {
    UserService,
    AuthService,
    SuatAnService
} from ".";
import {
    IRepositories,
    IServices,
    IUserService,
    IAuthService,
    IContrib,
    ISuatAnService,
} from "../interfaces";
import Config from "../config";

export default class Services implements IServices {
    public userService: IUserService;
    public authService: IAuthService;
    public suatAnService: ISuatAnService;
    /**
     * Create new services DI
     */
    constructor(contructor: {repositories: IRepositories, contrib: IContrib, config: Config }) {
        this.userService = new UserService(contructor.repositories);
        this.authService = new AuthService(contructor.repositories, contructor.contrib, contructor.config.TokenConfig);
        this.suatAnService = new SuatAnService(contructor.repositories);
    }
}
