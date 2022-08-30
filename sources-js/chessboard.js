import {Piece} from './pieces-classes/piece';
import {Pawn} from './pieces-classes/pawn';
import {Beeshop} from './pieces-classes/beeshop';
import {Knight} from './pieces-classes/knight';
import {Rook} from './pieces-classes/rook';
import {King} from './pieces-classes/king';

export class Chessboard {
    constructor (targetNode) {
        this.initialPosition = [
            //whites
            {piece: "pawn", color: 'white', positionX: 0, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 1, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 2, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 3, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 4, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 5, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 6, positionY: 1},
            {piece: "pawn", color: 'white', positionX: 7, positionY: 1},
            {piece: "rook", color: 'white', positionX: 0, positionY: 0},
            {piece: "knight", color: 'white', positionX: 1, positionY: 0},
            {piece: "beeshop", color: 'white', positionX: 2, positionY: 0},
            {piece: "king", color: 'white', positionX: 3, positionY: 0},
            {piece: "queen", color: 'white', positionX: 4, positionY: 0},
            {piece: "beeshop", color: 'white', positionX: 5, positionY: 0},
            {piece: "knight", color: 'white', positionX: 6, positionY: 0},
            {piece: "rook", color: 'white', positionX: 7, positionY: 0},
            //blacks
            {piece: "pawn", color: 'black', positionX: 0, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 1, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 2, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 3, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 4, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 5, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 6, positionY: 6},
            {piece: "pawn", color: 'black', positionX: 7, positionY: 6},
            {piece: "rook", color: 'black', positionX: 0, positionY: 7},
            {piece: "knight", color: 'black', positionX: 1, positionY: 7},
            {piece: "beeshop", color: 'black', positionX: 2, positionY: 7},
            {piece: "king", color: 'black', positionX: 3, positionY: 7},
            {piece: "queen", color: 'black', positionX: 4, positionY: 7},
            {piece: "beeshop", color: 'black', positionX: 5, positionY: 7},
            {piece: "knight", color: 'black', positionX: 6, positionY: 7},
            {piece: "rook", color: 'black', positionX: 7, positionY: 7},
            //--------------------------------------------------------------
            {piece: "queen", color: 'black', positionX: 3, positionY: 2},
            {piece: "queen", color: 'black', positionX: 3, positionY: 5},
        ];
        this.targetNode = targetNode;
        this.turn = 'white'; 
        this.stage = "select piece"; //Возможные значения: select piece, select move
        this.selectedPiece = null; 
        this.selectedPosition = null; //Возможные значения: null или массив позиции выбранной фигуры
        this.possibleMoves = []; 
        this.board = []; 
        this.createBoard();
    }

    createBoard () {
        
        for (let row = 0; row < 8; row++ ) {
            this.board.push([]);
            let stripe = this['board'][row];
            for (let column = 0; column < 8; column++) {
                stripe.push(null);
            }
        }
    }

    createHTMLboard () {
        let chessboard = document.createElement('div');
        chessboard.classList.add('chessboard');
        this.targetNode.appendChild(chessboard);
        let chessboard__field = document.createElement('div');
        chessboard__field.classList.add('chessboard__field');
        chessboard.appendChild(chessboard__field);

        for (let row = 0; row < 8; row++ ) {
            for (let column = 0; column < 8; column++) {
                let square = document.createElement('div');
                
                square.classList.add('chessboard__square');
                let color = (row + column) % 2;
                if (color == 0) {square.classList.add('chessboard__square_light');}
                    else {square.classList.add('chessboard__square_dark');}
                square.classList.add('position-' + column + '-' + row);
                square.innerHTML = " ";
                square.positionX = column;
                square.positionY  = row;
                square.addEventListener('click', function clickSquare () {window.chessboard.handleClick(this.positionX, this.positionY);});
                chessboard__field.appendChild(square);
            }
        }
    }

