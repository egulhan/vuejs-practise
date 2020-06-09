<template>
    <b-nav>
        <b-nav-item disabled>VueJS Rocks!</b-nav-item>
        <b-nav-item disabled>Count: {{totalCorrect}}/{{totalAnswer}}</b-nav-item>
    </b-nav>
</template>

<script>
    export default{
        props:{
            totalCorrect:Number,
            totalAnswer:Number,
        },
    }
</script>