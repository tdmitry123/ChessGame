import {Piece} from './piece';

export class King extends Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        super(color,type, chessboard, positionX, positionY);
    }
    defineMoves () {
        let potentialMoveX;
        let potentialMoveY;
        for (let horisontal = -1; horisontal <= 1; horisontal++) {
            for (let vertical = -1; vertical <= 1; vertical++) {
                potentialMoveX = this.positionX + horisontal;
                potentialMoveY = this.positionY + vertical;
                if (
                    (horisontal == 0 && vertical == 0) ||
                    potentialMoveX < 0 ||
                    potentialMoveX > 7 ||
                    potentialMoveY < 0 ||
                    potentialMoveY > 7 ||
                        (
                        !(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null) &&
                        this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']
                        )
                    ) {continue;};
                this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  
            }
        } 
    }
}