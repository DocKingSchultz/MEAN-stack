"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminController = void 0;
const user_1 = __importDefault(require("../models/user"));
class adminController {
    constructor() {
        this.getAllRegistrationRequests = (req, res) => {
            user_1.default.find({}, (err, reqs) => {
                if (err)
                    console.log("getting reg requests error :" + err);
                else {
                    res.json(reqs);
                }
            });
        };
        this.changeAccStatus = (req, res) => {
            let user = req.body.req;
            let username = user.username;
            let status = user.status;
            if (status == "neaktivan") {
                status = "aktivan";
            }
            else {
                status = "neaktivan";
            }
            console.log(username);
            user_1.default.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
                if (err)
                    throw (err);
                else if (!res) {
                    console.log("Cant update user status, as user doesnt exist in database" + JSON.stringify(res));
                }
            });
        };
        this.deleteUser = (req, res) => {
            let username = req.body.username;
            console.log("Brisanje korisnika: " + username);
            user_1.default.deleteOne({ username: username }, function (err, result) {
                if (err) {
                    console.error("Greska prilikom brisanje korisnika:" + username, err);
                    res.json("Greska prilikom brisanje korisnika:" + username);
                    return;
                }
                console.log("Uspesno izbrisan korisnik " + username);
                res.json("Uspesno izbrisan korisnik " + username);
            });
        };
    }
}
exports.adminController = adminController;
//# sourceMappingURL=adminController.js.map