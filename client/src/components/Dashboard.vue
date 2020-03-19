<template>
  <div @click="outsideClick" class="dashboard">
    <div class="dash-header">
      <span class="v-start"></span>
      <transition class="v-middle" name="tfade">
        <div v-if="mounted">
          <h3 class="welcome-msg"> Welcome, 
            <span id="db-username">
              {{ usn }}.
            </span>
          </h3>
        </div>
      </transition>
      <div class="v-end">
        <span v-if="authCheck" @click="logOff" class="float-right -exit mr"><small>LOGOUT</small></span> 
        <span v-else class="float-right mr"></span>
      </div>
    </div>

    <div class="container widget-cont">
      <div class="row">
        <div class="col-md-4 bmi-block ib">
            <Bmi />
        </div>
        <div class="col-md-8 ib">
          <NutriFacts />
          <div :key="foodItem.id" v-for="foodItem in absorbFood">
            {{ foodItem }}
          </div>
        </div>
      </div>
    </div>

    <ProgressPi :dailyCals="dailyCals"/>

    <MadeFooter :showLogo="true"/>
  </div>
</template>

<script>
import MadeFooter from './MadeFooter.vue';
import Bmi from './widgets/Bmi.vue'
import NutriFacts from './widgets/NutriFacts.vue';
import ProgressPi from './widgets/ProgressPi.vue'
import { mapGetters, mapState, mapActions } from 'vuex';
import _ from 'lodash';
import axios from 'axios';

export default {
  name: 'Dashboard',
  components: {
    MadeFooter,
    Bmi,
    NutriFacts,
    ProgressPi
  },
  data () {
    return {
      bmi: '',
      usn: '',
      mounted: false,
      value: 40,
      dailyCals: 300
    }
  },
  methods: {
    ...mapActions(['logout', 'closeMenu']),
    logOff() {
      this.logout();
      this.$router.push('/')
    },
    outsideClick() {
      this.closeMenu();
    }
  },
  computed: {
    ...mapGetters(['absorbFood', 'authCheck']),
    ...mapState(['auth', 'food'])
  },
  mounted () {
    this.usn = !this.auth.user ? 'Guest' : _.startCase(this.auth.user.username)
    this.mounted = true;
  }
}
</script>

<style scoped>
  .dash-header{
    display: flex;
    justify-content: center;
  }

  .welcome-msg {
    margin: 8px 0;
    font-weight: 300;
    padding: 10px;
  }

  .v-start {
    flex: 1;
  }

  .v-end {
    flex: 1;
    align-self: center;
  }
  
  .tfade-enter-active {
    transition: opacity 3s;
  }

  .tfade-enter {
    opacity: 0;
  }

  .tfade-leave-active {
    opacity: 1s;
    opacity: 0;
  }


  .dash-header {
    background-color: #0f410f;
    color: white;
  }

  .title-divide {
    position: relative;
    width: 20%;
    left: 50%;
    transform: translateX(-50%);
  }

  .-exit {
    cursor: pointer;
    color: gray;
  }

  .-exit:hover {
    color: goldenrod;
    align-items: center;
  }

  input:valid {
    background-color: transparent;
  }

</style>