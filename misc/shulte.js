new Vue ({
   el: '#app',
   data: {
       gridSize: 5,
       rowHeight: '20%',
       colWidth: '20%',
       showHover: true,
       hoverIndex: -1,
       selectIndex: -1,
    },
    watch: {
       gridSize: function (val) {
           this.gridSize = val;
           this.rowHeight = 100/val + '%';
           this.colWidth = 100/val + '%';
           console.log(val, this.rowHeight, this.colWidth);
       }
    },
    methods: {
        // setGridSize: function (event) {
        //     var val = Number(event.target.value);
        //     this.gridSize = val;
        //     this.rowHeight = 100/val + '%';
        //     this.colWidth = 100/val + '%';
        //     console.log(val, this.rowHeight, this.colWidth);
        // }
    },
});
