"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const fileUploader_1 = require("./controllers/fileUploader");
const userController_1 = require("./controllers/userController");
const adminController_1 = require("./controllers/adminController");
const clientController_1 = require("./controllers/clientController");
const agencyController_1 = require("./controllers/agencyController");
var logger = require('morgan');
const fileUpload = require('express-fileupload');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(fileUpload());
mongoose_1.default.connect("mongodb://0.0.0.0:27017/MEAN-stack");
const conn = mongoose_1.default.connection;
conn.once('open', () => {
    console.log('Uspesna konekcija');
});
const router = express_1.default.Router();
app.use('/', router);
app.route('/api/thumbnail-upload').post(fileUploader_1.onFileupload);
router.route('/users/login').post((req, res) => new userController_1.userController().login(req, res));
router.route('/users/changePassword').post((req, res) => new userController_1.userController().changePassword(req, res));
router.route('/users/makeRegistrationRequest').post((req, res) => new userController_1.userController().makeRegistrationRequest(req, res));
router.route('/users/refresh').post((req, res) => new userController_1.userController().refresh(req, res));
router.route('/admin/getAllRegistrationRequests').post((req, res) => new adminController_1.adminController().getAllRegistrationRequests(req, res));
router.route('/admin/changeAccStatus').post((req, res) => new adminController_1.adminController().changeAccStatus(req, res));
router.route('/users/updateProfile').post((req, res) => new userController_1.userController().updateProfile(req, res));
router.route('/users/getUserByUsername').post((req, res) => new userController_1.userController().getUserByUsername(req, res));
router.route('/users/getUserByEmail').post((req, res) => new userController_1.userController().getUserByEmail(req, res));
router.route('/users/getAgencies').get((req, res) => new agencyController_1.agencyController().getAgencies(req, res));
router.route('/users/getAgencyByUsername').post((req, res) => new agencyController_1.agencyController().getAgencyByUsername(req, res));
router.route('/users/deleteUser').post((req, res) => new adminController_1.adminController().deleteUser(req, res));
router.route('/users/getAgenciesByName').post((req, res) => new agencyController_1.agencyController().getAgenciesByName(req, res));
router.route('/users/getAgenciesByAddress').post((req, res) => new agencyController_1.agencyController().getAgenciesByAddress(req, res));
router.route('/users/getAgenciesByNameAndAddress').post((req, res) => new agencyController_1.agencyController().getAgenciesByNameAndAddress(req, res));
router.route('/client/addNewOjbect').post((req, res) => new clientController_1.clientController().addNewOjbect(req, res));
router.route('/client/getAllObjects').post((req, res) => new clientController_1.clientController().getAllObjects(req, res));
router.route('/client/insertJob').post((req, res) => new clientController_1.clientController().insertJob(req, res));
router.route('/users/getAllUsers').post((req, res) => new userController_1.userController().getAllUsers(req, res));
router.route('/users/updateAgencyWorkers').post((req, res) => new userController_1.userController().updateAgencyWorkers(req, res));
app.listen(4000, () => console.log(`Express server running on port 4000`));
// export const cloudinary = require('cloudinary').v2;
// // Configuration
// cloudinary.config({
//   cloud_name: "dbojpprhx",
//   api_key: "665725843676129",
//   api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
// });
//# sourceMappingURL=server.js.map