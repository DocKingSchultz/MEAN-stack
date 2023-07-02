import User from "../models/user";
import e, * as express from 'express';
import RegReq from "../models/regreqs"
import { compileFunction } from "vm";

export class adminController {
    getAllRegistrationRequests = (req: express.Request, res: express.Response) => {
        RegReq.find({}, (err, reqs) => {
            if (err) console.log("getting reg requests error :" + err)
            else {
                res.json(reqs)
            }
        })
    }
    changeAccStatus = (req: express.Request, res: express.Response) => {
        let regReq = req.body.req;
        let username = regReq.username
        let status = req.body.status;
        RegReq.findOneAndUpdate({ "username": username }, { "status": status }, (err, res) => {
            if(err)throw(err)
            else {
                User.findOne({ "username": username }, (err, res) => {

                    if(err)throw(err)
                    else {
                        if (res) {

                            User.deleteOne({ "username": username }, (err) => {

                            }).clone().catch(err => {
                                if (err) {
                                    console.log("Greska pri deaktiviranju kompanije Admin/changeAccStatus : " + err)
                                }
                            });

                        }
                        else {
                            let comp = new User(regReq)
                            comp.status = status;
                            if (status == 'aktivan') {
                                comp.save(function (err) {
                                    if(err)throw(err)
                                });
                            }


                        }
                    }
                });

            }
        });

    }

}




