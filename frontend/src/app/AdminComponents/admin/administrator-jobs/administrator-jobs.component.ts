import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

declare function drawSketch(rectangles: any, confirmBool: boolean, doors: any): void

@Component({
  selector: 'app-administrator-jobs',
  templateUrl: './administrator-jobs.component.html',
  styleUrls: ['./administrator-jobs.component.css']
})
export class AdministratorJobsComponent {
  constructor(private ruter: Router, private usrServ: UserServiceService) {
    this.usrServ.getAllUsers().subscribe((data: any) => {
      if (data) {
        this.users = data;
        let user = localStorage.getItem("user")
      }
      else alert("Greska pri dohvatanju svih korisnika na agency-jobs komponenti")
    })


  }
  users: User[] = []

  pregled(userIndex: number, jobIndex: number) {

    drawSketch(this.users[userIndex].clientJobs[jobIndex].object.sketch.rooms, false, this.users[userIndex].clientJobs[jobIndex].object.sketch.doors)

  }
}
