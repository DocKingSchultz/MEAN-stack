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

    getAgenciesByName = (req: express.Request, response: express.Response) => {
        console.log("Dohvatanje agencije "+req.body.name);
        let name = req.body.name;
        User.find({ 'type': 'agency','name': { $regex: new RegExp(name.toLowerCase(), "i")}}, (err, res) => {
            if (res) {
                response.json(res);
            }
            else {
                console.log("Nema agencije sa ovim nazivom!")
                response.json(null);
            }
        })
    }

    getAgenciesByAddress = (req: express.Request, response: express.Response) => {
        console.log("Dohvatanje agencije na adresi "+req.body.address);
        let address = req.body.address;
        User.find({ 'type': 'agency','address': { $regex: new RegExp(address.toLowerCase(), "i")}}, (err, res) => {
            if (res) {
                response.json(res);
            }
            else {
                console.log("Nema agencije na ovoj adresi!")
                response.json(null);
            }
        })
    }

    getAgenciesByNameAndAddress = (req: express.Request, response: express.Response) => {
        console.log("Dohvatanje agencije "+req.body.name+"na adresi "+req.body.address);
        let name = req.body.name;
        let address = req.body.address;
        User.find({ 'type': 'agency','name': { $regex: new RegExp(name.toLowerCase(), "i")}, 'address': { $regex: new RegExp(address.toLowerCase(), "i")}}, (err, res) => {
            if (res) {
                response.json(res);
            }
            else {
                console.log("Nema agencije sa ovim nazivom na ovoj adresi!")
                response.json(null);
            }
        })
    }
}