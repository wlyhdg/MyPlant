<template>
  <div>
    <small>BMI</small>
    <form class="app-form app-border" v-on:submit.prevent="calculateBmi">
      <input class="mb-1" v-model.number="vheight" placeholder="Enter Height (in.)" name="height" id="bmiHeight"> <br>
      <input class="mb-1" v-model.number="vweight" placeholder="Enter Weight (lbs.)" name="weight" id="bmiWeight"> <br>
      <div id="bmi-number">{{ bmi }}</div><br>
      <button class="btn btn-dark" type="submit"><i class="fa fa-upload"></i> Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
 
export default {
  name: 'Bmi',
  data () {
    return {
      bmi: 0,
      vheight: "",
      vweight: ""
    }
  },
  methods: {
    ...mapActions({snatchBmi: 'updateBmi'}),
    calculateBmi () {
      const bmi = ( this.vweight / this.vheight / this.vheight ) * 703;
      const bmiRounded = Math.round(bmi * 10) / 10;
      this.snatchBmi(bmiRounded);
      this.bmi = this.$store.state.health.bmi
      console.log(this.bmi)
    }
  },
  computed: {
    ...mapGetters(['getBmi'])
  }
}

</script>

<style>

</style>