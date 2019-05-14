import {
    IUserService,
    IUserRepository,
    IRepositories,
    IUserModel,
    IUserList,
    IUserQuery,
    IUser,
    ISuatAnRepository,
    ISuatAnService,
    IPage
} from "../interfaces";
import { Error } from "../constants";
import { statusCode } from "../constants/statusCode";
var NodeGeocoder = require("node-geocoder");
export class SuatAnService implements ISuatAnService {
    private suatAnRepo: ISuatAnRepository;
    private userRepo: IUserRepository;
    constructor(repoList: IRepositories) {
        this.suatAnRepo = repoList.suatAnRepository;
        this.userRepo = repoList.userRepository;
    }

    public async getSuatAn(id: string, ipage: IPage): Promise<any> {
        try {
            ipage.search = this.removeWhiteSpace(ipage.search || "", "search");
            const result = await this.suatAnRepo.getSuatAn(id, ipage);
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async gettAllSuatAn(): Promise<any> {
        try {
            const result = await this.suatAnRepo.gettAllSuatAn();
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async getOneSuatAnById(id: string): Promise<any> {
        try {
            const result = await this.suatAnRepo.getOneSuatAnById(id);
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async taoSuatAn(body: any): Promise<any> {
        try {
            const checkStatus = await this.suatAnRepo.findOne({ Status: true, NguoiTao: body.id });
            if (checkStatus) {
                throw { error: Error.SUATAN.SUAT_AN_READY, status: statusCode.BadRequest };
            }
            // const salt = await genSalt();
            // const hashPass = await hashWithSalt(employee.password, salt);
            // employee.salt = salt;
            // employee.password = hashPass;
            body.NguoiTao = body.user._id;
            body.ThoiGianTaoDon = Date.now();
            const newUser = await this.suatAnRepo.create(body);
            // const payload = newUser.toJSON() as any;
            // delete payload.password;
            // delete payload.salt;
            return newUser;
        } catch (err) {
            throw err;
        }
    }

    public async updateSuatAn(): Promise<any> {
        try {

        } catch (err) {
            throw err;
        }
    }

    public async deleteSuatAn(): Promise<any> {
        try {

        } catch (err) {
            throw err;
        }
    }

    public async requestAnCung(idSuatAn: string, body: any): Promise<any> {
        try {
            let updateSuatAn: any;
            let updateUser: any;
            const getSuatAn = await this.suatAnRepo.findById(idSuatAn);
            const getUser = await this.userRepo.findById(body.user._id);
            if(Number(getSuatAn.GioiHanAnChung) === Number(getSuatAn.ArrNguoiAnChung.length)
            || Number(getSuatAn.GioiHanAnChung) < Number(getSuatAn.ArrNguoiAnChung.length)) {
                throw { error: Error.SUATAN.FULL_SLOT, status: statusCode.BadRequest };
            }
            if (!getUser) {
                throw { error: Error.USER.NOT_FOUND, status: statusCode.NotFound };
            }
            if (getSuatAn.NguoiTao.toString().localeCompare(body.user._id.toString()) === 0 ) {
                throw { error: Error.SUATAN.NOT_REQUEST_YOURSELF, status: statusCode.BadRequest };
            }
            if (!getSuatAn) {
                throw { error: Error.SUATAN.SUAT_AN_NOT_FOUND, status: statusCode.NotFound };
            } else {
                const tempSuatAn = getSuatAn.ArrNguoiAnChung;
                const tempUser = getUser.arrDonAnCung;
                const checkSuatAn = [];
                for(let i = 0 ; i < getSuatAn.ArrNguoiAnChung.length; i++) {
                    checkSuatAn.push(getSuatAn.ArrNguoiAnChung[i].NguoiAnCung.toString());
                }
                // tslint:disable-next-line: max-line-length
                if (checkSuatAn.includes(body.user._id.toString()) === false) {
                    tempSuatAn.push({NguoiAnCung: body.user._id});
                    const modiferSuatAn = {
                        ArrNguoiAnChung: tempSuatAn
                    }
                    updateSuatAn = await this.suatAnRepo.updateById(idSuatAn, modiferSuatAn);
                } else {
                    throw { error: Error.SUATAN.REQUEST_EXIST, status: statusCode.BadRequest };
                }
                if (tempUser.includes(idSuatAn) === false) {
                    tempUser.push(idSuatAn);
                    const modiferUser = {
                        arrDonAnCung: idSuatAn
                    }
                    updateUser = await this.userRepo.updateById(body.user._id, modiferUser)
                }
                if (updateSuatAn && updateUser) {
                    return true;
                } else {
                    return false;
                }
            }
        } catch (err) {
            throw err;
        }
    }

    public async getLatlng(address: string): Promise<any> {
        try {
            const result: any = this.readLocation(address);
            return result;
        } catch (err) {
            throw err;
        }
    }

    public async binhLuanSuatAn(body: any): Promise<any> {
        try {
            let getSuatAn = await this.suatAnRepo.findById(body.idSuatAn);
            if (!getSuatAn) {
                throw { error: Error.SUATAN.SUAT_AN_NOT_FOUND, status: statusCode.NotFound };
            }
            const temp = {
                NguoiBinhLuan: body.user._id,
                ThoiGian: Date.now(),
                BinhLuan: body.BinhLuan
            };
            // console.log(getSuatAn, "getSuatAn");
            
            getSuatAn["arrBinhLuan"] = (getSuatAn["arrBinhLuan"]) ? getSuatAn["arrBinhLuan"].push(temp) : [temp];
            const result: any = await this.suatAnRepo.updateById(body.idSuatAn, getSuatAn);
            return getSuatAn;
        } catch (err) {
            throw err;
        }
    }

    public async readLocation(address: String): Promise<any> {
        return new Promise(async function (resolve: any, reject: any) {
            var options = {
                provider: 'google',
                // Optional depending on the providers
                httpAdapter: 'https', // Default
                apiKey: 'AIzaSyAXTJwhYqJ6Pc7VXGRMTv40N1WRLqzuSNs', // for Mapquest, OpenCage, Google Premier
                formatter: null         // 'gpx', 'string', ...
            };
            var geocoder = NodeGeocoder(options);

            await geocoder.geocode(address)
                .then(function (res: any) {
                    let localtion = {
                        lat: res[0].latitude,
                        lng: res[0].longitude
                    }
                    return resolve(localtion);
                })
                .catch(function (err: any) {
                    return resolve(null);
                });
        })

    }
    
    public async duyetAnCung(body: any): Promise<any> {
        try {
            const getSuatAn = await this.suatAnRepo.findById(body.idSuatAn);
            if(!getSuatAn) {
                throw { error: Error.SUATAN.SUAT_AN_NOT_FOUND, status: statusCode.NotFound };
            }
            for(let i = 0 ; i < getSuatAn.ArrNguoiAnChung.length ; i++) {
                console.log(getSuatAn, "getSuatAn")
                const tempNguoiAnCung = getSuatAn.ArrNguoiAnChung[i].NguoiAnCung.toString();
                console.log(tempNguoiAnCung, "tempNguoiAnCung");
                if (tempNguoiAnCung.localeCompare(body.idNguoiAnChung.toString()) === 0) {
                    console.log(body.Status, "body.Status");
                    getSuatAn.ArrNguoiAnChung[i].Status = body.Status;
                    console.log(getSuatAn.ArrNguoiAnChung[i].Status, "getSuatAn.ArrNguoiAnChung[i].Status")
                }
            }
            delete getSuatAn._id;
            delete getSuatAn.id;
            const result = await this.suatAnRepo.updateById(body.idSuatAn, getSuatAn);
            return getSuatAn;
        } catch (err) {
            throw err;
        }
    }

    private removeWhiteSpace(dataString: string, status?: string) {
        // const temp = dataString || null;
        if (dataString === null || dataString === "") {
            return "";
        } else {
            if (status === "search" || status === "field_address" || status === "city_Province") {
                return dataString.replace(/^\s+|\s+$/gm, "");
            } else {
                return dataString.replace(/^\s+|\s+$/gm, "") + ", ";
            }
        }
    }
}
