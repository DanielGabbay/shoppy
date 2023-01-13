"use strict";
exports.__esModule = true;
var mongoose = require('mongoose');
// User Schema from the interface
var UserModel = new mongoose.Schema({
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
        "default": Date.now
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
