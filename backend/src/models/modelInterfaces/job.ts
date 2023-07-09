import { ObjectInfo, ObjectInfoSchema } from "./objectinfo";
import { Document } from "mongodb";
import { Schema } from "mongoose";

export interface Job  extends Document{
    object: ObjectInfo;
    startDate: Date;
    endDate: Date;
    status: 'requested' | 'active' | 'finished' | 'rejected';
    cost: number;
    workers: number;
    agencyUsername:string
}
export  const JobSchema: Schema<Job> = new Schema({
    object: {
      type: ObjectInfoSchema,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['requested', 'active', 'finished', 'rejected'],
      required: true,
      default: 'requested',
    },
    cost: {
      type: Number,
      required: true,
    },
    workers: {
      type: Number
    },
    agencyUsername:{
      type:String
    }
  });