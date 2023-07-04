import { Door } from "./door";
import { Room } from "./room";

export class Sketch {
    constructor(
      public rooms: Room[] = [],
      public doors: Door[] = []
    ) {}
    

  }