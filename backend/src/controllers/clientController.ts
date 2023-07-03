
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
                console.log(JSON.stringify(result))
              console.log('Object inserted successfully into User collection.');
            }
          });
    }
}