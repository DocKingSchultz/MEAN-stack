import { ObjectInfo } from "./objeinfo";
import { User } from "./user";

export class Job {
    constructor(
      public object: ObjectInfo = new ObjectInfo(),
      public startDate: Date = new Date(),
      public endDate: Date = new Date(),
      //'requested' | 'active' | 'finished' | 'rejected';
      public status: string = 'requested',
      public cost: number = 0,
      public workers: Worker[] = [],
      public _id:number=0,
      public agencyUsername:string=""
    ) {}
  }