    handleClick (potentialMoveX, potentialMoveY) {
        // Если выбрали свою фигуру
        if (
            (
            !(this['board'][potentialMoveX][potentialMoveY] == null) &&
            this.turn == this['board'][potentialMoveX][potentialMoveY]['color']
            )
            ) {
            this.stage = 'select move';
            if (this.selectedPosition != null) {
                this.clearPossibleMoves();
            }
            this.selectedPosition = [potentialMoveX, potentialMoveY];
            this['board'][potentialMoveX][potentialMoveY].defineMoves();
            this.renderPossibleMoves();

        }

        //Если возможный ход
        let isPossibleMove = false;
        this.possibleMoves.forEach(function (index) {
            if (index[0] == potentialMoveX && 
                index[1] == potentialMoveY) {
                    isPossibleMove = true;
                }
        })
        
        if (isPossibleMove) {
            this.clearPossibleMoves();
            this.makeMove(potentialMoveX, potentialMoveY);
            this.renderPosition();
            if (this.turn == 'white') {
                this.turn = 'black';
            } else {
                this.turn = 'white';
            }
        }

    }

    loadPosition (position) {
        for (let index = 0, max = position.length; index < max; index++ ) {
            let piece = position[index];
            if (piece.piece && 
                piece.color && 
                piece.hasOwnProperty('positionX') && 
                piece.hasOwnProperty('positionY') &&
                piece.positionX < 8 &&
                piece.positionX >= 0 &&
                piece.positionY < 8 &&
                piece.positionY >= 0 
                ) 
                {
                    if (piece.piece == 'king') {
                        this['board'][piece.positionX][piece.positionY] = new King(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                    if (piece.piece == 'pawn') {
                        this['board'][piece.positionX][piece.positionY] = new Pawn(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                    if (piece.piece == 'knight') {
                        this['board'][piece.positionX][piece.positionY] = new Knight(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                    if (piece.piece == 'rook') {
                        this['board'][piece.positionX][piece.positionY] = new Rook(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                    if (piece.piece == 'beeshop') {
                        this['board'][piece.positionX][piece.positionY] = new Beeshop(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                    if (piece.piece == 'queen') {
                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);
                    }
                }
            
        }
    }

    renderPosition () {
        for (let row = 0; row < 8; row++) {
            for (let column = 0; column <8; column++) {
                let square = document.querySelector(`.position-${row}-${column}`);
                if (this['board'][row][column] != null &&
                    this['board'][row][column].hasOwnProperty('img')
                    ) {
                    square.style.backgroundImage = this['board'][row][column]['img'];
                    square.style.backgroundSize = 'cover';
                }
                else {
                    square.style.backgroundImage = '';
                    square.style.backgroundSize = '';
                }
            }
        }
        
    }

    clearPossibleMoves () {
        for (let delPosition = 0; delPosition < this.possibleMoves.length; delPosition++) {
            let square = document.querySelector(`.position-${this.possibleMoves[delPosition][0]}-${this.possibleMoves[delPosition][1]}`);
            square.classList.remove('chessboard__possible-moves');
        }
        this.possibleMoves = [];
        
        let oldSelectedSquare = document.querySelector(`.position-${this.selectedPosition[0]}-${this.selectedPosition[1]}`);
        oldSelectedSquare.classList.remove('chessboard__square_selected'); 
    }

    renderPossibleMoves () {
        let selectedSquare = document.querySelector(`.position-${this.selectedPosition[0]}-${this.selectedPosition[1]}`);
        selectedSquare.classList.add('chessboard__square_selected');
        for (let move = 0; move < this.possibleMoves.length; move++) {
            let square = document.querySelector(`.position-${this.possibleMoves[move][0]}-${this.possibleMoves[move][1]}`);
            square.classList.add('chessboard__possible-moves');
        }
    }

    makeMove (moveToX, moveToY) {
        this['board'][moveToX][moveToY] = this['board'][this.selectedPosition[0]][this.selectedPosition[1]];
        this['board'][moveToX][moveToY]['positionX'] = moveToX;
        this['board'][moveToX][moveToY]['positionY'] = moveToY;
        this['board'][this.selectedPosition[0]][this.selectedPosition[1]] = null;
        console.log('nothing');
    }

}