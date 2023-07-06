import User from "../models/user";
import e, * as express from 'express';
import user from "../models/user";

export class userController {
    login = (req: express.Request, response: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        let isAdmin = req.body.isAdmin;
        let user = new User();
        console.log("Logging the user :" + req.body.username + "  " + req.body.password)
        User.findOne({ 'username': username, 'password': password }, (err, res) => {
            if (res && ((isAdmin == true && res.type == "admin") || (isAdmin == false && res.type != "admin")) && res.status != "neaktivan") {
                user.type = res.type;
                user.username = res.username;
                user.password = res.password;
                response.json(res);

            }
            else {
                console.log("User ne postoji u sitemu ili nije kativiran od strane admina")
                response.json(null);
            }
        })
    }
    refresh = (req: express.Request, response: express.Response) => {
        let username = req.body.username;
        let user = new User();
        console.log("Dohvatanje svezeg usera")
        User.findOne({ 'username': username }, (err, res) => {
            if(res)
            {
                console.log("User refreshed")
                response.json(res);
            }
            else
            {
                console.log("user failed to refresh info")
            }
        })
    }
    changePassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        console.log("Promena loiznke za : " + username)
        User.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
            if (data) res.json(data);
            else {
                res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu")
            }

        }).clone()
    }
    makeRegistrationRequest = (req: express.Request, res: express.Response) => {
        console.log("Kreiranje zahteva za registracijom")
        let user = new User(req.body);
        let username = req.body.username;
        User.findOne({ username: username }, (err, alreadyExistsUsername) => {
            if (!alreadyExistsUsername) {
                User.findOne({email: req.body.email }, (err, alreadyExistsEmail) => {
                if(!alreadyExistsEmail)
                {
                    user.save().then(regReq => {
                        res.status(200).json({ 'message': 'Zahtev za registracijom uspesno kreiran' });
                    }).catch(err => {
                        console.log(err);
                        res.status(400).json({ 'message': 'error' })
                    })
                }
                else res.json({ 'message': 'Korisnik sa unetim emailom vec postoji u sistemu' })
             })
            } else res.json({ 'message': 'Korisnik sa unetim koriscnickim imenom vec postoji u sistemu' })
        })

    }
    updateProfile = (req: express.Request, res: express.Response) => {
        let user = new User(req.body)
        console.log("Update profila korinsika : " + user.username)
        User.findOneAndUpdate({ username: user.username }, user, (err, data) => {
            if (err) {
                console.log("Update profile failed" + JSON.stringify(err))
            }
            else if (data) {
                console.log("Update profile succ")
                res.json("Profile succ updated")
            }
            else {
                console.log("Update profile not succ, user not found")
            }

        })
    }

    getUserByEmail = (req: express.Request, res: express.Response) => {
        let email = req.body.email;
        console.log("Provera email: " + email)
        User.findOne({ email: email }, (err, data) => {
            if (data) {
                console.log("Postoji korisnik sa email:"+ email)
                res.json(data);
            }
            else {
                console.log("Ne postoji korisnik sa email:"+ email)
                res.json(null);
            }

        })
    }

}