import { HttpClient } from '@angular/common/http';
import { HttpEventType } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Subscription, finalize } from 'rxjs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBar} from '@angular/material/progress-bar'
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent {

}
