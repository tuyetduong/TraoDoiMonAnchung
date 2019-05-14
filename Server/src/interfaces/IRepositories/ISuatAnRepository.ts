import { IPage } from "../IEntities";

export interface ISuatAnRepository {
    /**
     * find user(s)
     */
    find: (query: object, options?: object) => Promise<any[]>;
    /**
     * find 1 user
     */
    findOne: (query: object) => Promise<any | null>;
    /**
     * find user by email
     */
    findById: (id: string) => Promise<any | null>;
    /**
     * create user
     */
    create: (user: any) => Promise<any>;
    /**
     * update user by id
     */
    updateById: (id: string, modifier: object) => Promise<boolean>;
    /**
     * delete user by id
     */
    deleteById: (email: string) => Promise<boolean>;
    
    getSuatAn: (idUser: string, ipage: IPage) => Promise<any>;
    
    gettAllSuatAn: (ipage: IPage) => Promise<any>;

    getOneSuatAnById: (id: string) => Promise<any>;
}