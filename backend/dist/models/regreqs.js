"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RegReq = new Schema({
    username: String,
    password: String,
    passwordConfirmed: String,
    type: String,
    name: String,
    lastname: String,
    address: String,
    email: String,
    phone: Number,
    picture: String,
    mnumber: Number,
    description: String,
    status: String,
});
exports.default = mongoose_1.default.model('RegReq', RegReq, 'regreq');
//# sourceMappingURL=regreqs.js.map