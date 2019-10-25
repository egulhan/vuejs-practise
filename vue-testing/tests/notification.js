import Vue from 'vue/dist/vue'; // import standalone vue
import test from 'ava';
import Notification from '../src/Notification';

let vm;

test('notification test', t => {
    let V = Vue.extend(Notification);

    vm = new V({
        propsData: {message: 'yeye'}
    }).$mount();

    t.is(vm.$el.textContent, 'YEYE');
});

test('capitalize the message', t => {
    t.is(vm.$el.textContent, 'YEYE');
});