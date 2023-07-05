import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ObjectInfo } from 'src/models/objeinfo';
import { Sketch } from 'src/models/sketch';

declare function validateJSON(jsonData:any):boolean
declare function drawSketch(rectangles:any, confirmBool:boolean, doors:any):void

@Component({
  selector: 'app-create-new-object',
  templateUrl: './create-new-object.component.html',
  styleUrls: ['./create-new-object.component.css']
})
export class CreateNewObjectComponent {

  constructor(private userServ:UserServiceService,private clServ: ClientService, private rutr: Router) {

  }
  ngOnInit() {
    this.obj = new ObjectInfo();
  }
  obj: ObjectInfo;
  selectedFile: File;


  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createObject() {
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
          if (this.obj.roomCnt <= 3 || this.obj.roomCnt > 0) {
            let user = localStorage.getItem("user")
            if (user != null) {
              this.obj.sketch.rooms = jsonData.rooms;
              this.obj.sketch.doors = jsonData.doors;
              for(let i=0;i<this.obj.sketch.rooms.length;i++)
              {
                this.obj.sketch.rooms[i].color="white"
              }
              this.clServ.addNewOjbect(this.obj, JSON.parse(user).username).subscribe((data: any) => {
                if (data) {
                  drawSketch(this.obj.sketch.rooms, true, this.obj.sketch.doors)
                  if(user!=null){
                  this.userServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
                    if(data)
                    {
                      localStorage.setItem("user", JSON.parse(data))

                    }
                  })
                }
                else
                {
                  alert("Objekat neuspesno ubacen")
                }
                }
                
                else alert("Objekat neuspesno ubacen")
              })
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
  }
}
