import regreqs from "../models/regreqs";
import User from "../models/user";
import e, * as express from 'express';
import user from "../models/user";

export class userController
{
    login = (req: express.Request, response: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let isAdmin = req.body.isAdmin;
        let user = new User();
        console.log("Logging the user :" + req.body.username + "  " + req.body.password)
        User.findOne({'username':username, 'password': password}, (err, res)=>
        {
                if(res && ((isAdmin==true && res.type=="admin") || (isAdmin==false && res.type!="admin")))
                {  
                    user.type=res.type;
                    user.username=res.username;
                    user.password=res.password;
                    response.json(res);  
                }
                else 
                {
                    console.log("User doesn't exists in the system")
                    response.json(null);         
                }  
        })
    }
    changePassword= (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        console.log(username + " " + password)
        User.findOneAndUpdate({"username":username}, {"password": password}, (err, data)=>{
        if(data)res.json(data);
        else 
        {
            res.json("Ne moze da se promeni lozinka jer korisnik sa usernameom : " + username + " ne postoji u sistemu")
        }

         }).clone()
    }
    makeRegistrationRequest= (req: express.Request, res: express.Response)=>{
        console.log("makeregreqbac l")
        let regReq = new regreqs(req.body); 
        let username =req.body.username;
        regreqs.findOne({username:username}, (err, alreadyExists)=>
        {
            if(!alreadyExists)
            {
                user.findOne({username:username}, (err, exists)=>
                {
                    if(!exists)

                                            regReq.save().then(regReq=>{
                                                res.status(200).json({'message': 'Zahtev za registracijom uspesno kreiran'});
                                            }).catch(err=>{
                                                console.log(err);
                                                res.status(400).json({'message': 'error'})
                                            })
                                            
                })
            }else res.json({'message':'Korisnik sa unetim podacima vec postoji u sistemu'})
        })
        
    }

}