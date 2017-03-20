new Vue ({
   el: '#app',
   data: {
       gridSize: 5,
       gridRange: [0, 1, 2, 3, 4],
       rowHeight: '20%',
       colWidth: '20%',
       showHover: true,
       hoverIndex: -1,
       selectIndex: -1,
    },
    watch: {
       gridSize: function (val) {
           if (isNaN(parseInt(val))) {
               this.gridSize = 2; // recursion !!!
               return;
           }
           this.gridRange = Array.from({length: val}, (v, k) => k);
           this.rowHeight = 100/val + '%';
           this.colWidth = 100/val + '%';
           //console.log(val, this.rowHeight, this.colWidth);
       }
    },
    methods: {
    },
});
