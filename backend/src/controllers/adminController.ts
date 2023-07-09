import User from "../models/user";
import e, * as express from 'express';
import { compileFunction } from "vm";

export class adminController {
    getAllRegistrationRequests = (req: express.Request, res: express.Response) => {
        User.find({}, (err, reqs) => {
            if (err) console.log("getting reg requests error :" + err)
            else {
                res.json(reqs)
            }
        })
    }
    changeAccStatus = (req: express.Request, res: express.Response) => {
        let user = req.body.req
        let username=user.username
        let status = user.status;
        if(status=="neaktivan")
        {
            status="aktivan"
        }
        else
        {
            status="neaktivan"
        }
        console.log(username);
        User.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
            if(err)throw(err)
            else if(!res){
                console.log("Cant update user status, as user doesnt exist in database" + JSON.stringify(res))
            }
        });

    }

    deleteUser = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        console.log("Brisanje korisnika: " + username)
        User.deleteOne({ username: username }, function(err, result) {
            if (err) {
              console.error("Greska prilikom brisanje korisnika:" + username, err);
              res.json("Greska prilikom brisanje korisnika:" + username)
              return;
            }
            console.log("Uspesno izbrisan korisnik "+username);
            res.json("Uspesno izbrisan korisnik "+username)
          });
    }
}




