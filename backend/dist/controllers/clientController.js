"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientController = void 0;
const user_1 = __importDefault(require("../models/user"));
class clientController {
    constructor() {
        this.addNewOjbect = (req, response) => {
            let obj = req.body.obj;
            let username = req.body.username;
            console.log(JSON.stringify(obj));
            console.log(username);
            user_1.default.updateOne({ username: username }, { $push: { 'objects': obj } }, (error, result) => {
                if (error) {
                    console.error('Error inserting object into User collection:', error);
                }
                else if (result) {
                    response.json("Objekat uspesno dodat");
                    console.log(JSON.stringify(result));
                    console.log('Object inserted successfully into User collection.');
                }
            });
        };
    }
}
exports.clientController = clientController;
//# sourceMappingURL=clientController.js.map