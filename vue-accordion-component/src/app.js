import Vue from 'vue';

import Accordion from './components/Accordion';

Vue.config.devtools=true;
new Vue({
    el:'#root',
    components:{Accordion}
});