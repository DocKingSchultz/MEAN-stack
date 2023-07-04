
import user from "../models/user";
import User from "../models/user";
import e, * as express from 'express';

export class clientController {
    addNewOjbect = (req: express.Request, response: express.Response) => {
        let obj = req.body.obj;
        let username = req.body.username;
        console.log(JSON.stringify(obj))
        console.log(username)
        user.updateOne({ username: username}, { $push: { 'objects': obj } }, (error, result) => {
            if (error) {
              console.error('Error inserting object into User collection:', error);
            } else if(result){
                response.json("Objekat uspesno dodat")
              console.log('Object inserted successfully into User collection.');
            }
          });
    }
    getAllObjects= (req: express.Request, response: express.Response) => {
      User.findOne({"username":req.body.username}, (err, reqs) => {
        if (err) console.log("getting objects from user "+JSON.stringify(req.body)+" failed :"+ err)
        else {
          response.json(reqs)
        }
    })
    }
}