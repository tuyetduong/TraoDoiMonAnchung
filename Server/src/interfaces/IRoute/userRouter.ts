import { IUser } from "../IEntities";

export interface IUserQuery {
    queries: {
        username?: string;
        phone?: string;
        email?: string;
        gender?: string;
    };
    sort?: number;
    page: number;
    amount: number;
}

export interface IUserList {
    users: IUser[];
    totalUser: number;
    totalPage: number;
    currentPages: number;
}
