"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_1 = __importDefault(require("../models/user"));
class userController {
    constructor() {
        this.updateAgencyWorkers = (req, response) => {
            let username = req.body.username;
            let num = req.body.numWorkers;
            user_1.default.findOne({ username: username }, function (err, result) {
                if (err) {
                    console.error('Error updating document:', err);
                    return;
                }
                if (result) {
                    user_1.default.findOneAndUpdate({ username: username }, { $set: { workers: num + result.workers } }, function (err, result) {
                        if (err) {
                            console.error('Error updating document:', err);
                            return;
                        }
                        console.log('Uspesno promenjen broj radnika');
                        response.json("Uspesno promenjen broj radnika");
                    });
                }
            });
        };
        this.login = (req, response) => {
            let username = req.body.username;
            let password = req.body.password;
            let isAdmin = req.body.isAdmin;
            let user = new user_1.default();
            console.log("Logging the user :" + req.body.username + "  " + req.body.password);
            user_1.default.findOne({ 'username': username, 'password': password }, (err, res) => {
                if (res && ((isAdmin == true && res.type == "admin") || (isAdmin == false && res.type != "admin")) && res.status != "neaktivan") {
                    user.type = res.type;
                    user.username = res.username;
                    user.password = res.password;
                    response.json(res);
                }
                else {
                    console.log("User ne postoji u sitemu ili nije kativiran od strane admina");
                    response.json(null);
                }
            });
        };
        this.getAllUsers = (req, response) => {
            user_1.default.find({}, (err, data) => {
                if (err) {
                    console.error('Error retrieving documents:', err);
                    return;
                }
                else if (data) {
                    response.json(data);
                }
            });
        };
        this.refresh = (req, response) => {
            let username = req.body.username;
            let user = new user_1.default();
            console.log("Dohvatanje svezeg usera");
            user_1.default.findOne({ 'username': username }, (err, res) => {
                if (res) {
                    console.log("User refreshed");
                    response.json(res);
                }
                else {
                    console.log("user failed to refresh info");
                }
            });
        };
        this.changePassword = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            console.log("Promena loiznke za : " + username);
            user_1.default.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
                if (data)
                    res.json(data);
                else {
                    res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu");
                }
            }).clone();
        };
        this.makeRegistrationRequest = (req, res) => {
            console.log("Kreiranje zahteva za registracijom");
            let user = new user_1.default(req.body);
            let username = req.body.username;
            user_1.default.findOne({ username: username }, (err, alreadyExistsUsername) => {
                if (!alreadyExistsUsername) {
                    user_1.default.findOne({ email: req.body.email }, (err, alreadyExistsEmail) => {
                        if (!alreadyExistsEmail) {
                            user.save().then(regReq => {
                                res.status(200).json({ 'message': 'Zahtev za registracijom uspesno kreiran' });
                            }).catch(err => {
                                console.log(err);
                                res.status(400).json({ 'message': 'error' });
                            });
                        }
                        else
                            res.json({ 'message': 'Korisnik sa unetim emailom vec postoji u sistemu' });
                    });
                }
                else
                    res.json({ 'message': 'Korisnik sa unetim koriscnickim imenom vec postoji u sistemu' });
            });
        };
        this.updateProfile = (req, res) => {
            let user = new user_1.default(req.body);
            console.log("Update profila korinsika : " + user.username);
            user_1.default.findOneAndUpdate({ username: user.username }, user, (err, data) => {
                if (err) {
                    console.log("Update profile failed" + JSON.stringify(err));
                }
                else if (data) {
                    console.log("Update profile succ");
                    res.json("Profile succ updated");
                }
                else {
                    console.log("Update profile not succ, user not found");
                }
            });
        };
        this.getUserByUsername = (req, response) => {
            let username = req.body.username;
            console.log("Dohvatanje korisnika :" + req.body.username);
            user_1.default.findOne({ 'username': username }, (err, data) => {
                if (data) {
                    console.log("Dohvatili korisnika");
                    response.json(data);
                }
                else {
                    console.log("User ne postoji u sitemu");
                    response.json(null);
                }
            });
        };
        this.getUserByEmail = (req, res) => {
            let email = req.body.email;
            console.log("Provera email: " + email);
            user_1.default.findOne({ email: email }, (err, data) => {
                if (data) {
                    console.log("Postoji korisnik sa email:" + email);
                    res.json(data);
                }
                else {
                    console.log("Ne postoji korisnik sa email:" + email);
                    res.json(null);
                }
            });
        };
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map