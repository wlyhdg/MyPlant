<template>
  <section class="daily-progress">
  <v-progress-circular
    class="pi-progress"
    color="green darken-1"
    :value="value"
    :size="200"
    :width="25"
  > <span class="pi-percent">{{ value }}% </span><p>{{ dailyCals }} / 2000 cal</p></v-progress-circular>
</section>
</template>

<script>
export default {
  props: {
    dailyCals: {
      type: Number,
      required: true
    }
  },
  computed: {
    value() {
      return this.dailyCals / 2000 * 100;
    }
  }
}
</script>

<style>
  .daily-progress {
    position: relative;
    margin-bottom: 10%;
  }

  .pi-percent {
    font-size: 2.5rem;
  }

</style>