<template>
    <div class="my-3 shadow accordion-item">
        <h2 @click="onToggle" class="font-bold bg-gray-100 p-5">
            <i :class="iconClass" style="margin-right: 10px;"></i> {{item.title}}
        </h2>
        <div v-if="isOpen" v-text="item.body" class="p-5"></div>
    </div>
</template>

<script>
    export default {
        name: "AccordionItem",
        props: ['item', 'index', 'isOpen'],
        data() {
            return {};
        },
        computed: {
            iconClass() {
                return 'fas ' + (this.isOpen ? 'fa-arrow-up' : 'fa-arrow-down');
            }
        },
        methods: {
            onToggle() {
                // this.isOpen=!this.isOpen;
                // this.$emit('toggle',this.$vnode.key);
                this.$emit('toggle', this.index);
            }
        }
    }
</script>

<style scoped>

</style>