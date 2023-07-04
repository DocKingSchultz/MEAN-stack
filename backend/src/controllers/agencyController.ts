import User from "../models/user";
import e, * as express from 'express';
import user from "../models/user";

export class agencyController {
    getAgencies = (req: express.Request, response: express.Response) => {
        console.log("Dohvatanje agencija");
        User.find({ 'type': 'agency'}, (err, res) => {
            if (res) {
                response.json(res);
            }
            else {
                console.log("Nema agencija u bazi!")
                response.json(null);
            }
        })
    }

    getAgencyByUsername = (req: express.Request, response: express.Response) => {
        console.log("Dohvatanje agencije "+req.body.username);
        let username = req.body.username;
        User.findOne({ 'username': username}, (err, res) => {
            if (res) {
                response.json(res);
            }
            else {
                console.log("Nema agencije sa ovim korisnickim imenom!")
                response.json(null);
            }
        })
    }
}