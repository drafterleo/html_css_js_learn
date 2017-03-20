var appData =  {
    gridSize: 5,
    gridRange: [0, 1, 2, 3, 4],
    rowHeight: '20%',
    colWidth: '20%',
    showHover: true,
    showSelect: true,
    hoverIndex: -1,
    selectIndex: -1,
    correctIndex: 2,
    selectTimeOut: 500
};

new Vue ({
   el: '#app',
   data: appData,
    watch: {
       gridSize: function (val) {
           if (isNaN(parseInt(val))) {
               this.gridSize = 2; // recursion !!!
               return;
           }
           //this.gridRange = Array.from({length: val}, function (v, k) {return k});
           var newRange = [];
           for (var i = 0; i < val; i++) {
               newRange.push(i);
           }
           this.gridRange = newRange;
           this.rowHeight = 100/val + '%';
           this.colWidth = 100/val + '%';
           //console.log(val, this.rowHeight, this.colWidth);
       }
    },
    computed: {
       selectedCell: {
           get: function () {
               return this.selectIndex;
           },
           set: function (cellIdx) {
               this.showSelect = true;
               this.selectIndex = cellIdx;
               setTimeout(this.hideSelect, this.selectTimeOut);
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
       hideSelect: function () {
           this.showSelect = false;
           //console.log('select time  out');
       }
    }
});
