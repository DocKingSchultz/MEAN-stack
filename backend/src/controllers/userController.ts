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
    changePassword = (req: express.Request, res: express.Response) => {
        let username = req.body.username;
        let password = req.body.password;
        console.log(username + " " + password)
        User.findOneAndUpdate({ "username": username }, { "password": password }, (err, data) => {
            if (data) res.json(data);
            else {
                res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu")
            }

        }).clone()
    }
    makeRegistrationRequest = (req: express.Request, res: express.Response) => {
        console.log("makeregreqbac l")
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
        console.log(JSON.stringify(req.body))
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

}