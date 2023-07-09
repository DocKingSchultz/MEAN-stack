import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/models/user';

declare function drawSketch(rectangles: any, confirmBool: boolean, doors: any): void

@Component({
  selector: 'app-agency-jobs',
  templateUrl: './agency-jobs.component.html',
  styleUrls: ['./agency-jobs.component.css']
})
export class AgencyJobsComponent {

  constructor(private ruter: Router, private usrServ: UserServiceService) {
    this.usrServ.getAllUsers().subscribe((data: any) => {
      if (data) {
        this.users = data;
        this.updateJobStateVisible = false
        let user = localStorage.getItem("user")
        if (user != null) {
          this.usrServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
            if (data) {
              this.userMe = data
            }
          })
        }
      }
      else alert("Greska pri dohvatanju svih korisnika na agency-jobs komponenti")
    })


  }
  users: User[] = []
  userMe: User;
  updateJobStateVisible = false;
  updateUserJobIndex: number
  updateClJobIndex: number

  azuriraj(userIndex: number, jobIndex: number) {
    this.updateJobStateVisible = true;
    this.updateUserJobIndex = userIndex
    this.updateClJobIndex = jobIndex
  }
  azuriranje() {
    this.usrServ.updateUser(this.users[this.updateUserJobIndex]).subscribe((data: any) => {
      if (data) {
        alert("Ponuda uspesno prosledjena")
        this.ruter.navigate(["agency-jobs"])
      }
      else alert("Ponuda neuspesno prosledjena")
    })
  }
  odbij(userIndex: number, jobIndex: number) {
    this.users[userIndex].clientJobs[jobIndex].status = "rejected"
    this.usrServ.updateUser(this.users[userIndex]).subscribe((data: any) => {
      if (data) {
        alert("Ponuda uspesno odbijena")
        this.users[userIndex].clientJobs.splice(jobIndex, 1)
        this.ruter.navigate(["agency-jobs"])
      }
      else alert("Ponuda neuspesno odbijena")
    })

  }
  posaljiPonudu(userIndex: number, jobIndex: number) {
    if (this.users[userIndex].clientJobs[jobIndex].cost != 0) {
      let job = this.users[userIndex].clientJobs[jobIndex]
      
      //Set room to yellow if not enough worklers
      //
      if (this.userMe.workers < job.workers || job.workers < job.object.roomCnt) {
        job.object.sketch.rooms.forEach(room => {
          room.color = "yellow"
        });
      }

      this.userMe.workers -= job.workers
      this.usrServ.updateUser(this.users[userIndex]).subscribe((data: any) => {
        if (data) {
          this.usrServ.updateUser(this.userMe).subscribe((data: any) => {
            if (data) {
    
              alert("Ponuda uspesno prosledjena")
              this.ruter.navigate(["agency-jobs"])
            }
            else alert("Ponuda neuspesno prosledjena")
          })
        }
        else alert("Ponuda neuspesno prosledjena")
      })
      
    }
    else alert("Nema nista za dzabe !")
  }
  pregled(userIndex: number, jobIndex: number) {

    drawSketch(this.users[userIndex].clientJobs[jobIndex].object.sketch.rooms, false, this.users[userIndex].clientJobs[jobIndex].object.sketch.doors)

  }
  getJobColor(status: string) {
    if (status == "active") return "green"
    return ""
  }
}
