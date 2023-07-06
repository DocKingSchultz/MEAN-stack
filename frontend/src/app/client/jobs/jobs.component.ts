import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
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


  pregled(id: number) {

    drawSketch(this.jobs[id].object.sketch.rooms, false, this.jobs[id].object.sketch.doors)
  }
  initializeVariables() {
    this.selectedStatus = "all"
    let user = localStorage.getItem("user")
    if (user != null) {
      this.usrServ.refreshUser(JSON.parse(user).username).subscribe((data: any) => {
        if (data) {
          this.user = data
          this.jobs = data.clientJobs
          this.filteredJobs = this.jobs
        }
      })
    }
  }
  prihvatiPosao(id: number) {

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
}


