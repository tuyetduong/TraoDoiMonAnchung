import { Schema, model } from "mongoose";
import { IUserModel, IUser } from "../../interfaces";
import { Roles, CollectionNames } from "../../constants";

const userSchema = new Schema(
    {
        TenDangNhap: {
            type: String,
            required: true
        },
        Password: String,
        Email: {
            type: String,
            required: true
        },
        IDThucDon: {
            type: String,
            default: ""
        },
        SDT: {
            type: String,
            default: ""
        },
        salt: {
            type: String,
            default: ""
        },
        gender: {
            type: String,
            default: ""
        },
        avatar: {
            type: String,
            default: ""
        },
        role: {
            type: String,
            default: Roles.User,
        },
        birthday: {
            type: Date,
            default: Date.now()
        },
        activated: {
            type: Boolean,
            default: false
        },
        HoVaTen: {
            type: String,
            default: ""
        },
        arrDonAnCung: [{
            type: Schema.Types.ObjectId,
            ref: CollectionNames.SuatAn
        }]
    }, {
        toObject: {
            virtuals: true
        },
        toJSON: {
            virtuals: true
        }
    }
);

// Duplicate the ID field.
// userSchema.virtual("id").get(function() {
//     return this._id.toHexString();
// });

export const UserModel = model<IUserModel>(CollectionNames.User, userSchema);
