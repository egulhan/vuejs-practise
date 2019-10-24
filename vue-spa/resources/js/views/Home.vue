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

        <add-status></add-status>
    </div>
</template>

<script>
    import moment from 'moment';
    import Status from '../models/Status';
    import AddStatus from '../components/AddStatus';

    export default {
        name: "Home",
        components: {AddStatus},
        data() {
            return {
                statuses: []
            }
        },
        filters: {
            ago(date) {
                return moment(date).fromNow();
            }
        },
        mounted() {
            Status.all()
                .then(({data}) => this.statuses = data);

            let self = this;

            Event.$on('onAddedStatus', function (status) {
                self.statuses.unshift(status);

                alert('New status has been added!');

                window.scrollTo(0, 0);
            });
        },
        methods: {}
    }
</script>

<style scoped>

</style>
