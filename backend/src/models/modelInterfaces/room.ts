import { Document } from "mongodb";
import { Schema } from "mongoose";

export interface Room extends Document {
    x: number;
    y: number;
    length: number;
    width: number;
    color:string;
  }
export const RoomSchema: Schema<Room> = new Schema({
  x: {
    type: Number
  },
  y: {
    type: Number
  },
  length: {
    type: Number
  },
  width: {
    type: Number
  },
  color: {
    type: String
  },
});