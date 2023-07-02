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
var logger = require('morgan');
const fileUpload = require('express-fileupload');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.static('public'));
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(fileUpload());
mongoose_1.default.connect("mongodb://localhost:27017/MEAN-stack");
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
router.route('/admin/getAllRegistrationRequests').post((req, res) => new adminController_1.adminController().getAllRegistrationRequests(req, res));
router.route('/admin/changeAccStatus').post((req, res) => new adminController_1.adminController().changeAccStatus(req, res));
app.listen(4000, () => console.log(`Express server running on port 4000`));
// export const cloudinary = require('cloudinary').v2;
// // Configuration
// cloudinary.config({
//   cloud_name: "dbojpprhx",
//   api_key: "665725843676129",
//   api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
// });
//# sourceMappingURL=server.js.map