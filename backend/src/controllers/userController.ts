import User from "../models/user";
import e, * as express from 'express';

export class userController
{
    login = (req: express.Request, res: express.Response)=>{
        let username = req.body.username;
        let password = req.body.password;
        let isAdmin = req.body.isAdmin;
        let user = new User();
        User.findOne({'username':username, 'password': password}, (err, res)=>
        {
                if(res && ((isAdmin==true && res.type=="admin") || (isAdmin==false && res.type!="admin")))
                {  
                    user.type=res.type;
                    user.username=res.username;
                    user.password=res.password;
                    res.json(res);  
                }
                else 
                {
                    console.log("User doesn't exists in the system")
                    res.json(null);         
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

}