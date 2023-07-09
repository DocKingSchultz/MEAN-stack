"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const comment_1 = require("./modelInterfaces/comment");
const objectinfo_1 = require("./modelInterfaces/objectinfo");
const job_1 = require("./modelInterfaces/job");
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    passwordConfirmed: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
    },
    address: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    picture: {
        type: String,
    },
    mnumber: {
        type: Number,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        required: true,
    },
    objects: {
        type: [objectinfo_1.ObjectInfoSchema],
        default: [],
    },
    agencyComments: {
        type: [comment_1.CommentSchema],
        default: [],
    },
    clientJobs: {
        type: [job_1.JobSchema],
        default: [],
    },
    workers: {
        type: Number,
    },
});
exports.default = mongoose_1.default.model('User', User, 'user');
//# sourceMappingURL=user.js.map