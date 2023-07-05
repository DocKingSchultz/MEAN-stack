"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientController = void 0;
const user_1 = __importDefault(require("../models/user"));
const user_2 = __importDefault(require("../models/user"));
class clientController {
    constructor() {
        this.addNewOjbect = (req, response) => {
            console.log("Ubacivanje novog objekta");
            let obj = req.body.obj;
            let username = req.body.username;
            user_1.default.updateOne({ username: username }, { $push: { 'objects': obj } }, (error, result) => {
                if (error) {
                    console.error('Error inserting object into User collection:', error);
                }
                else if (result) {
                    response.json("Objekat uspesno dodat");
                    console.log('Object inserted successfully into User collection.');
                }
            });
        };
        this.getAllObjects = (req, response) => {
            console.log("Dohvatanje svih objekata");
            user_2.default.findOne({ "username": req.body.username }, (err, reqs) => {
                if (err)
                    console.log("getting objects from user " + JSON.stringify(req.body) + " failed :" + err);
                else {
                    response.json(reqs);
                }
            });
        };
        this.insertJob = (req, response) => {
            console.log("Ubacivanje objekta");
            let job = req.body.job;
            let username = req.body.username;
            user_1.default.updateOne({ username: username }, { $push: { 'clientJobs': job } }, (error, result) => {
                if (error) {
                    console.error('Error inserting job into User collection:', error);
                }
                else if (result) {
                    response.json("Zahtev uspesno dodat");
                    console.log('Object inserted successfully into User collection.');
                }
            });
        };
    }
}
exports.clientController = clientController;
//# sourceMappingURL=clientController.js.map