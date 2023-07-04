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
            user_1.default.find({ 'type': 'agency' }, (err, res) => {
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
    }
}
exports.agencyController = agencyController;
//# sourceMappingURL=agencyController.js.map