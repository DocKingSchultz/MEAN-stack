"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const user_1 = __importDefault(require("../models/user"));
const regreqs_1 = __importDefault(require("../models/regreqs"));
class adminController {
    constructor() {
        this.getAllRegistrationRequests = (req, res) => {
            regreqs_1.default.find({}, (err, reqs) => {
                if (err)
                    console.log("getting reg requests error :" + err);
                else {
                    res.json(reqs);
                }
            });
        };
        this.changeAccStatus = (req, res) => {
            let regReq = req.body.req;
            let username = regReq.username;
            let status = req.body.status;
            regreqs_1.default.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
                if (err)
                    throw (err);
                else {
                    user_1.default.findOne({ "username": username }, (err, res) => {
                        if (err)
                            throw (err);
                        else {
                            if (res) {
                                user_1.default.deleteOne({ "username": username }, (err) => {
                                }).clone().catch(err => {
                                    if (err) {
                                        console.log("Greska pri deaktiviranju kompanije Admin/changeAccStatus : " + err);
                                    }
                                });
                            }
                            else {
                                let comp = new user_1.default(regReq);
                                comp.status = status;
                                if (status == 'aktivan') {
                                    comp.save(function (err) {
                                        if (err)
                                            throw (err);
                                    });
                                }
                            }
                        }
                    });
                }
            });
        };
    }
}
exports.adminController = adminController;
//# sourceMappingURL=adminController.js.map