import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { onFileupload } from './controllers/fileUploader';
import { userController } from './controllers/userController';
import { adminController } from './controllers/adminController';
import { clientController } from './controllers/clientController';
import { agencyController } from './controllers/agencyController';


var logger = require('morgan');

const fileUpload = require('express-fileupload');
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(fileUpload());

mongoose.connect("mongodb://0.0.0.0:27017/MEAN-stack");

const conn = mongoose.connection;

conn.once('open',()=>{
    console.log('Uspesna konekcija');
});

const router = express.Router();

app.use('/', router);
app.route('/api/thumbnail-upload').post(onFileupload);

router.route('/users/login').post(
    (req, res)=>new userController().login(req, res)
)
router.route('/users/changePassword').post(
    (req, res)=>new userController().changePassword(req, res)
)
router.route('/users/makeRegistrationRequest').post(
    (req, res)=>new userController().makeRegistrationRequest(req, res)
)
router.route('/users/refresh').post(
    (req, res)=>new userController().refresh(req, res)
)
router.route('/admin/getAllRegistrationRequests').post(
    (req, res)=>new adminController().getAllRegistrationRequests(req, res)
)
router.route('/admin/changeAccStatus').post(
    (req, res)=>new adminController().changeAccStatus(req, res)
)
router.route('/users/updateProfile').post(
    (req, res)=>new userController().updateProfile(req, res)
)
router.route('/users/getUserByUsername').post(
    (req, res)=>new userController().getUserByUsername(req, res)
)
router.route('/users/getUserByEmail').post(
    (req, res)=>new userController().getUserByEmail(req, res)
)
router.route('/users/getAgencies').get(
    (req, res)=>new agencyController().getAgencies(req, res)
)
router.route('/users/getAgencyByUsername').post(
    (req, res)=>new agencyController().getAgencyByUsername(req, res)
)
router.route('/users/deleteUser').post(
    (req, res)=>new adminController().deleteUser(req, res)
)
router.route('/users/getAgenciesByName').post(
    (req, res)=>new agencyController().getAgenciesByName(req, res)
)
router.route('/users/getAgenciesByAddress').post(
    (req, res)=>new agencyController().getAgenciesByAddress(req, res)
)
router.route('/users/getAgenciesByNameAndAddress').post(
    (req, res)=>new agencyController().getAgenciesByNameAndAddress(req, res)
)
router.route('/client/addNewOjbect').post(
    (req, res)=>new clientController().addNewOjbect(req, res)
)
router.route('/client/getAllObjects').post(
    (req, res)=>new clientController().getAllObjects(req, res)
)
router.route('/client/insertJob').post(
    (req, res)=>new clientController().insertJob(req, res)
)
router.route('/users/getAllUsers').post(
    (req, res)=>new userController().getAllUsers(req, res)
)
router.route('/users/updateAgencyWorkers').post(
    (req, res)=>new userController().updateAgencyWorkers(req, res)
)

app.listen(4000, () => console.log(`Express server running on port 4000`));


// export const cloudinary = require('cloudinary').v2;

// // Configuration
// cloudinary.config({
//   cloud_name: "dbojpprhx",
//   api_key: "665725843676129",
//   api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
// });
