import { ObjectInfo } from "./objeinfo";

export class Job {
    constructor(
      public object: ObjectInfo = new ObjectInfo(),
      public startDate: Date = new Date(),
      public endDate: Date = new Date(),
      //'requested' | 'active' | 'finished' | 'rejected';
      public status: string = 'requested',
      public cost: number = 0,
      public workers: number = 0,
      public _id:number=0,
      public agencyUsername:string="",
      public isAccepted:boolean=false
    ) {}
  }