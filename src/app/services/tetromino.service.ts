import { Injectable } from '@angular/core';
import { ITetromino } from '../models/itetromino';
import { IPosition } from '../models/iposition';

@Injectable({
  providedIn: 'root'
})
export class TetrominoService {

  constructor() { }

    testPosition:IPosition = {
      row:0,
      column:3
    }

    T:ITetromino = {
      id:1,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:1},{row:1,column:0},{row:1,column:1},{row:1,column:2}],
        [{row:0,column:1},{row:1,column:1},{row:1,column:2},{row:2,column:1}],
        [{row:1,column:0},{row:1,column:1},{row:1,column:2},{row:2,column:1}],
        [{row:0,column:1},{row:1,column:0},{row:1,column:1},{row:2,column:1}]
      ]
    }
  
    O:ITetromino = {
      id:2,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:0},{row:0,column:1},{row:1,column:0},{row:1,column:1}],
        [{row:0,column:0},{row:0,column:1},{row:1,column:0},{row:1,column:1}],
        [{row:0,column:0},{row:0,column:1},{row:1,column:0},{row:1,column:1}],
        [{row:0,column:0},{row:0,column:1},{row:1,column:0},{row:1,column:1}],
      ]
    }
  
    L:ITetromino = {
      id:3,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:2},{row:1,column:0},{row:1,column:1},{row:1,column:2}],
        [{row:0,column:1},{row:1,column:1},{row:2,column:1},{row:2,column:2}],
        [{row:1,column:0},{row:1,column:1},{row:1,column:2},{row:2,column:0}],
        [{row:0,column:1},{row:0,column:1},{row:1,column:1},{row:2,column:1}]
      ]
    }
  
    I:ITetromino = {
      id:4,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:1,column:0},{row:1,column:1},{row:1,column:2},{row:1,column:3}],
        [{row:0,column:2},{row:1,column:2},{row:2,column:2},{row:3,column:1}],
        [{row:2,column:0},{row:2,column:1},{row:2,column:2},{row:2,column:3}],
        [{row:0,column:1},{row:1,column:1},{row:2,column:1},{row:3,column:1}]
      ]
    }
  
    J:ITetromino = {
      id:5,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:0},{row:1,column:0},{row:1,column:1},{row:1,column:2}],
        [{row:0,column:1},{row:0,column:2},{row:1,column:1},{row:2,column:1}],
        [{row:1,column:0},{row:1,column:1},{row:1,column:2},{row:2,column:2}],
        [{row:0,column:1},{row:1,column:1},{row:2,column:0},{row:2,column:1}]
      ]
    }
  
    S:ITetromino = {
      id:6,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:1},{row:0,column:2},{row:1,column:0},{row:1,column:1}],
        [{row:0,column:1},{row:1,column:1},{row:1,column:2},{row:2,column:2}],
        [{row:1,column:1},{row:1,column:2},{row:2,column:0},{row:2,column:1}],
        [{row:0,column:0},{row:1,column:0},{row:1,column:1},{row:2,column:1}]
      ]
    }
  
    Z:ITetromino = {
      id:6,
      blockSize:30,
      color:'blue',
      rotation:0,
      initPosition:this.testPosition,
      position:this.testPosition,
      shapes:[
        [{row:0,column:0},{row:0,column:1},{row:1,column:1},{row:1,column:2}],
        [{row:0,column:2},{row:1,column:1},{row:1,column:2},{row:2,column:1}],
        [{row:1,column:0},{row:1,column:1},{row:2,column:1},{row:2,column:2}],
        [{row:0,column:1},{row:1,column:0},{row:1,column:1},{row:2,column:0}]
      ]
    }

}
