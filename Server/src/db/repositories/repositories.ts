import {
    IRepositories,
    IUserRepository,
    ISuatAnRepository
} from "../../interfaces";
import { UserRepository} from ".";
import { SuatAnRepository } from "./suat-an.repository";

export default class Repositories implements IRepositories {
    public userRepository: IUserRepository;
    public suatAnRepository: ISuatAnRepository;
    /**
     * Create new Repository DI
     */
    constructor() {
        this.userRepository = new UserRepository();
        this.suatAnRepository = new SuatAnRepository();
    }
}
