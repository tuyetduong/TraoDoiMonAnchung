import { ISuatAn, IPage } from "../IEntities";

export interface ISuatAnService {


    getSuatAn: (id: string, page: IPage) => Promise<any>;

    gettAllSuatAn: () => Promise<any>;

    getOneSuatAnById: (id: string) => Promise<any>;

    taoSuatAn: (body: ISuatAn) => Promise<any>;

    updateSuatAn: () => Promise<any>;

    deleteSuatAn: () => Promise<any>;

    requestAnCung: (idSuatAn: string, body: any) => Promise<any>;

    getLatlng: (address: string) => Promise<any>;

    binhLuanSuatAn: (body: any) => Promise<any>;

    duyetAnCung: (body: any) => Promise<any>;
}