import mongoose from 'mongoose'
import {Comment, CommentSchema}  from './modelInterfaces/comment'
import { ObjectInfo, ObjectInfoSchema } from './modelInterfaces/objectinfo';
import { Job, JobSchema } from './modelInterfaces/job';
import { Document } from 'mongodb';
const Schema = mongoose.Schema;

interface User extends Document {
  username: string;
  password: string;
  passwordConfirmed: string;
  type: string;
  name: string;
  lastname?: string;
  address?: string;
  email: string;
  phone: number;
  picture?: string;
  mnumber?: number;
  description?: string;
  status: string;
  objects: ObjectInfo[];
  agencyComments: Comment[];
  clientJobs: Job[];
  workers: number;
}

const User = new Schema<User>({
    username: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      passwordConfirmed: {
        type: String,
        required: true,
      },
      type: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      lastname: {
        type: String,
      },
      address: {
        type: String,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: Number,
        required: true,
      },
      picture: {
        type: String,
      },
      mnumber: {
        type: Number,
      },
      description: {
        type: String,
      },
      status: {
        type: String,
        required: true,
      },
      objects: {
        type: [ObjectInfoSchema],
        default: [],
      },
      agencyWorkPictures: {
        type: [String],
        default: [],
      },
      agencyComments: {
        type: [CommentSchema],
        default: [],
      },
      clientJobs: {
        type: [JobSchema],
        default: [],
      },
      workers: {
        type: Number,
      },
    });

export default mongoose.model('User', User, 'user');