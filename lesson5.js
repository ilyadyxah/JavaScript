var chessBoard = {
    width: 10,
    height: 10,
    chessFigure: {},
}

var chessFigure = {
    peshkaWhiteCoords1: {
        x: 2,
        y: 3
    }
}

chessBoard.init = function () {
    this.el = document.getElementById('board');
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
                    this.el.appendChild(el);
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
                    this.el.appendChild(el);
                }
                else if((i === 0 || i === 9) && j > 0 && j < 9) {
                    el.classList.add('cell','cell-black');
                    el.innerText = 9 - j;
                    this.el.appendChild(el);
                }
                else {
                    el.classList.add('cell', 'cell-black');
                    this.el.appendChild(el);
                }
                }
            }
        }
    }

chessFigure
chessBoard.init();
