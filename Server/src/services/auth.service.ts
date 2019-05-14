import {
    IAuthService,
    IRepositories,
    IToken,
    IContrib,
    IMail,
    ITokenConfig,
    CError,
    IUserRepository,
    IUser,
    IUserModel
} from "../interfaces";
import { Error } from "../constants";
import { hashWithSalt, genSalt, compare } from "../utils";
import { statusCode } from "../constants/statusCode";

export class AuthService implements IAuthService {
    private token: IToken;
    private mailer: IMail;
    private tokenConfig: ITokenConfig;
    private userRepo: IUserRepository;
    constructor(repoList: IRepositories, contrib: IContrib, config: ITokenConfig) {
        this.token = contrib.token;
        this.mailer = contrib.mail;
        this.tokenConfig = config;
        this.userRepo = repoList.userRepository;
    }

    public async login(TenDangNhap: string, Password: string): Promise<object> {

        try {
            const nameuser = await this.userRepo.findOne({TenDangNhap});
            const email = await this.userRepo.findOne({Email: TenDangNhap})
            if (nameuser) {
                const compareResult = await compare(Password, nameuser.Password);
                if (compareResult) {
                    const payload = this.toResponseObj(nameuser.toJSON() as IUser);
                    const token = await this.token.generate(payload);
                    return {token};
                }
            } else if (email) {
                const compareResult = await compare(Password, email.Password);
                if (compareResult) {
                    const payload = this.toResponseObj(email.toJSON() as IUser);
                    const token = await this.token.generate(payload);
                    return {token};
                }
            }
            throw { error: Error.WRONG_INFO, status: statusCode.BadRequest };
        } catch (err) {
            throw err;
        }
    }

    public async register(user: IUser): Promise<IUser> {
        try {
            const userByEmail = await this.userRepo.findOne({ Email:  user.Email});
            const userByUsername = await this.userRepo.findOne({ TenDangNhap:  user.TenDangNhap});
            if (userByEmail || userByUsername) {
                throw Error.USER_EXIST;
            }
            const salt = await genSalt();
            const hashPass = await hashWithSalt(user.Password || "", salt);
            user.salt = salt;
            user.Password = hashPass;
            const newUser = await this.userRepo.create(user as IUserModel);

            const payload = this.toResponseObj(newUser.toJSON() as IUser);

            const token = await this.token.generate(payload);
            // const isSent = await this.mailer.sendActivateUser(newUser, token);
            return payload;
        } catch (err) {
            throw err;
        }
    }

    // public async forgotPassword(email: string): Promise<boolean> {
    //     try {
    //         const userByEmail = await this.userRepo.findOne({ email });
    //         if (!userByEmail) {
    //             throw Error.NOT_FOUND;
    //         }
    //         const payload = this.toResponseObj(userByEmail.toJSON() as User);
    //         const token = await this.token.generate(payload, {expiresIn: this.tokenConfig.resetTokenExpiresIn});
    //         const isSent = await this.mailer.sendForgotPassword(userByEmail, token);
    //         return isSent;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // public async resetPassword(user: User, newPass: string): Promise<boolean> {
    //     try {
    //         const hashPass =  await hashWithSalt(newPass, user.salt);
    //         const updatedUser = await this.userRepo.updateById(user.id, { password : hashPass});
    //         if (!updatedUser) {
    //             throw Error.SYSTEM_ERROR;
    //         }
    //         return updatedUser;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    // public async activateUser(user: User): Promise<boolean> {
    //     try {
    //         const updatedUser = await this.userRepo.updateById(user.id, { activated : true});
    //         if (!updatedUser) {
    //             throw Error.SYSTEM_ERROR;
    //         }
    //         return updatedUser;
    //     } catch (err) {
    //         throw err;
    //     }
    // }

    private toResponseObj(user: any) {
        delete user.password;
        delete user.salt;
        return user;
    }
}
