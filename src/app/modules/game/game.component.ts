import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  @ViewChild('canvas', { static: false }) canvasElement!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;


  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    const canvas = this.canvasElement.nativeElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

    this.draw();
  }


  draw() {
    if (!this.ctx) return;

    // Limpiar el canvas
    this.ctx.clearRect(0, 0, 300, 600);

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 20; j++) {
        // Dibujar un rectángulo
        this.ctx.strokeStyle = 'blue';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect((30 * i), (30 * j), 30, 30);
      }
    }

  }

}

