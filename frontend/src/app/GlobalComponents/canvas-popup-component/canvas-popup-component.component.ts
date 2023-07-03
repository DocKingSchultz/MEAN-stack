import { Component, ElementRef, ViewChild } from '@angular/core';
import { Sketch } from 'src/models/sketch';

@Component({
  selector: 'app-canvas-popup-component',
  templateUrl: './canvas-popup-component.component.html',
  styleUrls: ['./canvas-popup-component.component.css']
})
export class CanvasPopupComponentComponent {
  @ViewChild('canvasElement', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  canvasOpen = false;
  ctx!: CanvasRenderingContext2D;

  openCanvas() {
    this.canvasOpen = true;
    if (!this.ctx || !(this.ctx instanceof CanvasRenderingContext2D)) {
      throw new Error('Failed to get 2D context');
  }
    // Perform any additional canvas setup or drawing here
  }

  closeCanvas() {
    this.canvasOpen = false;
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }

  drawRectangle(x: number, y: number, length: number, width: number) {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(x, y, length, width);
  }
  drawDoor(x: number, y: number) {
    this.ctx.fillStyle = 'brown';
    const doorSize = 10;
    this.ctx.fillRect(x, y, doorSize, doorSize);
  }
  drawSketch(sketch:Sketch)
  {
    // sketch.doors.forEach(door => {
    //   this.drawRectangle()
    // });
    sketch.rooms.forEach(room => {
      this.drawRectangle(room.x, room.y, room.length, room.width)
    });
  }
}
