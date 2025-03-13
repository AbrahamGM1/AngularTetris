import { Component, ElementRef, ViewChild } from '@angular/core';
import { ITetromino } from '../../models/itetromino';

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
  rows:number = 20;
  cols:number = 10;
  blockSize:number = 30;
  space:number = 2;
  board:number[][] = [];

  tetrominos:ITetromino[] = [
  {color:'blue',shape:[[1,1,1,1]]},
  {color:'orange',shape:[[1,1],[1,1]]},
  {color:'cyan',shape:[[1,1,1],[1,0,0]]},
  {color:'yellow',shape:[[0,1,0],[1,1,1]]},
  {color:'red',shape:[[0,1,1],[1,1,0]]},
  {color:'green',shape:[[1,1,0],[0,1,1]]},
]

  ngOnInit(): void {
    this.initBoard()
  }


  ngAfterViewInit(): void {
    const canvas = this.canvasElement.nativeElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.draw();
  }

  //Inicializa toda la matríz en 0, en este caso son 20 filas con 10 columnas donde cada una vale 0
  initBoard(){
    for (let row = 0; row < this.rows; row++) {
      this.board[row] = [];
      for (let column = 0; column < this.cols; column++) {
        this.board[row][column] = 0;        
      }
    }
  }

  drawBlock(x:number,y:number,size:number,background:string,border:string){
    //el tamaño del borde sera una decima parte del tamaño normal del bloque
    const borderSize = size / 10

    //dibujo del bloque
    this.ctx.fillStyle = background;
    this.ctx.fillRect(x,y,size,size);
    //Dibujo del borde del bloque
    this.ctx.strokeStyle = border;
    this.ctx.lineWidth = borderSize;
    this.ctx.strokeRect(x+borderSize/2,y+borderSize/2,size-borderSize,size-borderSize);
  }

  getPosition(col:number,row:number){
    //Va a devolver el valor calculado de la fila y columna ingresada en la matriz,
    //ejemplo si se va a dibujar un bloque en la fila 3 columna 7, calcula esta posicion con los tamaños del bloque
    //para dar la posicion exacta donde se encontrará el bloque
    return {
      x: col * (this.blockSize+this.space),
      y: row * (this.blockSize+this.space)
    }
  }

  draw() {
    for (let row = 0; row < this.rows; row++) {
      
      for (let col = 0; col < this.cols; col++) {
        //Le vamos pasando los valores de la matriz para que vaya calculando las posiciones de cada bloque
        const position = this.getPosition(col,row)
        this.drawBlock(position.x,position.y,this.blockSize,'indigo','aliceblue')
      }
      
    }
    this.printBoard();
  }

  printBoard(){
    //es una cadena que va a guardar tal cual todos los 0 de la matriz
    let content = "";
    this.board.forEach((row) =>{
      //al final de cada fila se agrega un caracter, en este caso un salto de linea
      content += row.join(" ") + "\n";
    });
    console.log(content)
  }


}

