import { Document } from "mongoose";

export interface IUser {
    id?: string;
    TenDangNhap?: string;
    Password?: string;
    Email?: string;
    IDThucDon?: string;
    SDT?: string;
    gender?: string;
    avatar?: string;
    role?: string;
    salt?: string;
    activated?: boolean;
    HoVaTen?: string;
    arrDonAnCung: any;
}

// export interface User {
//     id?: string;
//     TenDangNhap?: string;
//     Password?: string;
//     Email?: string;
//     IDThucDon?: string;
//     SDT?: string;
//     gender?: string;
//     avatar?: string;
//     role?: string;
//     salt?: string;
//     activated?: boolean;
// }

export interface IUserModel extends Document {
    id: string;
    TenDangNhap: string;
    Password: string;
    Email: string;
    IDThucDon: string;
    SDT: string;
    gender: string;
    avatar: string;
    role: string;
    salt: string;
    activated: boolean;
    HoVaTen?: string;
    arrDonAnCung: any;
}
