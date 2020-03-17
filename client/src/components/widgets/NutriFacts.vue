<template>
  <div>
    <small>NutriFacts</small>
    <form class="app-form app-border" v-on:submit.prevent="">
      <div class="food-form">
        <input v-model="searchBar" class="mb-1 search-bar" @input="updateText" placeholder="Find nutrition for selected food..." > <br>
        <Autocomplete :textToComplete="digText"></Autocomplete>
      </div>
      <button class="btn btn-dark" type="submit"><i class="fa fa-search"></i> Search</button>
    </form>
  </div>
</template>

<script>
import Autocomplete from './Autocomplete.vue'
export default {
  name: 'NutriFacts',
  components: {
    Autocomplete
  },
  data() {
    return {
      'searchBar': this.searchBar,
      'digText': ''
    }
  },
  methods: {
    updateText(e) {
      this.digText = e.target.value;
    }
  }
}

</script>

<style>
.search-bar {
  width: 75%;
}
</style>