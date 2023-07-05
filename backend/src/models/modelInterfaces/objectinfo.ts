import { Document } from "mongodb";
import { Sketch, SketchSchema } from "./sketch";
import { Schema } from "mongoose";

export interface ObjectInfo  extends Document{
    type: string;
    address: string;
    roomCnt: number;
    sqMetersNumber: number;
    sketch: Sketch;
    status: string;
  }

export  const ObjectInfoSchema: Schema<ObjectInfo> = new Schema({
    type: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    roomCnt: {
      type: Number,
      required: true,
    },
    sqMetersNumber: {
      type: Number,
      required: true,
    },
    sketch: {
      type: SketchSchema,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  });