import { Document } from "mongodb";
import { Schema } from "mongoose";

export interface Worker extends Document{
    name: string;
    lastname: string;
    email: string;
    specialty: string;
  }

export  const WorkerSchema: Schema<Worker> = new Schema({
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    specialty: {
      type: String,
      required: true,
    },
  });