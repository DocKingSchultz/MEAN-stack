import { Comment } from "./comment";
import { Job } from "./job";
import { ObjectInfo } from "./objeinfo";

export class User {
  constructor(
    public username: string = '',
    public password: string = '',
    public passwordConfirmed: string = '',
    public type: string = '',
    public name: string = '',
    public lastname: string = '',
    public address: string = '',
    public email: string = '',
    public phone: number = 0,
    public picture: string = '',
    public mnumber: number = 0,
    public description: string = '',
    public status: string = 'neaktivan',
    public objects: ObjectInfo[] = [],
    public agencyComments: Comment[] = [],
    public clientJobs: Job[] = [],
    public workers: number = 0
  ) {}
}
