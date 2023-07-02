"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const regreqs_1 = __importDefault(require("../models/regreqs"));
const user_1 = __importDefault(require("../models/user"));
const user_2 = __importDefault(require("../models/user"));
class userController {
    constructor() {
        this.login = (req, response) => {
            let username = req.body.username;
            let password = req.body.password;
            let isAdmin = req.body.isAdmin;
            let user = new user_1.default();
            console.log("Logging the user :" + req.body.username + "  " + req.body.password);
            user_1.default.findOne({ 'username': username, 'password': password }, (err, res) => {
                if (res && ((isAdmin == true && res.type == "admin") || (isAdmin == false && res.type != "admin"))) {
                    user.type = res.type;
                    user.username = res.username;
                    user.password = res.password;
                    response.json(res);
                }
                else {
                    console.log("User doesn't exists in the system");
                    response.json(null);
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
        this.makeRegistrationRequest = (req, res) => {
            console.log("makeregreqbac l");
            let regReq = new regreqs_1.default(req.body);
            let username = req.body.username;
            regreqs_1.default.findOne({ username: username }, (err, alreadyExists) => {
                if (!alreadyExists) {
                    user_2.default.findOne({ username: username }, (err, exists) => {
                        if (!exists)
                            regReq.save().then(regReq => {
                                res.status(200).json({ 'message': 'Zahtev za registracijom uspesno kreiran' });
                            }).catch(err => {
                                console.log(err);
                                res.status(400).json({ 'message': 'error' });
                            });
                    });
                }
                else
                    res.json({ 'message': 'Korisnik sa unetim podacima vec postoji u sistemu' });
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map