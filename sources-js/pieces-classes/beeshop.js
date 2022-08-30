import {Piece} from './piece';

export class Beeshop extends Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        super(color,type, chessboard, positionX, positionY);
    }
    defineMoves () {
        let potentialMoveX;
        let potentialMoveY;
        for (let horisontalDirection = -1; horisontalDirection <= 1; horisontalDirection +=2) {
            for (let verticalDirection = -1; verticalDirection <= 1; verticalDirection +=2) {
                for (let shift = 1; shift < 7; shift++) {
                    potentialMoveX = this.positionX + shift * horisontalDirection;
                    potentialMoveY = this.positionY + shift * verticalDirection;
                    if (potentialMoveX > 7 ||
                        potentialMoveX < 0 ||
                        potentialMoveY > 7 ||
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
}