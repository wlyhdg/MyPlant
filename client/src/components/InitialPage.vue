<template>
  <div>
    <section class="initial-top">
    <div class="overlay-area">
      <div class="grad-block">
        <h2>M Y P L A N T</h2>
          <small>Water your plant — which is your body — with the healthy nutrients it needs.</small>
      </div>
    </div>
    </section>

    <section class="initial-bottom">
    <div class="credentials-choice">
          <router-link class="btn btn-success" to="/login"> Log In </router-link>
          <router-link class="btn btn-light" to="/register"> Register </router-link>
      </div>
      <div><router-link class="guest-link" :to="{name: 'dashboard'}"><small> Continue as a guest </small></router-link></div>
      <MadeFooter />
    </section>
  </div>
</template>

<script>
import MadeFooter from './MadeFooter.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    MadeFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .initial-top {
    color: white;
  }

  .initial-bottom {
    color: black;
  }

  .grad-block {
      /* background-image: linear-gradient(-90deg, white, green); */
      position: relative;
      background: url('../assets/images/garden.jpeg') center top/cover;
      padding: 10%;
      z-index: 3
  }

  .grad-block h2, .grad-block small {
    position: relative;
    z-index: 4;
  }

  .grad-block::after {
    content: '';
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 0;
  }

  .credentials-choice {
      margin: 5% 0% 1%;
      display: flex;
      justify-content: center
  }

  .guest-link {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.6)
  }

  .credentials-choice .btn {
    margin: 5px;
  }

  .guest-link:hover {
    color: rgba(46, 199, 15, 0.6)
  }

  .v-application a {
    color: black;
  }

  .v-application a[class="btn btn-success"] {
    color: white;
  }


</style>
