import {Piece} from './piece';

export class Pawn extends Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        super(color,type, chessboard, positionX, positionY);
    }
    defineMoves () {
        let potentialMoveX = this.positionX;
        let potentialMoveY;
        //ход вперед (не рубит)
        let maxMove;
        let vertical;
        if (
            this.positionY == 1 && this.color == 'white' || 
            this.positionY == 6 && this.color == 'black'
            ) 
            {maxMove = 2;}
        else {maxMove = 1;} 
        for (vertical = 1; vertical <=maxMove; vertical++) {
            if (this.color == 'white') {potentialMoveY = this.positionY + vertical;}
            if (this.color == 'black') {potentialMoveY = this.positionY - vertical;}
            
            if (!(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null)) {break;}
            this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
        }
        //срубить фигуру
        vertical = 1;
        if (this.color == 'white') {potentialMoveY = this.positionY + vertical;}
        if (this.color == 'black') {potentialMoveY = this.positionY - vertical;}
        for (let shiftX = -1; shiftX <= 1; shiftX +=2) {
            potentialMoveX = this.positionX + shiftX;
            if (potentialMoveY > 7 ||
                potentialMoveY < 0 ||
                potentialMoveX > 7 ||
                potentialMoveX < 0 ||
                this['chessboard']['board'][potentialMoveX][potentialMoveY] == null ||
                this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']
                ) {continue;}
            this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
        }
    }
}