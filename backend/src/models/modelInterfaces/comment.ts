import { Document } from "mongodb";
import { Schema } from "mongoose";

export interface Comment extends Document{
    usernameOfUser: string;
    nameOfUser: string;
    lastnameOfUser: string;
    mark: number;
    description:string;
  }

  export const CommentSchema: Schema<Comment> = new Schema({
    usernameOfUser: {
      type: String,
      required: true,
    },
    nameOfUser: {
      type: String,
      required: true,
    },
    lastnameOfUser: String,
    mark: {
      type: Number,
      required: true,
    },
    description:{
      type:String,
      required:false,
    }
  });