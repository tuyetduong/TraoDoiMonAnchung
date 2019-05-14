
import { IUserList, IUserQuery } from "../../interfaces";
import { IUser } from "../IEntities";
export interface IUserService {
    /**
     * createOne user
     */
    createOne: (user: IUser) => Promise<IUser>;
    /**
     * Update user by Id
     */
    updateById: (id: string, modifier: IUser) => Promise<boolean>;
    /**
     * Delete user by Id
     */
    deleteById: (id: string) => Promise<boolean>;
    /**
     * Get list of all users
     */
    getAllUsers: () => Promise<IUser[]>;
    /**
     * find user by id
     */
    findById: (id: string) => Promise<IUser | null>;
    /**
     * find one user
     */
    findOne: (query: object) => Promise<IUser | null>;
    /**
     * find users by query
     */
    search: (query: IUserQuery) => Promise<IUserList>;
}
