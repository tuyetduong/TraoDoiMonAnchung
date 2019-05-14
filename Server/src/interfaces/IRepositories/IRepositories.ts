import { IUserRepository } from ".";
import { ISuatAnRepository } from "./ISuatAnRepository";

export interface IRepositories {
    userRepository: IUserRepository;
    suatAnRepository: ISuatAnRepository;
}
