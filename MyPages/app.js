Vue.component('toxic-list', {
    data: function() {
        return {
            listItem: ''
        };
    },
    template: '<label><input class="listItems" type="text" v-model="listItem" placeholder="Enter a List Item"><input type="checkbox" class="checkbox">{{ listItem }}</label>',
});


var vueHM = new Vue({
    el: '#masterDiv',
});