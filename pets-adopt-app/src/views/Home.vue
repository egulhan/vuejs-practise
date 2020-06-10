<template>
  <div class="home">
    <b-button v-b-modal.modal-1>Add a New Pet</b-button>

    <b-modal id="modal-1" title="Add a New Pet" hide-footer>
      <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
        <b-form-group id="input-group-1" label="Name:" label-for="input1">
          <b-form-input
            id="input1"
            v-model="form.name"
            required
            placeholder="Enter name"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-10" label="Species:" label-for="input10">
          <b-form-select
            id="input10"
            v-model="form.species"
            :options="species"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-2" label="Breed:" label-for="input2">
          <b-form-select
            id="input2"
            v-model="form.breed"
            :options="breeds"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-3" label="Gender:" label-for="input3">
          <b-form-select
            id="input3"
            v-model="form.gender"
            :options="genders"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group id="input-group-4" label="Age:" label-for="input4">
          <b-form-input
            id="input4"
            v-model="form.age"
            required
            placeholder="Enter age"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Color:" label-for="input5">
          <b-form-input
            id="input5"
            v-model="form.color"
            required
            placeholder="Enter color"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-6" label="Weight:" label-for="input6">
          <b-form-input
            id="input6"
            v-model="form.weight"
            required
            placeholder="Enter weight"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-7" label="Weight:" label-for="input7">
          <b-form-input
            id="input7"
            v-model="form.location"
            required
            placeholder="Enter location"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-8" label="Weight:" label-for="input8">
          <b-form-textarea
            id="input8"
            v-model="form.notes"
            placeholder="Notes"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>

        <b-button type="submit" variant="primary" style="margin-right: 15px;">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      form: {},
      show: true
    }
  },
  methods: {
    ...mapActions([
      'addPet'
    ]),
    onSubmit () {
      const spec = this.form.species + 's'
      const formData = this.form
      const payload = {
        spec,
        pet: formData
      }

      this.addPet(payload)

      this.$bvModal.hide('modal-1')
      this.form = {}
    },
    onReset (evt) {
      evt.preventDefault()
      this.form = {}
    }
  },
  computed: {
    ...mapState([
      'breeds',
      'genders',
      'species'
    ])
  }
}
</script>
