<template>
  <div>
    <ul 
      v-show="menuAppear" 
      id="autocomplete-finds"
    >
      <li class="food-search-item" @mouseover="getCalories" @click.stop="getFoodInfo" v-for="(query, index) in queries" :key="index">
        <p class="food-search-item__query">{{ query }}</p>
        <!-- <small class="food-search-item__calories">{{ calories }} cal</small> -->
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
      'queries': '',
      calories: '35'
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
    getFoodInfo($event){
      let keyword;
      if(event.target.innerText.length > 0) {
        keyword = event.target.innerText.split(' ').join('%20');
      }
      // axios.get(`https://api.nal.usda.gov/fdc/v1/search?api_key=ArQ4DdlGs5voZJAlBi7ATaVqMS31QQVByKkeBt2N&generalSearchInput=${keyword}`)
      // .then(res => console.log(res))
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
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 7px auto;
  }

.food-search-item__query {
  /* margin-right: 30px; */
  margin-bottom: 0 !important;
}

/* .food-search-item__calories {
  color: darkgray;
} */

  li:hover {
    background: rgba(172, 255, 47, 0.418);
    cursor: pointer;
  }
</style>