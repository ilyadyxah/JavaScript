var chessBoard = {
    width: 10,
    height: 10,
    chessFigure: {},
}

var chessFigure = {
    chessBoard: {}
}

chessBoard.init = function () {
    this.elBoard = document.getElementById('board');
    for (var j = 0; j < this.height; j++) {
        for (var i = 0; i < this.width; i++) {
            var el = document.createElement('div');
            if (j > 0 && j < 9 && i > 0 && i < 9) {
                if ((j % 2 === 0  && i % 2 !== 0) || (j % 2 !== 0  && i % 2 === 0)) {
                    el.classList.add('cell','cell-black');
                }
                else {
                    el.classList.add('cell','cell-white');
                }
                this.elBoard.appendChild(el);
            }
            else {
                if (j === 0 || i === 9) {
                    el.classList.add('cell-transform');
                }
                if ((j === 0 || j === 9) && i > 0 && i < 9) {
                    el.classList.add('cell','cell-black');
                    switch (i) {
                        case 1:
                            el.innerText = 'A';
                            break;
                        case 2:
                            el.innerText = 'B';
                            break;
                        case 3:
                            el.innerText = 'C';
                            break;
                        case 4:
                            el.innerText = 'D';
                            break;
                        case 5:
                            el.innerText = 'E';
                            break;
                        case 6:
                            el.innerText = 'F';
                            break;
                        case 7:
                            el.innerText = 'G';
                            break;
                        case 8:
                            el.innerText = 'H';
                            break;
                    }
                    this.elBoard.appendChild(el);
                }
                else if((i === 0 || i === 9) && j > 0 && j < 9) {
                    el.classList.add('cell','cell-black');
                    el.innerText = 9 - j;
                    this.elBoard.appendChild(el);
                }
                else {
                    el.classList.add('cell', 'cell-black');
                    this.elBoard.appendChild(el);
                }
            }
        }
    }
}
chessBoard.init();

chessFigure.init = function() {
    for (var i = 1; i < 9; i++) {
        this.chessBoard.elBoard = document.getElementById('board').children[i + 10];
        switch (i) {
            case (1):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/ladia.svg');
                figureImg.setAttribute('alt', 'ladia');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (2):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/horse.svg');
                figureImg.setAttribute('alt', 'horse');
                figureImg.setAttribute('height', '60px');
                figureImg.setAttribute('width', '60px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (3):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/slon.svg');
                figureImg.setAttribute('alt', 'slon');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (4):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/queen.svg');
                figureImg.setAttribute('alt', 'queen');
                figureImg.setAttribute('height', '70px');
                figureImg.setAttribute('width', '70px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (5):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/king.svg');
                figureImg.setAttribute('alt', 'king');
                figureImg.setAttribute('height', '70px');
                figureImg.setAttribute('width', '70px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (6):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/slon.svg');
                figureImg.setAttribute('alt', 'slon');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (7):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/horse.svg');
                figureImg.setAttribute('alt', 'horse');
                figureImg.setAttribute('height', '60px');
                figureImg.setAttribute('width', '60px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (8):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/ladia.svg');
                figureImg.setAttribute('alt', 'ladia');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            default:
                break;
        }
    }
    for (var i = 1; i < 9; i++) {
        this.chessBoard.elBoard = document.getElementById('board').children[i + 20];
        var figureImg = document.createElement('img');
        figureImg.setAttribute('src', 'image/peshka.svg');
        figureImg.setAttribute('alt', 'peshka');
        figureImg.setAttribute('height', '80px');
        figureImg.setAttribute('width', '80px');
        this.chessBoard.elBoard.appendChild(figureImg);
    }




    for (var i = 1; i < 9; i++) {
        this.chessBoard.elBoard = document.getElementById('board').children[i + 80];
        switch (i) {
            case (1):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/ladia.svg');
                figureImg.setAttribute('alt', 'ladia');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (2):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/horse.svg');
                figureImg.setAttribute('alt', 'horse');
                figureImg.setAttribute('height', '60px');
                figureImg.setAttribute('width', '60px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (3):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/slon.svg');
                figureImg.setAttribute('alt', 'slon');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (4):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/queen.svg');
                figureImg.setAttribute('alt', 'queen');
                figureImg.setAttribute('height', '70px');
                figureImg.setAttribute('width', '70px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (5):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/king.svg');
                figureImg.setAttribute('alt', 'king');
                figureImg.setAttribute('height', '70px');
                figureImg.setAttribute('width', '70px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (6):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/slon.svg');
                figureImg.setAttribute('alt', 'slon');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (7):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/horse.svg');
                figureImg.setAttribute('alt', 'horse');
                figureImg.setAttribute('height', '60px');
                figureImg.setAttribute('width', '60px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            case (8):
                var figureImg = document.createElement('img');
                figureImg.setAttribute('src', 'image/ladia.svg');
                figureImg.setAttribute('alt', 'ladia');
                figureImg.setAttribute('height', '80px');
                figureImg.setAttribute('width', '80px');
                figureImg.setAttribute('filter', 'invert(100%');
                figureImg.classList.add('cell-filter');
                this.chessBoard.elBoard.appendChild(figureImg);
                break;
            default:
                break;
        }
    }
    for (var i = 1; i < 9; i++) {
        this.chessBoard.elBoard = document.getElementById('board').children[i + 70];
        var figureImg = document.createElement('img');
        figureImg.setAttribute('src', 'image/peshka.svg');
        figureImg.setAttribute('alt', 'peshka');
        figureImg.setAttribute('height', '80px');
        figureImg.setAttribute('width', '80px');
        figureImg.setAttribute('filter', 'invert(100%');
        figureImg.classList.add('cell-filter');
        this.chessBoard.elBoard.appendChild(figureImg);
    }
}

chessFigure.init();