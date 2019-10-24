<template>
    <form @submit.prevent="onSubmit" @keydown="form.errors.clear()">
        <div class="columns">
            <div class="column is-half is-offset-3">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <textarea class="textarea" rows="5" placeholder="Enter you message..."
                                  v-model="form.message"></textarea>
                        <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
                        <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
                    </p>
                    <p class="help is-danger" v-if="form.errors.has('message')" v-text="form.errors.get('message')"></p>
                </div>

                <div class="field">
                    <p class="control">
                        <button class="button is-success" :disabled="form.errors.any()">
                            Send
                        </button>
                    </p>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "AddStatus",
        data() {
            return {
                form: new Form({message: ''}),
            };
        },
        methods: {
            onSubmit() {
                this.form.post('/statuses')
                    .then(response=>{
                        Event.$emit('onAddedStatus', response);
                    })
                    .catch(response=>{});
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>
