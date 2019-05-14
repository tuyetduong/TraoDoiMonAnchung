import { Schema, model } from "mongoose";
import { Roles, CollectionNames } from "../../constants";
import { ObjectID } from "bson";
import { ISuatAnModel } from "../../interfaces/IEntities/ISuatAn";

const suatAnSchema = new Schema(
    {
        NguoiTao: {
            type: Schema.Types.ObjectId,
            ref: CollectionNames.User
        },
        GioiHanAnChung: {
            type: Number,
            default: 1
        },
        ArrNguoiAnChung: [
            {
                NguoiAnCung: {
                    type: Schema.Types.ObjectId,
                    ref: CollectionNames.User
                },
                Status: {
                    type: String, // stanby: Cho duoc chap nhan, agree: dong y cho an cung, refuse: tu choi an cung
                    default: "stanby"
                },
                ThoiGian: {
                    type: Date, // Thoi gian xin vao nhom
                    default: Date.now()
                }
            }
        ],
        ThoiGianTaoDon: {
            type: Date,
            default: Date.now()
        },
        ThoiGianChotDon: {
            type: Date,
            default: Date.now()
        },
        NoiDung: {
            type: String,
            default: ""
        },
        Tinh_TP: {
            type: String,
            default: null
        },
        Quan_Huyen: {
            type: String,
            default: null
        },
        Xa_Phuong: {
            type: String,
            default: null
        },
        Address: {
            type: String,
            default: null
        },
        DiaChiDayDu: {
            type: String,
            default: null
        },
        Location: {
            lat: {
                type: Number,
                default: 0
            },
            lng: {
                type: Number,
                default: 0
            }
        },
        // TRANG THAI SAN SANG CUA SUAT AN, TRUE = DANG SAN SANG, FALSE = KET THUC
        Status: {
            type: Boolean,
            default: true
        },
        arrBinhLuan: [
            {
                NguoiBinhLuan: {
                    type: Schema.Types.ObjectId,
                    ref: CollectionNames.User
                },
                ThoiGian: {
                    type: Date,
                    default: Date.now()
                },
                BinhLuan: {
                    type: String,
                    default: ""
                }
            }
        ]
    }
);

// Duplicate the ID field.
// userSchema.virtual("id").get(function() {
//     return this._id.toHexString();
// });

export const SuatAnModel = model<ISuatAnModel>(CollectionNames.SuatAn, suatAnSchema);
