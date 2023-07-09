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
declare function validateJSON(jsonData:any):boolean

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.css']
})
export class ObjectsComponent {

  constructor(private userServ:UserServiceService, private cl:ClientService, private ruter:Router)
  {
    this.changeObjectFormActive = false;
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
  ngOnInit():void
  {
    this.changeObjectFormActive = false;
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
  selectedFile: File;
  changedId:number
  changeObjectFormActive = false;
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
  updateObject()
  {
    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        try {
          const jsonData = JSON.parse(e.target.result);
          if(!validateJSON(jsonData))
          {
            alert("JSON fajl ne odgovara opisu !")
            return
          }
          if (this.changedObj.roomCnt <= 3 || this.changedObj.roomCnt > 0) {
            let user = localStorage.getItem("user")
            if (user != null) {
              if(jsonData.rooms.length == this.changedObj.roomCnt)
              {
                this.changedObj.sketch.rooms = jsonData.rooms;
                this.changedObj.sketch.doors = jsonData.doors;
                for(let i=0;i<this.changedObj.sketch.rooms.length;i++)
                {
                  this.changedObj.sketch.rooms[i].color="white"
                }
                this.objects[this.changedId]=this.changedObj
                this.user=JSON.parse(user)
                this.user.objects=this.objects
                this.userServ.updateUser(this.user).subscribe((data: any) => {
                  if(data)
                  {
                    alert("Objekat uspesno promenjen")
                  }
                  else
                  {
                    alert("Objekat neuspesno izmenjen")
                  }
                })
              }
              else
              {
                alert("Broj soba koje ste uneli i broj soba iz json fajla nisu isti!")
              }
            }
          }
          else {
            alert("Broj prostorija mora biti izmedju 1 i 3")
          }
          console.log(jsonData);
        } catch (error) {
          alert("Fajl nije u JSON formatu")
          console.error('Error parsing JSON file:', error);
        }
      };
      fileReader.readAsText(this.selectedFile);
    }
    else
    {
      if (this.changedObj.roomCnt <= 3 || this.changedObj.roomCnt > 0) {
        let user = localStorage.getItem("user")
        if (user != null) {
          for(let i=0;i<this.changedObj.sketch.rooms.length;i++)
          {
            this.changedObj.sketch.rooms[i].color="white"
          }
          this.objects[this.changedId]=this.changedObj
          this.user=JSON.parse(user)
          this.user.objects=this.objects
          this.userServ.updateUser(this.user).subscribe((data: any) => {
            if(data)
            { 
              if(user!=null){
                this.userServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
                  if(data)
                  {
                    alert("Objekat uspesno izmenjen")
                    localStorage.setItem("user", JSON.stringify(data))
                  }
                })
              }
            }
            else
            {
              alert("Objekat neuspesno izmenjen")
            }
          })
        }
      }
      else {
        alert("Broj prostorija mora biti izmedju 1 i 3")
      }
    }
  }
  pregled(id:number) {

    drawSketch(this.objects[id].sketch.rooms, false, this.objects[id].sketch.doors)
  }

  izmeni(id:number) {
    this.changeObjectFormActive = true;
    this.changedObj=this.objects[id];
    this.changedId=id
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




