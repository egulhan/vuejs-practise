import Vue from 'vue';
import PopperTooltip from 'tooltip.js';

Vue.config.devtools = true;

// 2. Tooltip via Dedicated Vue Directive
Vue.directive('tooltip', {
    bind(elem, bindings) {
        new PopperTooltip(elem, {
            title: bindings.value,
            placement: elem.dataset.tooltipPlacement || 'top',
        });
    }
});

// 3. Tooltip via Component
Vue.component('tooltip', {
    template: `
    <div>
        <strong>3- Tooltip via Component</strong>
        <div ref="body" v-show="false"><slot></slot></div>
    </div>`,
    mounted() {
        new PopperTooltip(this.$el, {
            title: this.$refs.body.innerHTML,
            placement: 'top',
            html: true,
            offset:[0,0],
        });
    }
});


new Vue({
    el: '#root',
    mounted() {
        // 1. Tooltip via Data Attribute
        document.querySelectorAll('[data-tooltip]').forEach(elem => {
            new PopperTooltip(elem, {
                placement: 'top',
                title: elem.dataset.tooltipTitle,
            });
        });
    }
});