var cmp = {
    data: function () {
        return {
            status: 'Critical'
        }
    },
    template: '<p>Server status: {{ status}} ' +
              '(<button @click="changeStatus">Change</button>)</p>',
    methods: {
        changeStatus: function () {
            this.status = ' Normal';
        }
    }
};

new Vue ({
    el: '#app1',
    components: {
        'my-cmp': cmp
    }
});

new Vue ({
    el: '#app2'
});
