<template>
  <div>
    <h2>Cats for Adoption</h2>
    <PetTable species="cats" :pets="cats" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable'

export default {
  name: 'Cats',
  components: { PetTable },
  comments: [
    PetTable
  ],
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  }
}
</script>

<style scoped>

</style>
