(()=>{"use strict";class o{constructor(o,i,e,t,s){this.color=o,this.type=i,this.img="url(img/"+i.toLowerCase()+"_"+o+".svg)",this.chessboard=e,this.positionX=t,this.positionY=s}}class i{constructor(o){this.initialPosition=[{piece:"pawn",color:"white",positionX:0,positionY:1},{piece:"pawn",color:"white",positionX:1,positionY:1},{piece:"pawn",color:"white",positionX:2,positionY:1},{piece:"pawn",color:"white",positionX:3,positionY:1},{piece:"pawn",color:"white",positionX:4,positionY:1},{piece:"pawn",color:"white",positionX:5,positionY:1},{piece:"pawn",color:"white",positionX:6,positionY:1},{piece:"pawn",color:"white",positionX:7,positionY:1},{piece:"rook",color:"white",positionX:0,positionY:0},{piece:"knight",color:"white",positionX:1,positionY:0},{piece:"beeshop",color:"white",positionX:2,positionY:0},{piece:"king",color:"white",positionX:3,positionY:0},{piece:"queen",color:"white",positionX:4,positionY:0},{piece:"beeshop",color:"white",positionX:5,positionY:0},{piece:"knight",color:"white",positionX:6,positionY:0},{piece:"rook",color:"white",positionX:7,positionY:0},{piece:"pawn",color:"black",positionX:0,positionY:6},{piece:"pawn",color:"black",positionX:1,positionY:6},{piece:"pawn",color:"black",positionX:2,positionY:6},{piece:"pawn",color:"black",positionX:3,positionY:6},{piece:"pawn",color:"black",positionX:4,positionY:6},{piece:"pawn",color:"black",positionX:5,positionY:6},{piece:"pawn",color:"black",positionX:6,positionY:6},{piece:"pawn",color:"black",positionX:7,positionY:6},{piece:"rook",color:"black",positionX:0,positionY:7},{piece:"knight",color:"black",positionX:1,positionY:7},{piece:"beeshop",color:"black",positionX:2,positionY:7},{piece:"king",color:"black",positionX:3,positionY:7},{piece:"queen",color:"black",positionX:4,positionY:7},{piece:"beeshop",color:"black",positionX:5,positionY:7},{piece:"knight",color:"black",positionX:6,positionY:7},{piece:"rook",color:"black",positionX:7,positionY:7},{piece:"queen",color:"black",positionX:3,positionY:2},{piece:"queen",color:"black",positionX:3,positionY:5}],this.targetNode=o,this.turn="white",this.stage="select piece",this.selectedPiece=null,this.selectedPosition=null,this.possibleMoves=[],this.board=[],this.createBoard()}createBoard(){for(let o=0;o<8;o++){this.board.push([]);let i=this.board[o];for(let o=0;o<8;o++)i.push(null)}}createHTMLboard(){let o=document.createElement("div");o.classList.add("chessboard"),this.targetNode.appendChild(o);let i=document.createElement("div");i.classList.add("chessboard__field"),o.appendChild(i);for(let o=0;o<8;o++)for(let e=0;e<8;e++){let t=document.createElement("div");t.classList.add("chessboard__square"),0==(o+e)%2?t.classList.add("chessboard__square_light"):t.classList.add("chessboard__square_dark"),t.classList.add("position-"+e+"-"+o),t.innerHTML=" ",t.positionX=e,t.positionY=o,t.addEventListener("click",(function(){window.chessboard.handleClick(this.positionX,this.positionY)})),i.appendChild(t)}}handleClick(o,i){}loadPosition(i){for(let e=0,t=i.length;e<t;e++){let t=i[e];t.piece&&t.color&&t.hasOwnProperty("positionX")&&t.hasOwnProperty("positionY")&&t.positionX<8&&t.positionX>=0&&t.positionY<8&&t.positionY>=0&&("king"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)),"pawn"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)),"knight"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)),"rook"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)),"beeshop"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)),"queen"==t.piece&&(this.board[t.positionX][t.positionY]=new o(t.color,t.piece,this,t.positionX,t.positionY)))}}}window.onload=function(){window.chessboard=new i(document.querySelector(".chess")),chessboard.createHTMLboard(),chessboard.loadPosition(chessboard.initialPosition)}})();