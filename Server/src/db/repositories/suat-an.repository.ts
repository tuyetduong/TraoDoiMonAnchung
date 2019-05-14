import { RepositoryBase } from "./repositoryBase";
import { SuatAnModel } from "../models";
import { ISuatAnModel, ISuatAnRepository, IPage } from "../../interfaces";

export class SuatAnRepository extends RepositoryBase<ISuatAnModel> implements ISuatAnRepository {
    constructor() {
        super(SuatAnModel);
    }

    public getSuatAn(idUser: string, ipage: IPage): Promise<any> {
        return SuatAnModel.find({
            NguoiTao: idUser
        })
        .populate({path: "NguoiTao"})
        .populate({path: "ArrNguoiAnChung.NguoiAnCung"})
        .populate({path: "arrBinhLuan.NguoiBinhLuan"})
        .exec().then((res: any) => {
                // const temp = this.sortArrObject(res, ipage.sort, ipage.typesort);
                const temp = res;
                const result = temp.slice(ipage.amount * ipage.page - ipage.amount, ipage.amount * ipage.page);
                return {
                    data: result,
                    total: temp.length,
                    page: ipage.page,
                    amount: ipage.amount,
                    totalPage: (Math.floor(temp.length / ipage.amount) ?
                    Math.floor(temp.length / ipage.amount) : 1) + (temp.length % ipage.amount ? 1 : 0),
                };
            });
    }

    public gettAllSuatAn(ipage: IPage): Promise<any> {
        console.log("point");
        
        return SuatAnModel.find({})
        .populate({path: "NguoiTao"})
        .exec().then((res: any) => {
                return {
                    data: res,
                    total: res.length,
                    page: 1,
                    amount: 0,
                    totalPage: 1
                };
            });
    }

    public getOneSuatAnById(id: string): Promise<any> {
        return SuatAnModel.findById(id)
        .populate({path: "NguoiTao"})
        .populate({path: "arrBinhLuan.NguoiBinhLuan"})
        .exec().then((res: any) => {
                return res;
            });
    }

    private sortArrObject(data: any[], valueSort: string, typeSort: number) {
        let temp = [];
        let arrNumber = [];
        let arrString = [];
        for (let i = 0 ; i < Number(data.length) ; i++) {
            if (data[i][valueSort] / 2 > 0) {
                arrNumber.push(data[i]);
            } else {
                arrString.push(data[i]);
            }
        }
        arrNumber = arrNumber.sort((a, b) => {
            return (a[valueSort] - b[valueSort]) * typeSort;
        });
        arrString = arrString.sort((a, b) => {
            return (a[valueSort].localeCompare(b[valueSort]) > 0) ?
            1 * typeSort : (a[valueSort].localeCompare(b[valueSort]) < 0) ? -1 * typeSort : 0;
        });
        temp = (typeSort > 0) ? arrNumber.concat(arrString) : arrString.concat(arrNumber);
        return temp;
    }

    
}