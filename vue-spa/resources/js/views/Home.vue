<template>
    <div>
        <article v-for="status in statuses" class="message is-info">
            <div class="message-header">
                <p>{{status.user.name}} said...</p>
                <span>{{status.created_at | ago}}</span>
            </div>
            <div class="message-body">
                {{status.message}}
            </div>
        </article>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';

    export default {
        name: "Home",
        data() {
            return {
                statuses: []
            }
        },
        filters:{
            ago(date){
                return moment(date).fromNow();
            }
        },
        mounted() {
            Status.all()
                .then(({data}) => this.statuses = data);
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>
