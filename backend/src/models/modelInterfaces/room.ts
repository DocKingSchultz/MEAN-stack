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
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
  length: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});