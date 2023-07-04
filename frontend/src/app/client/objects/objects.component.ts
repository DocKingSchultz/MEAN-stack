import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjectInfo } from 'src/models/objeinfo';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { Sketch } from 'src/models/sketch';
import { Room } from 'src/models/room';
import { Door } from 'src/models/door';
import { User } from 'src/models/user';
import { UserServiceService } from 'src/app/services/user-service.service';

declare function drawSketch(rectangles:any, confirmBool:boolean, doors:any):void

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {

  constructor(private userServ:UserServiceService, private cl:ClientService, private ruter:Router)
  {
    let user = localStorage.getItem("user")
    if(user!=null){
    this.cl.getAllObjects(JSON.parse(user).username).subscribe((data: any) => {
      if (data) {
        this.objects=data.objects
      }
      else alert("Objekti neuspesno dohvaceni")
    })
  }

  }
  objects:ObjectInfo[]=[];
  file:any
  changedObj:ObjectInfo;
  user:User;
  handleFileUpload(event: any, object: ObjectInfo) {
    const file = event.target.files[0];
    object.sketch = file;
  }

  pregled(id:number) {

    drawSketch(this.objects[id].sketch.rooms, false, this.objects[id].sketch.doors)
  }

  izmeni(id:number) {

  }

  obrisi(id: number) {
    this.objects.splice(id, 1);
    let user = localStorage.getItem("user")
    if(user!=null)
    {
      this.user = JSON.parse(user)
      this.user.objects=this.objects
      this.userServ.updateProfileInfo(this.user).subscribe((data: any) => {
        if(data)
        {
          console.log("Objekat obrisan")
        }
        else
        {
          alert("Objekat neuspesno izbrisan")
        }
      })
    }
  }
}




