Vue.component('hello', {
    template: '<h1>Hello component!</h1>'
});

var data = {
    title: 'The VueJS Instance',
    showParagraph: false
};

var vm1 = new Vue({
    el: '#app1',
    data: data,
    methods: {
        show: function () {
            this.showParagraph = true;
            this.updateTitle('The VueJS Instance (Updated)');
            //console.log(this.$refs.myButton);
            this.$refs.myButton.innerText = "it's myButton!";
        },
        updateTitle: function (title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function () {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function (value) {
            alert('Title changed, new value: ' + value);
        }
    }
});

console.log(data === vm1.$data);

// setTimeout(function () {
//     vm1.title = 'Changed by timer!';
// }, 3000);

var vm2 = new Vue({
    el: '#app2',
    data: {
        title: 'The second Instance'
    },
    methods: {
        onChange: function () {
            vm1.title = 'Changed!'

        }
    }
});


var vm3 = new Vue ({
   el: 'hello',
   template: '<h1>Hello app3</h1>'
});

// vm3.$mount('#app3');
// vm3.$mount();
// document.getElementById('app3').appendChild(vm3.$el);



