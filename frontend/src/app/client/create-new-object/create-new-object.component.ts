import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ObjectInfo } from 'src/models/objeinfo';
import { Sketch } from 'src/models/sketch';

@Component({
  selector: 'app-create-new-object',
  templateUrl: './create-new-object.component.html',
  styleUrls: ['./create-new-object.component.css']
})
export class CreateNewObjectComponent {

  constructor(private clServ: ClientService, private rutr: Router) {

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

          if (this.obj.roomCnt <= 3 || this.obj.roomCnt > 0) {
            let user = localStorage.getItem("user")
            if (user != null) {
              alert(JSON.parse(user).username)
              this.obj.sketch.rooms = jsonData.rooms;
              this.obj.sketch.doors = jsonData.doors;
              this.clServ.addNewOjbect(this.obj, JSON.parse(user).username).subscribe((data: any) => {
                if (data) {
                  alert(JSON.stringify(data))
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
          console.error('Error parsing JSON file:', error);
        }
      };
      fileReader.readAsText(this.selectedFile);
    }
  }
}