import {Chessboard} from './chessboard';


window.onload = function () {
    window.chessboard = new Chessboard (document.querySelector('.chess'));
    chessboard.createHTMLboard();
    chessboard.loadPosition(chessboard.initialPosition);
}