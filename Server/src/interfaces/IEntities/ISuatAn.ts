import { Document } from "mongoose";

export interface ISuatAn {
    NguoiTao: string;
    SoLuongAnChung: number;
    ArrNguoiAnChung: any;
    Tinh_TP: string;
    Quan_Huyen: string;
    Xa_Phuong: string;
    Address: string;
    DiaChiDayDu: string;
    Location: any;
    ThoiGianTaoDon: Date;
    ThoiGianChotDon: Date;
    NoiDung: string;
    arrBinhLuan: any;
}

export interface ISuatAnModel extends Document {
    NguoiTao: string;
    SoLuongAnChung: number;
    ArrNguoiAnChung: any;
    Tinh_TP: string;
    Quan_Huyen: string;
    Xa_Phuong: string;
    Address: string;
    DiaChiDayDu: string;
    Location: any;
    ThoiGianTaoDon: Date;
    ThoiGianChotDon: Date;
    NoiDung: string;
    arrBinhLuan: any;
}
