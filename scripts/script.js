(()=>{"use strict";var __webpack_modules__={461:()=>{eval("\n;// CONCATENATED MODULE: ./sources-js/pieces-classes/piece.js\nclass Piece {\r\n    constructor (color, type, chessboard, positionX, positionY) {\r\n        this.color = color;\r\n        this.type = type;\r\n        this.img = 'url(img/pieces/' + type.toLowerCase() + '_' + color +'.svg)';\r\n        this.chessboard = chessboard;\r\n        this.positionX = positionX;\r\n        this.positionY = positionY;\r\n    }\r\n    \r\n}\n;// CONCATENATED MODULE: ./sources-js/pieces-classes/pawn.js\n\r\n\r\nclass Pawn extends Piece {\r\n    constructor (color, type, chessboard, positionX, positionY) {\r\n        super(color,type, chessboard, positionX, positionY);\r\n    }\r\n    defineMoves () {\r\n        let potentialMoveX = this.positionX;\r\n        let potentialMoveY;\r\n        //ход вперед (не рубит)\r\n        let maxMove;\r\n        let vertical;\r\n        if (\r\n            this.positionY == 1 && this.color == 'white' || \r\n            this.positionY == 6 && this.color == 'black'\r\n            ) \r\n            {maxMove = 2;}\r\n        else {maxMove = 1;} \r\n        for (vertical = 1; vertical <=maxMove; vertical++) {\r\n            if (this.color == 'white') {potentialMoveY = this.positionY + vertical;}\r\n            if (this.color == 'black') {potentialMoveY = this.positionY - vertical;}\r\n            \r\n            if (!(this['chessboard']['board'][potentialMoveX][potentialMoveY] == null)) {break;}\r\n            this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  \r\n        }\r\n        //срубить фигуру\r\n        vertical = 1;\r\n        if (this.color == 'white') {potentialMoveY = this.positionY + vertical;}\r\n        if (this.color == 'black') {potentialMoveY = this.positionY - vertical;}\r\n        for (let shiftX = -1; shiftX <= 1; shiftX +=2) {\r\n            potentialMoveX = this.positionX + shiftX;\r\n            if (potentialMoveY > 7 ||\r\n                potentialMoveY < 0 ||\r\n                potentialMoveX > 7 ||\r\n                potentialMoveX < 0 ||\r\n                this['chessboard']['board'][potentialMoveX][potentialMoveY] == null ||\r\n                this.color == this['chessboard']['board'][potentialMoveX][potentialMoveY]['color']\r\n                ) {continue;}\r\n            this.chessboard.possibleMoves.push([potentialMoveX, potentialMoveY]);  \r\n        }\r\n    }\r\n}\n;// CONCATENATED MODULE: ./sources-js/chessboard.js\n\r\n\r\n\r\nclass Chessboard {\r\n    constructor (targetNode) {\r\n        this.initialPosition = [\r\n            //whites\r\n            {piece: \"pawn\", color: 'white', positionX: 0, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 1, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 2, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 3, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 4, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 5, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 6, positionY: 1},\r\n            {piece: \"pawn\", color: 'white', positionX: 7, positionY: 1},\r\n            {piece: \"rook\", color: 'white', positionX: 0, positionY: 0},\r\n            {piece: \"knight\", color: 'white', positionX: 1, positionY: 0},\r\n            {piece: \"beeshop\", color: 'white', positionX: 2, positionY: 0},\r\n            {piece: \"king\", color: 'white', positionX: 3, positionY: 0},\r\n            {piece: \"queen\", color: 'white', positionX: 4, positionY: 0},\r\n            {piece: \"beeshop\", color: 'white', positionX: 5, positionY: 0},\r\n            {piece: \"knight\", color: 'white', positionX: 6, positionY: 0},\r\n            {piece: \"rook\", color: 'white', positionX: 7, positionY: 0},\r\n            //blacks\r\n            {piece: \"pawn\", color: 'black', positionX: 0, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 1, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 2, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 3, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 4, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 5, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 6, positionY: 6},\r\n            {piece: \"pawn\", color: 'black', positionX: 7, positionY: 6},\r\n            {piece: \"rook\", color: 'black', positionX: 0, positionY: 7},\r\n            {piece: \"knight\", color: 'black', positionX: 1, positionY: 7},\r\n            {piece: \"beeshop\", color: 'black', positionX: 2, positionY: 7},\r\n            {piece: \"king\", color: 'black', positionX: 3, positionY: 7},\r\n            {piece: \"queen\", color: 'black', positionX: 4, positionY: 7},\r\n            {piece: \"beeshop\", color: 'black', positionX: 5, positionY: 7},\r\n            {piece: \"knight\", color: 'black', positionX: 6, positionY: 7},\r\n            {piece: \"rook\", color: 'black', positionX: 7, positionY: 7},\r\n            //--------------------------------------------------------------\r\n            {piece: \"queen\", color: 'black', positionX: 3, positionY: 2},\r\n            {piece: \"queen\", color: 'black', positionX: 3, positionY: 5},\r\n        ];\r\n        this.targetNode = targetNode;\r\n        this.turn = 'white'; \r\n        this.stage = \"select piece\"; //Возможные значения: select piece, select move\r\n        this.selectedPiece = null; \r\n        this.selectedPosition = null; //Возможные значения: null или массив позиции выбранной фигуры\r\n        this.possibleMoves = []; \r\n        this.board = []; \r\n        this.createBoard();\r\n    }\r\n\r\n    createBoard () {\r\n        \r\n        for (let row = 0; row < 8; row++ ) {\r\n            this.board.push([]);\r\n            let stripe = this['board'][row];\r\n            for (let column = 0; column < 8; column++) {\r\n                stripe.push(null);\r\n            }\r\n        }\r\n    }\r\n\r\n    createHTMLboard () {\r\n        let chessboard = document.createElement('div');\r\n        chessboard.classList.add('chessboard');\r\n        this.targetNode.appendChild(chessboard);\r\n        let chessboard__field = document.createElement('div');\r\n        chessboard__field.classList.add('chessboard__field');\r\n        chessboard.appendChild(chessboard__field);\r\n\r\n        for (let row = 0; row < 8; row++ ) {\r\n            for (let column = 0; column < 8; column++) {\r\n                let square = document.createElement('div');\r\n                \r\n                square.classList.add('chessboard__square');\r\n                let color = (row + column) % 2;\r\n                if (color == 0) {square.classList.add('chessboard__square_light');}\r\n                    else {square.classList.add('chessboard__square_dark');}\r\n                square.classList.add('position-' + column + '-' + row);\r\n                square.innerHTML = \" \";\r\n                square.positionX = column;\r\n                square.positionY  = row;\r\n                square.addEventListener('click', function clickSquare () {window.chessboard.handleClick(this.positionX, this.positionY);});\r\n                chessboard__field.appendChild(square);\r\n            }\r\n        }\r\n    }\r\n\r\n    handleClick (potentialMoveX, potentialMoveY) {\r\n        // Если выбрали свою фигуру\r\n        if (\r\n            (\r\n            !(this['board'][potentialMoveX][potentialMoveY] == null) &&\r\n            this.turn == this['board'][potentialMoveX][potentialMoveY]['color']\r\n            )\r\n            ) {\r\n            this.stage = 'select move';\r\n            if (this.selectedPosition != null) {\r\n                this.clearPossibleMoves();\r\n            }\r\n            this.selectedPosition = [potentialMoveX, potentialMoveY];\r\n            this['board'][potentialMoveX][potentialMoveY].defineMoves();\r\n            this.renderPossibleMoves();\r\n\r\n        }\r\n\r\n        //Если возможный ход\r\n        let isPossibleMove = false;\r\n        this.possibleMoves.forEach(function (index) {\r\n            if (index[0] == potentialMoveX && \r\n                index[1] == potentialMoveY) {\r\n                    isPossibleMove = true;\r\n                }\r\n        })\r\n        \r\n        if (isPossibleMove) {\r\n            this.clearPossibleMoves();\r\n            this.makeMove(potentialMoveX, potentialMoveY);\r\n            this.renderPosition();\r\n            if (this.turn == 'white') {\r\n                this.turn = 'black';\r\n            } else {\r\n                this.turn = 'white';\r\n            }\r\n        }\r\n\r\n    }\r\n\r\n    loadPosition (position) {\r\n        for (let index = 0, max = position.length; index < max; index++ ) {\r\n            let piece = position[index];\r\n            if (piece.piece && \r\n                piece.color && \r\n                piece.hasOwnProperty('positionX') && \r\n                piece.hasOwnProperty('positionY') &&\r\n                piece.positionX < 8 &&\r\n                piece.positionX >= 0 &&\r\n                piece.positionY < 8 &&\r\n                piece.positionY >= 0 \r\n                ) \r\n                {\r\n                    if (piece.piece == 'king') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                    if (piece.piece == 'pawn') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Pawn(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                    if (piece.piece == 'knight') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                    if (piece.piece == 'rook') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                    if (piece.piece == 'beeshop') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                    if (piece.piece == 'queen') {\r\n                        this['board'][piece.positionX][piece.positionY] = new Piece(piece.color, piece.piece, this, piece.positionX, piece.positionY);\r\n                    }\r\n                }\r\n            \r\n        }\r\n    }\r\n\r\n    renderPosition () {\r\n        for (let row = 0; row < 8; row++) {\r\n            for (let column = 0; column <8; column++) {\r\n                let square = document.querySelector(`.position-${row}-${column}`);\r\n                if (this['board'][row][column] != null &&\r\n                    this['board'][row][column].hasOwnProperty('img')\r\n                    ) {\r\n                    square.style.backgroundImage = this['board'][row][column]['img'];\r\n                    square.style.backgroundSize = 'cover';\r\n                }\r\n                else {\r\n                    square.style.backgroundImage = '';\r\n                    square.style.backgroundSize = '';\r\n                }\r\n            }\r\n        }\r\n        \r\n    }\r\n\r\n    clearPossibleMoves () {\r\n        for (let delPosition = 0; delPosition < this.possibleMoves.length; delPosition++) {\r\n            let square = document.querySelector(`.position-${this.possibleMoves[delPosition][0]}-${this.possibleMoves[delPosition][1]}`);\r\n            square.classList.remove('chessboard__possible-moves');\r\n        }\r\n        this.possibleMoves = [];\r\n        \r\n        let oldSelectedSquare = document.querySelector(`.position-${this.selectedPosition[0]}-${this.selectedPosition[1]}`);\r\n        oldSelectedSquare.classList.remove('chessboard__square_selected'); \r\n    }\r\n\r\n    renderPossibleMoves () {\r\n        let selectedSquare = document.querySelector(`.position-${this.selectedPosition[0]}-${this.selectedPosition[1]}`);\r\n        selectedSquare.classList.add('chessboard__square_selected');\r\n        for (let move = 0; move < this.possibleMoves.length; move++) {\r\n            let square = document.querySelector(`.position-${this.possibleMoves[move][0]}-${this.possibleMoves[move][1]}`);\r\n            square.classList.add('chessboard__possible-moves');\r\n        }\r\n    }\r\n\r\n    makeMove (moveToX, moveToY) {\r\n        this['board'][moveToX][moveToY] = this['board'][this.selectedPosition[0]][this.selectedPosition[1]];\r\n        this['board'][moveToX][moveToY]['positionX'] = moveToX;\r\n        this['board'][moveToX][moveToY]['positionY'] = moveToY;\r\n        //chessboard[moveToX][moveToY] = chessboard[positionX][positionY];\r\n        this['board'][this.selectedPosition[0]][this.selectedPosition[1]] = null;\r\n        console.log('nothing');\r\n    }\r\n    \r\n}\n;// CONCATENATED MODULE: ./sources-js/script.js\n\r\n\r\n\r\nwindow.onload = function () {\r\n    window.chessboard = new Chessboard (document.querySelector('.chess'));\r\n    chessboard.createHTMLboard();\r\n    chessboard.loadPosition(chessboard.initialPosition);\r\n    chessboard.renderPosition();\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OEUsS0FBSztBQUNuRjtBQUNBO0FBQ0EsOEVBQThFLEtBQUs7QUFDbkY7QUFDQTtBQUNBLDhFQUE4RSxLQUFLO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFNBQVM7QUFDbkMsaUNBQWlDLFdBQVc7QUFDNUMsaUVBQWlFLElBQUksR0FBRyxPQUFPO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHlDQUF5QztBQUMzRSw2REFBNkQsbUNBQW1DLEdBQUcsbUNBQW1DO0FBQ3RJO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLHlCQUF5QixHQUFHLHlCQUF5QjtBQUN6SDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRSx5QkFBeUIsR0FBRyx5QkFBeUI7QUFDdEg7QUFDQSwyQkFBMkIsa0NBQWtDO0FBQzdELDZEQUE2RCw0QkFBNEIsR0FBRyw0QkFBNEI7QUFDeEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOztBQ3ZOd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7QUFDdEM7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVzc2dhbWUvLi9zb3VyY2VzLWpzL3BpZWNlcy1jbGFzc2VzL3BpZWNlLmpzPzQwYWEiLCJ3ZWJwYWNrOi8vY2hlc3NnYW1lLy4vc291cmNlcy1qcy9waWVjZXMtY2xhc3Nlcy9wYXduLmpzP2Y1MDgiLCJ3ZWJwYWNrOi8vY2hlc3NnYW1lLy4vc291cmNlcy1qcy9jaGVzc2JvYXJkLmpzPzE5MzkiLCJ3ZWJwYWNrOi8vY2hlc3NnYW1lLy4vc291cmNlcy1qcy9zY3JpcHQuanM/NDdmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgUGllY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKGNvbG9yLCB0eXBlLCBjaGVzc2JvYXJkLCBwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuaW1nID0gJ3VybChpbWcvcGllY2VzLycgKyB0eXBlLnRvTG93ZXJDYXNlKCkgKyAnXycgKyBjb2xvciArJy5zdmcpJztcclxuICAgICAgICB0aGlzLmNoZXNzYm9hcmQgPSBjaGVzc2JvYXJkO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25YID0gcG9zaXRpb25YO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25ZID0gcG9zaXRpb25ZO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQge1BpZWNlfSBmcm9tICcuL3BpZWNlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXduIGV4dGVuZHMgUGllY2Uge1xyXG4gICAgY29uc3RydWN0b3IgKGNvbG9yLCB0eXBlLCBjaGVzc2JvYXJkLCBwb3NpdGlvblgsIHBvc2l0aW9uWSkge1xyXG4gICAgICAgIHN1cGVyKGNvbG9yLHR5cGUsIGNoZXNzYm9hcmQsIHBvc2l0aW9uWCwgcG9zaXRpb25ZKTtcclxuICAgIH1cclxuICAgIGRlZmluZU1vdmVzICgpIHtcclxuICAgICAgICBsZXQgcG90ZW50aWFsTW92ZVggPSB0aGlzLnBvc2l0aW9uWDtcclxuICAgICAgICBsZXQgcG90ZW50aWFsTW92ZVk7XHJcbiAgICAgICAgLy/RhdC+0LQg0LLQv9C10YDQtdC0ICjQvdC1INGA0YPQsdC40YIpXHJcbiAgICAgICAgbGV0IG1heE1vdmU7XHJcbiAgICAgICAgbGV0IHZlcnRpY2FsO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvblkgPT0gMSAmJiB0aGlzLmNvbG9yID09ICd3aGl0ZScgfHwgXHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb25ZID09IDYgJiYgdGhpcy5jb2xvciA9PSAnYmxhY2snXHJcbiAgICAgICAgICAgICkgXHJcbiAgICAgICAgICAgIHttYXhNb3ZlID0gMjt9XHJcbiAgICAgICAgZWxzZSB7bWF4TW92ZSA9IDE7fSBcclxuICAgICAgICBmb3IgKHZlcnRpY2FsID0gMTsgdmVydGljYWwgPD1tYXhNb3ZlOyB2ZXJ0aWNhbCsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbG9yID09ICd3aGl0ZScpIHtwb3RlbnRpYWxNb3ZlWSA9IHRoaXMucG9zaXRpb25ZICsgdmVydGljYWw7fVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb2xvciA9PSAnYmxhY2snKSB7cG90ZW50aWFsTW92ZVkgPSB0aGlzLnBvc2l0aW9uWSAtIHZlcnRpY2FsO31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICghKHRoaXNbJ2NoZXNzYm9hcmQnXVsnYm9hcmQnXVtwb3RlbnRpYWxNb3ZlWF1bcG90ZW50aWFsTW92ZVldID09IG51bGwpKSB7YnJlYWs7fVxyXG4gICAgICAgICAgICB0aGlzLmNoZXNzYm9hcmQucG9zc2libGVNb3Zlcy5wdXNoKFtwb3RlbnRpYWxNb3ZlWCwgcG90ZW50aWFsTW92ZVldKTsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvL9GB0YDRg9Cx0LjRgtGMINGE0LjQs9GD0YDRg1xyXG4gICAgICAgIHZlcnRpY2FsID0gMTtcclxuICAgICAgICBpZiAodGhpcy5jb2xvciA9PSAnd2hpdGUnKSB7cG90ZW50aWFsTW92ZVkgPSB0aGlzLnBvc2l0aW9uWSArIHZlcnRpY2FsO31cclxuICAgICAgICBpZiAodGhpcy5jb2xvciA9PSAnYmxhY2snKSB7cG90ZW50aWFsTW92ZVkgPSB0aGlzLnBvc2l0aW9uWSAtIHZlcnRpY2FsO31cclxuICAgICAgICBmb3IgKGxldCBzaGlmdFggPSAtMTsgc2hpZnRYIDw9IDE7IHNoaWZ0WCArPTIpIHtcclxuICAgICAgICAgICAgcG90ZW50aWFsTW92ZVggPSB0aGlzLnBvc2l0aW9uWCArIHNoaWZ0WDtcclxuICAgICAgICAgICAgaWYgKHBvdGVudGlhbE1vdmVZID4gNyB8fFxyXG4gICAgICAgICAgICAgICAgcG90ZW50aWFsTW92ZVkgPCAwIHx8XHJcbiAgICAgICAgICAgICAgICBwb3RlbnRpYWxNb3ZlWCA+IDcgfHxcclxuICAgICAgICAgICAgICAgIHBvdGVudGlhbE1vdmVYIDwgMCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpc1snY2hlc3Nib2FyZCddWydib2FyZCddW3BvdGVudGlhbE1vdmVYXVtwb3RlbnRpYWxNb3ZlWV0gPT0gbnVsbCB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9PSB0aGlzWydjaGVzc2JvYXJkJ11bJ2JvYXJkJ11bcG90ZW50aWFsTW92ZVhdW3BvdGVudGlhbE1vdmVZXVsnY29sb3InXVxyXG4gICAgICAgICAgICAgICAgKSB7Y29udGludWU7fVxyXG4gICAgICAgICAgICB0aGlzLmNoZXNzYm9hcmQucG9zc2libGVNb3Zlcy5wdXNoKFtwb3RlbnRpYWxNb3ZlWCwgcG90ZW50aWFsTW92ZVldKTsgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7UGllY2V9IGZyb20gJy4vcGllY2VzLWNsYXNzZXMvcGllY2UnO1xyXG5pbXBvcnQge1Bhd259IGZyb20gJy4vcGllY2VzLWNsYXNzZXMvcGF3bic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlc3Nib2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvciAodGFyZ2V0Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbFBvc2l0aW9uID0gW1xyXG4gICAgICAgICAgICAvL3doaXRlc1xyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiAxLCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiAyLCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiAzLCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA0LCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA1LCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA2LCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicGF3blwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA3LCBwb3NpdGlvblk6IDF9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwicm9va1wiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiAwLCBwb3NpdGlvblk6IDB9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwia25pZ2h0XCIsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvblg6IDEsIHBvc2l0aW9uWTogMH0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJiZWVzaG9wXCIsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvblg6IDIsIHBvc2l0aW9uWTogMH0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJraW5nXCIsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvblg6IDMsIHBvc2l0aW9uWTogMH0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJxdWVlblwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA0LCBwb3NpdGlvblk6IDB9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwiYmVlc2hvcFwiLCBjb2xvcjogJ3doaXRlJywgcG9zaXRpb25YOiA1LCBwb3NpdGlvblk6IDB9LFxyXG4gICAgICAgICAgICB7cGllY2U6IFwia25pZ2h0XCIsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvblg6IDYsIHBvc2l0aW9uWTogMH0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJyb29rXCIsIGNvbG9yOiAnd2hpdGUnLCBwb3NpdGlvblg6IDcsIHBvc2l0aW9uWTogMH0sXHJcbiAgICAgICAgICAgIC8vYmxhY2tzXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDEsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDIsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDMsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDQsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDUsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDYsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJwYXduXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDcsIHBvc2l0aW9uWTogNn0sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJyb29rXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDAsIHBvc2l0aW9uWTogN30sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJrbmlnaHRcIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogMSwgcG9zaXRpb25ZOiA3fSxcclxuICAgICAgICAgICAge3BpZWNlOiBcImJlZXNob3BcIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogMiwgcG9zaXRpb25ZOiA3fSxcclxuICAgICAgICAgICAge3BpZWNlOiBcImtpbmdcIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogMywgcG9zaXRpb25ZOiA3fSxcclxuICAgICAgICAgICAge3BpZWNlOiBcInF1ZWVuXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDQsIHBvc2l0aW9uWTogN30sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJiZWVzaG9wXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDUsIHBvc2l0aW9uWTogN30sXHJcbiAgICAgICAgICAgIHtwaWVjZTogXCJrbmlnaHRcIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogNiwgcG9zaXRpb25ZOiA3fSxcclxuICAgICAgICAgICAge3BpZWNlOiBcInJvb2tcIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogNywgcG9zaXRpb25ZOiA3fSxcclxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgICAgICAgICB7cGllY2U6IFwicXVlZW5cIiwgY29sb3I6ICdibGFjaycsIHBvc2l0aW9uWDogMywgcG9zaXRpb25ZOiAyfSxcclxuICAgICAgICAgICAge3BpZWNlOiBcInF1ZWVuXCIsIGNvbG9yOiAnYmxhY2snLCBwb3NpdGlvblg6IDMsIHBvc2l0aW9uWTogNX0sXHJcbiAgICAgICAgXTtcclxuICAgICAgICB0aGlzLnRhcmdldE5vZGUgPSB0YXJnZXROb2RlO1xyXG4gICAgICAgIHRoaXMudHVybiA9ICd3aGl0ZSc7IFxyXG4gICAgICAgIHRoaXMuc3RhZ2UgPSBcInNlbGVjdCBwaWVjZVwiOyAvL9CS0L7Qt9C80L7QttC90YvQtSDQt9C90LDRh9C10L3QuNGPOiBzZWxlY3QgcGllY2UsIHNlbGVjdCBtb3ZlXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBpZWNlID0gbnVsbDsgXHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFBvc2l0aW9uID0gbnVsbDsgLy/QktC+0LfQvNC+0LbQvdGL0LUg0LfQvdCw0YfQtdC90LjRjzogbnVsbCDQuNC70Lgg0LzQsNGB0YHQuNCyINC/0L7Qt9C40YbQuNC4INCy0YvQsdGA0LDQvdC90L7QuSDRhNC40LPRg9GA0YtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSBbXTsgXHJcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtdOyBcclxuICAgICAgICB0aGlzLmNyZWF0ZUJvYXJkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQm9hcmQgKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrICkge1xyXG4gICAgICAgICAgICB0aGlzLmJvYXJkLnB1c2goW10pO1xyXG4gICAgICAgICAgICBsZXQgc3RyaXBlID0gdGhpc1snYm9hcmQnXVtyb3ddO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCA4OyBjb2x1bW4rKykge1xyXG4gICAgICAgICAgICAgICAgc3RyaXBlLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlSFRNTGJvYXJkICgpIHtcclxuICAgICAgICBsZXQgY2hlc3Nib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNoZXNzYm9hcmQuY2xhc3NMaXN0LmFkZCgnY2hlc3Nib2FyZCcpO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0Tm9kZS5hcHBlbmRDaGlsZChjaGVzc2JvYXJkKTtcclxuICAgICAgICBsZXQgY2hlc3Nib2FyZF9fZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjaGVzc2JvYXJkX19maWVsZC5jbGFzc0xpc3QuYWRkKCdjaGVzc2JvYXJkX19maWVsZCcpO1xyXG4gICAgICAgIGNoZXNzYm9hcmQuYXBwZW5kQ2hpbGQoY2hlc3Nib2FyZF9fZmllbGQpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCA4OyByb3crKyApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgODsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NoZXNzYm9hcmRfX3NxdWFyZScpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gKHJvdyArIGNvbHVtbikgJSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yID09IDApIHtzcXVhcmUuY2xhc3NMaXN0LmFkZCgnY2hlc3Nib2FyZF9fc3F1YXJlX2xpZ2h0Jyk7fVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge3NxdWFyZS5jbGFzc0xpc3QuYWRkKCdjaGVzc2JvYXJkX19zcXVhcmVfZGFyaycpO31cclxuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKCdwb3NpdGlvbi0nICsgY29sdW1uICsgJy0nICsgcm93KTtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5pbm5lckhUTUwgPSBcIiBcIjtcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5wb3NpdGlvblggPSBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBzcXVhcmUucG9zaXRpb25ZICA9IHJvdztcclxuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIGNsaWNrU3F1YXJlICgpIHt3aW5kb3cuY2hlc3Nib2FyZC5oYW5kbGVDbGljayh0aGlzLnBvc2l0aW9uWCwgdGhpcy5wb3NpdGlvblkpO30pO1xyXG4gICAgICAgICAgICAgICAgY2hlc3Nib2FyZF9fZmllbGQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDbGljayAocG90ZW50aWFsTW92ZVgsIHBvdGVudGlhbE1vdmVZKSB7XHJcbiAgICAgICAgLy8g0JXRgdC70Lgg0LLRi9Cx0YDQsNC70Lgg0YHQstC+0Y4g0YTQuNCz0YPRgNGDXHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICEodGhpc1snYm9hcmQnXVtwb3RlbnRpYWxNb3ZlWF1bcG90ZW50aWFsTW92ZVldID09IG51bGwpICYmXHJcbiAgICAgICAgICAgIHRoaXMudHVybiA9PSB0aGlzWydib2FyZCddW3BvdGVudGlhbE1vdmVYXVtwb3RlbnRpYWxNb3ZlWV1bJ2NvbG9yJ11cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFnZSA9ICdzZWxlY3QgbW92ZSc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkUG9zaXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhclBvc3NpYmxlTW92ZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkUG9zaXRpb24gPSBbcG90ZW50aWFsTW92ZVgsIHBvdGVudGlhbE1vdmVZXTtcclxuICAgICAgICAgICAgdGhpc1snYm9hcmQnXVtwb3RlbnRpYWxNb3ZlWF1bcG90ZW50aWFsTW92ZVldLmRlZmluZU1vdmVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9zc2libGVNb3ZlcygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v0JXRgdC70Lgg0LLQvtC30LzQvtC20L3Ri9C5INGF0L7QtFxyXG4gICAgICAgIGxldCBpc1Bvc3NpYmxlTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9zc2libGVNb3Zlcy5mb3JFYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXhbMF0gPT0gcG90ZW50aWFsTW92ZVggJiYgXHJcbiAgICAgICAgICAgICAgICBpbmRleFsxXSA9PSBwb3RlbnRpYWxNb3ZlWSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzUG9zc2libGVNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChpc1Bvc3NpYmxlTW92ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyUG9zc2libGVNb3ZlcygpO1xyXG4gICAgICAgICAgICB0aGlzLm1ha2VNb3ZlKHBvdGVudGlhbE1vdmVYLCBwb3RlbnRpYWxNb3ZlWSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHVybiA9PSAnd2hpdGUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm4gPSAnYmxhY2snO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuID0gJ3doaXRlJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFBvc2l0aW9uIChwb3NpdGlvbikge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbWF4ID0gcG9zaXRpb24ubGVuZ3RoOyBpbmRleCA8IG1heDsgaW5kZXgrKyApIHtcclxuICAgICAgICAgICAgbGV0IHBpZWNlID0gcG9zaXRpb25baW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAocGllY2UucGllY2UgJiYgXHJcbiAgICAgICAgICAgICAgICBwaWVjZS5jb2xvciAmJiBcclxuICAgICAgICAgICAgICAgIHBpZWNlLmhhc093blByb3BlcnR5KCdwb3NpdGlvblgnKSAmJiBcclxuICAgICAgICAgICAgICAgIHBpZWNlLmhhc093blByb3BlcnR5KCdwb3NpdGlvblknKSAmJlxyXG4gICAgICAgICAgICAgICAgcGllY2UucG9zaXRpb25YIDwgOCAmJlxyXG4gICAgICAgICAgICAgICAgcGllY2UucG9zaXRpb25YID49IDAgJiZcclxuICAgICAgICAgICAgICAgIHBpZWNlLnBvc2l0aW9uWSA8IDggJiZcclxuICAgICAgICAgICAgICAgIHBpZWNlLnBvc2l0aW9uWSA+PSAwIFxyXG4gICAgICAgICAgICAgICAgKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UucGllY2UgPT0gJ2tpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbJ2JvYXJkJ11bcGllY2UucG9zaXRpb25YXVtwaWVjZS5wb3NpdGlvblldID0gbmV3IFBpZWNlKHBpZWNlLmNvbG9yLCBwaWVjZS5waWVjZSwgdGhpcywgcGllY2UucG9zaXRpb25YLCBwaWVjZS5wb3NpdGlvblkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGllY2UucGllY2UgPT0gJ3Bhd24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbJ2JvYXJkJ11bcGllY2UucG9zaXRpb25YXVtwaWVjZS5wb3NpdGlvblldID0gbmV3IFBhd24ocGllY2UuY29sb3IsIHBpZWNlLnBpZWNlLCB0aGlzLCBwaWVjZS5wb3NpdGlvblgsIHBpZWNlLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwaWVjZS5waWVjZSA9PSAna25pZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzWydib2FyZCddW3BpZWNlLnBvc2l0aW9uWF1bcGllY2UucG9zaXRpb25ZXSA9IG5ldyBQaWVjZShwaWVjZS5jb2xvciwgcGllY2UucGllY2UsIHRoaXMsIHBpZWNlLnBvc2l0aW9uWCwgcGllY2UucG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLnBpZWNlID09ICdyb29rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzWydib2FyZCddW3BpZWNlLnBvc2l0aW9uWF1bcGllY2UucG9zaXRpb25ZXSA9IG5ldyBQaWVjZShwaWVjZS5jb2xvciwgcGllY2UucGllY2UsIHRoaXMsIHBpZWNlLnBvc2l0aW9uWCwgcGllY2UucG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLnBpZWNlID09ICdiZWVzaG9wJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzWydib2FyZCddW3BpZWNlLnBvc2l0aW9uWF1bcGllY2UucG9zaXRpb25ZXSA9IG5ldyBQaWVjZShwaWVjZS5jb2xvciwgcGllY2UucGllY2UsIHRoaXMsIHBpZWNlLnBvc2l0aW9uWCwgcGllY2UucG9zaXRpb25ZKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBpZWNlLnBpZWNlID09ICdxdWVlbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1snYm9hcmQnXVtwaWVjZS5wb3NpdGlvblhdW3BpZWNlLnBvc2l0aW9uWV0gPSBuZXcgUGllY2UocGllY2UuY29sb3IsIHBpZWNlLnBpZWNlLCB0aGlzLCBwaWVjZS5wb3NpdGlvblgsIHBpZWNlLnBvc2l0aW9uWSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9zaXRpb24gKCkge1xyXG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IDg7IHJvdysrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8ODsgY29sdW1uKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucG9zaXRpb24tJHtyb3d9LSR7Y29sdW1ufWApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbJ2JvYXJkJ11bcm93XVtjb2x1bW5dICE9IG51bGwgJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzWydib2FyZCddW3Jvd11bY29sdW1uXS5oYXNPd25Qcm9wZXJ0eSgnaW1nJylcclxuICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gdGhpc1snYm9hcmQnXVtyb3ddW2NvbHVtbl1bJ2ltZyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgc3F1YXJlLnN0eWxlLmJhY2tncm91bmRTaXplID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJQb3NzaWJsZU1vdmVzICgpIHtcclxuICAgICAgICBmb3IgKGxldCBkZWxQb3NpdGlvbiA9IDA7IGRlbFBvc2l0aW9uIDwgdGhpcy5wb3NzaWJsZU1vdmVzLmxlbmd0aDsgZGVsUG9zaXRpb24rKykge1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvc2l0aW9uLSR7dGhpcy5wb3NzaWJsZU1vdmVzW2RlbFBvc2l0aW9uXVswXX0tJHt0aGlzLnBvc3NpYmxlTW92ZXNbZGVsUG9zaXRpb25dWzFdfWApO1xyXG4gICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LnJlbW92ZSgnY2hlc3Nib2FyZF9fcG9zc2libGUtbW92ZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IG9sZFNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvc2l0aW9uLSR7dGhpcy5zZWxlY3RlZFBvc2l0aW9uWzBdfS0ke3RoaXMuc2VsZWN0ZWRQb3NpdGlvblsxXX1gKTtcclxuICAgICAgICBvbGRTZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QucmVtb3ZlKCdjaGVzc2JvYXJkX19zcXVhcmVfc2VsZWN0ZWQnKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyUG9zc2libGVNb3ZlcyAoKSB7XHJcbiAgICAgICAgbGV0IHNlbGVjdGVkU3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvc2l0aW9uLSR7dGhpcy5zZWxlY3RlZFBvc2l0aW9uWzBdfS0ke3RoaXMuc2VsZWN0ZWRQb3NpdGlvblsxXX1gKTtcclxuICAgICAgICBzZWxlY3RlZFNxdWFyZS5jbGFzc0xpc3QuYWRkKCdjaGVzc2JvYXJkX19zcXVhcmVfc2VsZWN0ZWQnKTtcclxuICAgICAgICBmb3IgKGxldCBtb3ZlID0gMDsgbW92ZSA8IHRoaXMucG9zc2libGVNb3Zlcy5sZW5ndGg7IG1vdmUrKykge1xyXG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnBvc2l0aW9uLSR7dGhpcy5wb3NzaWJsZU1vdmVzW21vdmVdWzBdfS0ke3RoaXMucG9zc2libGVNb3Zlc1ttb3ZlXVsxXX1gKTtcclxuICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoJ2NoZXNzYm9hcmRfX3Bvc3NpYmxlLW1vdmVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2VNb3ZlIChtb3ZlVG9YLCBtb3ZlVG9ZKSB7XHJcbiAgICAgICAgdGhpc1snYm9hcmQnXVttb3ZlVG9YXVttb3ZlVG9ZXSA9IHRoaXNbJ2JvYXJkJ11bdGhpcy5zZWxlY3RlZFBvc2l0aW9uWzBdXVt0aGlzLnNlbGVjdGVkUG9zaXRpb25bMV1dO1xyXG4gICAgICAgIHRoaXNbJ2JvYXJkJ11bbW92ZVRvWF1bbW92ZVRvWV1bJ3Bvc2l0aW9uWCddID0gbW92ZVRvWDtcclxuICAgICAgICB0aGlzWydib2FyZCddW21vdmVUb1hdW21vdmVUb1ldWydwb3NpdGlvblknXSA9IG1vdmVUb1k7XHJcbiAgICAgICAgLy9jaGVzc2JvYXJkW21vdmVUb1hdW21vdmVUb1ldID0gY2hlc3Nib2FyZFtwb3NpdGlvblhdW3Bvc2l0aW9uWV07XHJcbiAgICAgICAgdGhpc1snYm9hcmQnXVt0aGlzLnNlbGVjdGVkUG9zaXRpb25bMF1dW3RoaXMuc2VsZWN0ZWRQb3NpdGlvblsxXV0gPSBudWxsO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdub3RoaW5nJyk7XHJcbiAgICB9XHJcbiAgICBcclxufSIsImltcG9ydCB7Q2hlc3Nib2FyZH0gZnJvbSAnLi9jaGVzc2JvYXJkJztcclxuXHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgd2luZG93LmNoZXNzYm9hcmQgPSBuZXcgQ2hlc3Nib2FyZCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZXNzJykpO1xyXG4gICAgY2hlc3Nib2FyZC5jcmVhdGVIVE1MYm9hcmQoKTtcclxuICAgIGNoZXNzYm9hcmQubG9hZFBvc2l0aW9uKGNoZXNzYm9hcmQuaW5pdGlhbFBvc2l0aW9uKTtcclxuICAgIGNoZXNzYm9hcmQucmVuZGVyUG9zaXRpb24oKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///461\n")}},__webpack_exports__={};__webpack_modules__[461]()})();