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

    }


}