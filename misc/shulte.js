var appData =  {
    gridSize: 5,
    gridRange: [0, 1, 2, 3, 4],
    cells: [],
    trace: [],
    currNum: 1,

    hoverIndex: -1,
    selectIndex: -1,
    correctIndex: -1,

    showHover: true,
    showSelect: true,
    showTrace: true,

    rowHeight: '20%',
    colWidth: '20%',
    selectTimeOut: 500,
    selectedTimerId: -1
};

new Vue ({
    el: '#app',
    data: appData,
    created: function () {
        this.initGame();
    },
    watch: {
       gridSize: function (val) {
           if (isNaN(parseInt(val))) {
               this.gridSize = 2; // recursion !!!
               return;
           }
           this.gridRange = this.makeRange(0, val - 1);
           this.rowHeight = 100/val + '%';
           this.colWidth = 100/val + '%';

           this.initGame();
       }
    },
    computed: {
       selectedCell: {
           get: function () {
               return this.selectIndex;
           },
           set: function (cellIdx) {
               this.selectIndex = cellIdx;
               this.showSelect = true;
               clearTimeout(this.selectedTimerId);
               this.selectedTimerId = setTimeout(this.hideSelect, this.selectTimeOut);
               this.nextTurn();
               //console.log('selectedCell: ' + this.selectIndex);
           }
       },
       hoveredCell: {
            get: function () {
                return this.hoverIndex;
            },
            set: function (cellIdx) {
                this.hoverIndex = cellIdx;
                //console.log('hoveredCell: ' + this.hoverIndex);
            }
        }
    },
    methods: {
       initGame: function () {
           this.clearIndexes();
           this.currNum = 1;
           this.cells = this.makeRange(1, this.gridSize * this.gridSize);
           this.trace = [];
           this.shuffleCells(1000);
           console.log('init game');
       },
       clearIndexes: function () {
           this.hoverIndex = -1;
           this.selectIndex = -1;
           this.correctIndex = -1;
       },
       nextTurn: function () {
            if (this.selectedCell >= 0 && this.selectedCell < this.cells.length) {
                if (this.cells[this.selectedCell] === this.currNum) {      // correct answer
                    this.correctIndex = this.cells.indexOf(this.currNum);
                    this.currNum ++;
                    if (this.currNum > this.cells.length) {
                        this.clearIndexes();
                        clearTimeout(this.selectedTimerId);
                        //alert('Game Over!');
                        console.log('game over!')
                        setTimeout(this.initGame, 1000);
                    }
                }
            }
       },
       tracedCell: function (cellIdx) {
           return this.cells[cellIdx] < this.currNum
       },
       makeRange: function (begin, end) {
           //range = Array.from({length: val}, (v, k) => k);
           let range = [];
           for (let i = begin; i <= end; i++) {
               range.push(i);
           }
           return range;
       },
       shuffleCells: function (shuffleCount) {
            for (let i = 0; i < shuffleCount; i++) {
                let aIdx = Math.floor(Math.random() * this.cells.length);
                let bIdx = Math.floor(Math.random() * this.cells.length);
                let aVal = this.cells[aIdx];
                this.cells[aIdx] = this.cells[bIdx];
                this.cells[bIdx] = aVal;
            }
       },
       hideSelect: function () {
           this.showSelect = false;
           //console.log('select time  out');
       }

    }
});
