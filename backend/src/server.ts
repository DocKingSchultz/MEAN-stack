import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { onFileupload } from './controllers/fileUploader';
import { userController } from './controllers/userController';


const fileUpload = require('express-fileupload');
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(fileUpload());

mongoose.connect("mongodb://localhost:27017/MEAN-stack");

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

app.listen(4000, () => console.log(`Express server running on port 4000`));


// export const cloudinary = require('cloudinary').v2;

// // Configuration
// cloudinary.config({
//   cloud_name: "dbojpprhx",
//   api_key: "665725843676129",
//   api_secret: "uGCyXNYTyJcJJsqrpzKZo1wYdzw"
// });
