var vue1 = new Vue({
    el: '#part1',
    data: {
        msg: 'App 1 using HTML file',
    },
});
// vue1.$mount('#part1')


var vue2 = new Vue({
    el: '#part2',
    template: `
    <div> 
        <h1>{{ msg }}</h1>
        <h2>{{ reverseMsg }}</h2>
    </div>
    `,
    data: {
        msg: 'App 2 using Template string',
        msg2: 'second line of text',
    }, 
    computed: {
        reverseMsg: function() {
            return this.msg2.split(' ').reverse().join(' ');
        }
    },
});


var vue3 = new Vue({
    el:'#part3',
    data: {
        firstName: '',
        middleName: '',
        lastName: '',
        fullName:  'first middle last',
    },
    watch: {
        firstName: function() {
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        middleName: function() {
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
        lastName: function() {
            this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}`;
        },
    },
});




Vue.component('input-contact', {
    data: function() {
        return {
            contactName: ''
        }
    },
    template: '<label><input type="text" v-model="contactName" placeholder="Contact Name">{{ contactName }}</label>'
});

var vue4 = new Vue({
    el: '#part4',
});