import {Piece} from './piece';

export class Knight extends Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        super(color,type, chessboard, positionX, positionY);
    }
    defineMoves () {
        let potentialMoveX;
        let potentialMoveY;
        for (let horisontalDirection = -1; horisontalDirection <= 1; horisontalDirection += 2) {
            for (let verticalDirection = -1; verticalDirection <= 1; verticalDirection +=2) {
                for (let shiftX = 1; shiftX <=2; shiftX++) {
                    for (let shiftY = 1; shiftY <=2; shiftY++) {
                        potentialMoveX = this.positionX + shiftX * horisontalDirection;
                        potentialMoveY = this.positionY + shiftY * verticalDirection;
                        if (
                            shiftX == shiftY ||
                            potentialMoveX < 0 ||
                            potentialMoveX > 7 ||
                            potentialMoveY < 0 ||
                            potentialMoveY > 7 ||
                                (
                                !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                                this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']
                                )               
                            ) {continue;}
                            this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
                    }
                }
                
            }
        }
    }
}