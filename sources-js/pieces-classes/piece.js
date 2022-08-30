export class Piece {
    constructor (color, type, chessboard, positionX, positionY) {
        this.color = color;
        this.type = type;
        this.img = 'url(img/pieces/' + type.toLowerCase() + '_' + color +'.svg)';
        this.chessboard = chessboard;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    
}