<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
    import Flickity from 'flickity';

    export default {
        name: "Carousel",
        props: {
            wraparound: {default: true},
            autoplay: {default: false},
            lazyload: {default: false},
        },
        data() {
            return {
                carouselClass: 'main-carousel',
            };
        },
        mounted() {
            new Flickity(this.$el, {
                wraparound: this.wraparound,
                autoPlay: this.autoplay,
                lazyLoad: this.lazyload,
            });
        }
    }
</script>

<style scoped>

</style>