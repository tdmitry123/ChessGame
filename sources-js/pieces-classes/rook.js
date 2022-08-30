import {Piece} from './piece';

export class Rook extends Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        super(color,type, chessboard, positionX, positionY);
    }
    defineMoves () {
        let potentialMoveX;
        let potentialMoveY;
        for (let horisontalDirection = -1; horisontalDirection <= 1; horisontalDirection +=2) {
            potentialMoveY = this.positionY;
            for (let shiftX = 1; shiftX < 7; shiftX++) {
                potentialMoveX = this.positionX + shiftX * horisontalDirection;
                if (potentialMoveX > 7 ||
                    potentialMoveX < 0 ||
                        (
                        !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                        this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']
                        )
                    ) {break;}
                this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
                if (
                    (
                    !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                    !(this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color'])
                    )
                    ) {break;}
            }
        }
        for (let verticalDirection = -1; verticalDirection <= 1; verticalDirection +=2) {
            potentialMoveX = this.positionX;
            for (let shiftY = 1; shiftY < 7; shiftY++) {
                potentialMoveY = this.positionY + shiftY * verticalDirection;
                if (potentialMoveY > 7 ||
                    potentialMoveY < 0 ||
                        (
                        !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                        this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']
                        )
                    ) {break;}
                this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
                if (
                    (
                    !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                    !(this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color'])
                    )
                    ) {break;}
            }
            
        }
    }
}