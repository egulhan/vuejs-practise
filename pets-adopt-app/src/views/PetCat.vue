<template>
  <div>
    <h3>{{cat.name}} (Cat)</h3>
    <p><b>Age: </b>{{cat.age}}</p>
    <p><b>Gender: </b>{{cat.gender}}</p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'PetCat',
  data () {
    return {
      cat: {}
    }
  },
  computed: {
    ...mapState([
      'cats'
    ])
  },
  mounted () {
    this.cat = this.cats[this.$route.params.id]
  }
}
</script>

<style scoped>

</style>
