import { Document } from "mongodb";
import { Schema } from "mongoose";

export interface Door extends Document{
    x: number;
    y: number;
  }
export const DoorSchema: Schema<Door> = new Schema({
  x: {
    type: Number
  },
  y: {
    type: Number
  },
});