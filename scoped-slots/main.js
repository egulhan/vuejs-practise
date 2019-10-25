Vue.component('menu-list',{
    props:['items'],
    template:`
    <ul>
        <li v-for="item in items">
            <slot name="menu-item" :item="item">{{item}}</slot>        
        </li>
    </ul>
    `
});

new Vue({
    el: '#root'
});