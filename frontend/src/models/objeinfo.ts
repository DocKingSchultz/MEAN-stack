import { Sketch } from "./sketch";

export class ObjectInfo {
    constructor(
      public type: string = '',
      public address: string = '',
      public roomCnt: number = 0,
      public sqMetersNumber: number = 0,
      public sketch: Sketch = new Sketch(),
      public status: string = ''
    ) {}
  }