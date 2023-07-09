import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { Comment } from 'src/models/comment';
import { Job } from 'src/models/job';
import { User } from 'src/models/user';


declare function drawSketch(rectangles: any, confirmBool: boolean, doors: any): void

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  constructor(private usrServ: UserServiceService, private ruter: Router) {
    this.initializeVariables()
  }
  ngOnInit() {
    this.initializeVariables()
  }
  user: User
  jobs: Job[] = []
  selectedStatus: string = "all"
  filteredJobs: Job[] = []
  activeToPayJobsID: Job[] = []
  leaveCommentFormActive = false;
  indexSelectedJobToComment: number;
  comment: Comment;
  agencyCommented: User
  commetAlreadyExisted: boolean
  pregled(id: number) {

    drawSketch(this.filteredJobs[id].object.sketch.rooms, false, this.filteredJobs[id].object.sketch.doors)
  }
  initializeVariables() {
    this.selectedStatus = "all"
    this.leaveCommentFormActive = false
    this.comment = new Comment();
    let user = localStorage.getItem("user")
    if (user != null) {
      this.usrServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
        if (data) {
          this.user = data
          this.jobs = [...data.clientJobs]
          this.comment.usernameOfUser = this.user.username
          this.comment.nameOfUser = this.user.name;
          this.comment.lastnameOfUser = this.user.lastname
          this.filteredJobs = [...data.clientJobs]
          this.activeToPayJobsID = [...this.user.clientJobs];
        }
      })
    }

  }
  ubaciKomentar() {
    if (this.commetAlreadyExisted == false) {
      this.agencyCommented.agencyComments.push(this.comment)
    }
    else {
      this.agencyCommented.agencyComments.forEach((comEl,index) => {
        if (comEl.usernameOfUser == this.user.username) {
            this.agencyCommented.agencyComments[index]=this.comment    
        }

      });
    }
    this.usrServ.updateUser(this.agencyCommented).subscribe((data: any) => {
      if (data) {
        alert("Komentar uspesno uabcen")
        this.ruter.navigate(["agencies"])
      }
      else {
        alert("Nuespesno ubacivanje komentara")
      }
    })
  }
  prihvatiPosao(id: number) {
    let mongoID = this.filteredJobs[id]._id
    this.filteredJobs[id].status = "active";
    this.user.clientJobs.forEach((element, index) => {
      if (element._id == mongoID) {
        element.status = "active"
        this.usrServ.updateUser(this.user).subscribe((data: any) => {
          if (data) {
            alert("Posao prihvacen")
            this.ruter.navigate(["jobs"])
          }
          else {
            alert("Neuspsno prihvatanje posla")
          }
          return
        })
      }
    });
  }
  applyFilter() {
    if (this.selectedStatus) {
      this.filteredJobs = []
      this.jobs.forEach(job => {
        if (job.status == this.selectedStatus || job.status == "all") {
          this.filteredJobs.push(job)
        }
      });

    } else {
      this.filteredJobs = this.jobs;
    }
  }
  getJobColor(status: string): String {
    if (status == "active" || status == "finished") {
      return "green"
    }
    if (status == "rejected") return "red"

    return ""
  }
  checkIfactiveToPayJobsID(id: number) {
    for (let i = 0; i < this.filteredJobs[id].object.sketch.rooms.length; i++) {
      if (this.filteredJobs[id].object.sketch.rooms[i].color != "green") return false;
    }
    if (this.filteredJobs[id].status == "active") return true
    else return false;
  }

  ostaviKomentar(id: number) {
    this.leaveCommentFormActive = true;
    let mongoID = this.filteredJobs[id]._id
    this.commetAlreadyExisted = false;
    this.user.clientJobs.forEach((element, index) => {
      if (element._id == mongoID) {
        this.indexSelectedJobToComment = index
        this.usrServ.getAgencyByUsername(this.user.clientJobs[this.indexSelectedJobToComment].agencyUsername).subscribe((data: any) => {
          if (data) {
            this.agencyCommented = data;
            this.agencyCommented.agencyComments.forEach(comEl => {
              if (comEl.usernameOfUser == this.user.username) {
                this.comment.description = comEl.description
                this.comment.mark = comEl.mark
                this.commetAlreadyExisted = true;
                this.ruter.navigate(["jobs"])
              }
            });
          }
        })

      }
    });

  }

  plati(id: number) {
    let mongoID = this.filteredJobs[id]._id
    this.filteredJobs[id].status = "finished";
    this.user.clientJobs.forEach((element, index) => {
      if (element._id == mongoID) {
        element.status = "finished"
        alert("promenjen status")
        this.usrServ.updateUser(this.user).subscribe((data: any) => {
          if (data) {
            alert("Objekat uspesno isplacen")
            this.ruter.navigate(["jobs"])
          }
          else {
            alert("Objekat neuspesno isplacen")
          }
          return
        })
      }
    });
  }
}


