<template>
    <div>
        <article v-for="status in statuses" class="message is-info">
            <div class="message-header">
                <p>{{status.user.name}} said...</p>
                <span>{{postedOn(status)}}</span>
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
        mounted() {
            Status.all()
                .then(({data}) => this.statuses = data);
        },
        methods: {
            postedOn(status) {
                return moment(status.created_at).fromNow();
            }
        }
    }
</script>

<style scoped>

</style>
