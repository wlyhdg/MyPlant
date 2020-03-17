<template>
  <div>
    <ul 
      v-show="menuAppear" 
      id="autocomplete-finds"
    >
      <li class="food-search-item" @mouseover="getCalories" @click.stop="getFoodInfo" v-for="(query, index) in queries" :key="index">
        {{ query }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Autocomplete',
  props: ['textToComplete'],
  data() {
    return {
      'queries': ''
    }
  },
  watch: {
    textToComplete: function (newVal, oldVal) {
      let api = "http://api.edamam.com/auto-complete?q=" + this.textToComplete + "&limit=100&app_id=fc81fd23&app_key=2ddb350b2c2311234e7b58bf97f4f20f"
      axios.get(api, {headers: {"Access-Control-Allow-Origin": "*"}})
      .then((res) => {
        this.queries = res.data;
        this.openMenu();
      })
      .catch(err => {}); 
    }
  },
  computed: {
    ...mapGetters(['getModalState']),
    menuAppear() {
      return !this.getModalState && this.queries.length > 0
    }
  },
  methods: {
    ...mapActions(['openMenu']),
    getCalories(e) {
      console.log('e')
    },
    getFoodInfo(){
      console.log("AUTOCOMPLETE level")
    }
  }
}
</script>

<style>
  #autocomplete-finds {
    color: white;
    background-color: black;
    position: absolute;
    border-radius: 10px;
    border: transparent solid 1px;
    padding: 10px;
    opacity: 0.9;
    margin-left: 10%; 
    z-index: 2;
  }

  #autocomplete-finds li{
    list-style-type: none;
  }

  li:hover {
    background: rgba(172, 255, 47, 0.418);
    cursor: pointer;
  }
</style>