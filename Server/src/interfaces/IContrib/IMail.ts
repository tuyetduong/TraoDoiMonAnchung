import { IUser } from "../IEntities";

export interface IMailConfig {
    apiKey: string;
    fromName: string;
    fromEmail: string;
}

export interface IMailData {
    to: string[];
    subject: string;
    text?: string;
    html: string;
}

export interface IMail {
    send: (data: IMailData) => Promise<any>;

    sendActivateUser: (user: IUser, token: string) => Promise<boolean>;

    sendForgotPassword: (user: IUser, token: string) => Promise<boolean>;
}
