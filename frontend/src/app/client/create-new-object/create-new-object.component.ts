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
    let jsonData;
    
    if (this.selectedFile) {
      const fileReader = new FileReader();
      fileReader.onload = (e: any) => {
        try {
          jsonData = JSON.parse(e.target.result);
          if (!validateJSON(jsonData)) {
            alert("JSON fajl ne odgovara opisu!");
            return;
          }
          this.processJsonData(jsonData);
        } catch (error) {
          alert("Fajl nije u JSON formatu");
          console.error('Error parsing JSON file:', error);
        }
      };
      fileReader.readAsText(this.selectedFile);
    } else {
      this.loadDefaultJson()
        .then((data) => {
          jsonData = data;
          this.processJsonData(jsonData);
        })
        .catch((error) => {
          console.error('Error loading default JSON file:', error);
          alert("Greška prilikom učitavanja podrazumevanog JSON fajla");
        });
    }
  }
  
  private loadDefaultJson(): Promise<any> {
    let defaultJsonFilePath ; // Provide the path to your default JSON file
    switch (this.obj.roomCnt){
      case 1:{
        defaultJsonFilePath="assets/Database/oneroomDefault.json"
        break
      }
      case 2:{
        defaultJsonFilePath="assets/Database/tworoomDefault.json"
        break
      }
      case 3:{
        defaultJsonFilePath="assets/Database/3r4d.json"
        break
      }
      default:{
          defaultJsonFilePath="assets/Database/3r4d.json"
      }
    }
    return fetch(defaultJsonFilePath)
      .then(response => response.json())
      .catch(error => Promise.reject(error));
  }
  
  private processJsonData(jsonData: any): void {
    if (this.obj.roomCnt <= 3 && this.obj.roomCnt > 0) {
      const user = localStorage.getItem("user");
      if (user != null) {
        if(jsonData.rooms.length == this.obj.roomCnt)
        {
          this.obj.sketch.rooms = jsonData.rooms;
          this.obj.sketch.doors = jsonData.doors;
          for (let i = 0; i < this.obj.sketch.rooms.length; i++) {
            this.obj.sketch.rooms[i].color = "white";
          }
          this.clServ.addNewOjbect(this.obj, JSON.parse(user).username).subscribe((data: any) => {
            if (data) {
              drawSketch(this.obj.sketch.rooms, true, this.obj.sketch.doors);
              if (user != null) {
                this.userServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
                  if (data) {
                    localStorage.setItem("user", JSON.stringify(data));
                    this.rutr.navigate(["objects"]);
                  }
                });
              } else {
                alert("Objekat neuspešno ubačen");
              }
            } else {
              alert("Objekat neuspešno ubačen");
            }
          });
        }
        else
        {
          alert("Broj soba koje ste uneli i broj soba iz json fajla nisu isti!")
        }
      }
    } else {
      alert("Broj prostorija mora biti između 1 i 3");
    }
  }
}
