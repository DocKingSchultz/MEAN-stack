import { Request, Response } from "express";

export function onFileupload(req:Request, res: Response) {

    let file = req['files'].thumbnail;
  
    console.log("File uploaded: ", file.name);
    
  }