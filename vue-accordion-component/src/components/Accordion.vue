<template>
    <div>
        <accordion-item
                v-for="(item,index) in items"
                :item="item"
                :index="index"
                :is-open="index === activeItemIndex"
                @toggle="toggled">
        </accordion-item>
    </div>
</template>

<script>
    import AccordionItem from './AccordionItem';

    export default {
        name: "Accordion",
        components: {AccordionItem},
        data() {
            return {
                activeItemIndex: null,
                items: [
                    {
                        id: 1,
                        title: "Laravel",
                        body: "Laravel is a very popular PHP web framework."
                    },
                    {
                        id: 2,
                        title: "PHP",
                        body: "PHP is a widely used scripting language, especially in web development."
                    },
                ],
            }
        },
        methods: {
            toggled(index) {
                if (index === this.activeItemIndex) {
                    return this.activeItemIndex = null;
                }

                this.activeItemIndex = index;
            }
        }
    }
</script>

<style scoped>

</style>