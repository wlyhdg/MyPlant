<template>
  <div>
    <Navheader />
    <div class="mt-5">
      <h2 class="solo-title mb-3">L O G I N</h2>
      <form class="form" v-on:submit.prevent="loginPassage">
          <input class="mb-2" v-model="username" placeholder="Username or e-mail" required> <br />
          <input type="password" v-model="password" placeholder="Password" required> <br /><br />
          <button class="btn btn-success" type="submit"> Log In </button>
      </form>
    </div>
    <MadeFooter />
  </div>
</template>

<script>
import MadeFooter from './MadeFooter.vue';
import Navheader from './Navheader.vue';
import { mapActions } from 'vuex';

export default {
  name: "Login",
  data () {
    return {
      username: "",
      password: ""
    }
  },
  components: {
    Navheader,
    MadeFooter
  },
  methods: {
    ...mapActions(['login']),
    loginPassage() {
      const body = {
        nameOrEmail: this.username,
        password: this.password
      }
      
      this.login(body)
      .then(() => this.$router.push('dashboard'))
      .catch(err => {
        console.log(err)
      })
    }

  }
}
</script>

<style>
input {
  /* border: none; */
  /* border-bottom: rgb(27, 23, 23) solid 1px; */
  padding-bottom: 2px;
  margin-bottom: 5%;
}

input::placeholder {
  color: rgb(27, 23, 23) ;
}
</style>