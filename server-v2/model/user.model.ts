import {Types} from "mongoose";

const mongoose = require('mongoose');

// Interface for the User Schema
export interface IUser {
    _id?: Types.ObjectId;
    firstName: string;
    lastName: string;
    address: {
        street: string;
        city: string;
        country: string;
        zip: string;
    };
    email?: string;
    phone?: string;
    dateOfBirth?: Date;
    dateCreated: Date;
    permissions: {
        admin: boolean;
        groupManager: boolean;
        groupMember: boolean;
        groupViewer: boolean;
    };
    groups: [Types.ObjectId];
}

// User Schema from the interface
const UserModel = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        street: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    },
    email: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    dateOfBirth: {
        type: Date,
        required: false
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    permissions: {
        admin: {
            type: Boolean,
            required: true
        },
        groupManager: {
            type: Boolean,
            required: true
        },
        groupMember: {
            type: Boolean,
            required: true
        },
        groupViewer: {
            type: Boolean,
            required: true
        }
    },
    groups: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    }
});


module.exports = mongoose.model('User', UserModel);
