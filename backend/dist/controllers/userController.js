"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("../models/user"));
class userController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let isAdmin = req.body.isAdmin;
            let user = new user_1.default();
            user_1.default.findOne({ 'username': username, 'password': password }, (err, res) => {
                if (res && ((isAdmin == true && res.type == "admin") || (isAdmin == false && res.type != "admin"))) {
                    user.type = res.type;
                    user.username = res.username;
                    user.password = res.password;
                    res.json(res);
                }
                else {
                    console.log("User doesn't exists in the system");
                    res.json(null);
                }
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            console.log(username + " " + password);
            user_1.default.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
                if (data)
                    res.json(data);
                else {
                    res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu");
                }
            }).clone();
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map