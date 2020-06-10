<template>
  <div>
    <h2>Dogs for Adoption</h2>
    <PetTable species="dog" :pets="dogs" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PetTable from '../components/PetTable'

export default {
  name: 'Dogs',
  components: {
    PetTable
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  }
}
</script>

<style scoped>

</style>
