import {Schema, Document, Model, model} from 'mongoose';
import {ObjectId} from "mongodb";


// export interface IUser extends Document {
//     name: string;
//     address: Address;
//     permissions: Array<String>;
//     dateOfBirth: Date;
//     groups: Array<string>;
// }

export interface IUser extends Document {
    _id?: ID;
    name?: Name;
    address?: Address;
    permissions?: Groups;
    dateOfBirth?: DateOfBirth;
    groups?: Groups;
}

export interface ID {
    $oid?: Name;
}

export interface Name {
    type?: string;
}

export interface Address {
    street?: Name;
    city?: Name;
    state?: Name;
    zip?: Name;
}

export interface DateOfBirth {
    $date?: DateClass;
}

export interface DateClass {
    $numberLong?: Name;
}

export interface Groups {
    type?: string[];
}


const UserSchema: Schema = new Schema({
    _id: {
        $oid: {
            type: ObjectId
        }
    },
    name: {
        type: String
    },
    address: {
        street: {
            type: String
        },
        city: {
            type: String
        },
        state: {
            type: String
        },
        zip: {
            type: Date
        }
    },
    permissions: {
        type: [
            String
        ]
    },
    dateOfBirth: {
        $date: {
            type: Date
        }
    },
    groups: {
        type: [
            String
        ]
    }
});

export const UserModel: Model<IUser> = model<IUser>('shoppy', UserSchema, 'users');
