import { IPosition } from "./iposition";
export interface ITetromino {
    id:number;
    blockSize:number;
    color:string;
    rotation:number;
    initPosition:IPosition;
    position:IPosition;
    shapes:IPosition[][];
}
