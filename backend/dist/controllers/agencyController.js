"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.agencyController = void 0;
const user_1 = __importDefault(require("../models/user"));
class agencyController {
    constructor() {
        this.getAgencies = (req, response) => {
            console.log("Dohvatanje agencija");
            user_1.default.find({ 'type': 'agency', 'status': 'aktivan' }, (err, res) => {
                if (res) {
                    response.json(res);
                }
                else {
                    console.log("Nema agencija u bazi!");
                    response.json(null);
                }
            });
        };
        this.getAgencyByUsername = (req, response) => {
            console.log("Dohvatanje agencije " + req.body.username);
            let username = req.body.username;
            user_1.default.findOne({ 'username': username }, (err, res) => {
                if (res) {
                    response.json(res);
                }
                else {
                    console.log("Nema agencije sa ovim korisnickim imenom!");
                    response.json(null);
                }
            });
        };
        this.getAgenciesByName = (req, response) => {
            console.log("Dohvatanje agencije " + req.body.name);
            let name = req.body.name;
            user_1.default.find({ 'type': 'agency', 'name': { $regex: new RegExp(name.toLowerCase(), "i") } }, (err, res) => {
                if (res) {
                    response.json(res);
                }
                else {
                    console.log("Nema agencije sa ovim nazivom!");
                    response.json(null);
                }
            });
        };
        this.getAgenciesByAddress = (req, response) => {
            console.log("Dohvatanje agencije na adresi " + req.body.address);
            let address = req.body.address;
            user_1.default.find({ 'type': 'agency', 'address': { $regex: new RegExp(address.toLowerCase(), "i") } }, (err, res) => {
                if (res) {
                    response.json(res);
                }
                else {
                    console.log("Nema agencije na ovoj adresi!");
                    response.json(null);
                }
            });
        };
        this.getAgenciesByNameAndAddress = (req, response) => {
            console.log("Dohvatanje agencije " + req.body.name + "na adresi " + req.body.address);
            let name = req.body.name;
            let address = req.body.address;
            user_1.default.find({ 'type': 'agency', 'name': { $regex: new RegExp(name.toLowerCase(), "i") }, 'address': { $regex: new RegExp(address.toLowerCase(), "i") } }, (err, res) => {
                if (res) {
                    response.json(res);
                }
                else {
                    console.log("Nema agencije sa ovim nazivom na ovoj adresi!");
                    response.json(null);
                }
            });
        };
    }
}
exports.agencyController = agencyController;
//# sourceMappingURL=agencyController.js.map