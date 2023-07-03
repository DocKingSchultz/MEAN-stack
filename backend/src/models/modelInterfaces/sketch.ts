import { Document } from "mongodb";
import { Door, DoorSchema } from "./door";
import { Room, RoomSchema } from "./room";
import { Schema } from "mongoose";

export interface Sketch extends Document {
    rooms: Room[];
    doors: Door[];
  }

export const SketchSchema: Schema<Sketch> = new Schema({
  rooms: {
    type: [RoomSchema],
    required: true,
  },
  doors: {
    type: [DoorSchema],
    required: true,
  },
});