<template>
  <div></div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  'name': 'Toast',
  'props': ['toastType'],
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['toastMsg']),
  },
  watch: {
    toastMsg: function(newVal, oldVal) {
      let toasty = this.$toasted.show(`<span id="deepfire">&cross;</span> ${newVal.msg}`, {
        duration: 2000,
        position: 'top-right'
      });
    }
  }
}
</script>

<style>

</style>