import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-registration-page',
  templateUrl: './choose-registration-page.component.html',
  styleUrls: ['./choose-registration-page.component.css']
})
export class ChooseRegistrationPageComponent {
  
  constructor(private rutr:Router)
  {

  }
  option:boolean;
  redirectToReg(option:boolean)
  {
   !option?this.rutr.navigate(['/registerClient']):this.rutr.navigate(['/registerAgency'])
  }
  
}
