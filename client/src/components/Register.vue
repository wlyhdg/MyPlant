<template>
  <div>
    <Navheader />
    <div class="mt-5">
        <h2 class="solo-title mb-3"> R E G I S T E R</h2>
        <form class="form" v-on:submit.prevent="registerPassage" method="POST">
            <input class="mb-2" v-model="username" placeholder="Username" value="" required> <br>
            <input class="mb-2" v-model="password" type="password" placeholder="Password" required> <br>
            <input type="email" v-model="email" placeholder="Email"> <br><br>
            <button class="btn btn-success" type="submit"> Register </button>
        </form>
        <br><small>Already have an account? <router-link to="/login">Log in</router-link></small>
    </div>
    <MadeFooter />
  </div>
</template>

<script>
import Navheader from './Navheader.vue';
import MadeFooter from './MadeFooter.vue';
import { mapActions } from 'vuex';
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      email: ''
    }
  },
  components: {
    Navheader,
    MadeFooter
  },
  methods: {
    ...mapActions(['register']),
    registerPassage() {
      const { username, email, password } = this
      this.register({username, email, password})
      .then(() => this.$router.push('dashboard'))
      .catch(err => {
        console.log(err);
      });
    }
  }
}
</script>

<style>

</style>