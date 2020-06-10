<template>
  <div>
    <h3>{{dog.name}} (Dog)</h3>
    <p><b>Age: </b>{{dog.age}}</p>
    <p><b>Gender: </b>{{dog.gender}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PetDog',
  data () {
    return {
      dog: {}
    }
  },
  computed: {
    ...mapState([
      'dogs'
    ])
  },
  mounted () {
    this.dog = this.dogs[this.$route.params.id]
  }
}
</script>

<style scoped>

</style>
