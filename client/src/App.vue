<template>
    <v-app id="app">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
      <Toast />
      <router-view />
    </v-app>
</template>

<script>
import Toast from './components/Toast.vue';

export default {
  name: 'app',
  components: {Toast},
  created () {
    document.title = 'MyPlant'
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgb(214, 219, 216);
  color: black;
}

body {
  margin: 0;
}
.solo-title {
    margin-top: 11%;
}

.footer-text {
    text-align: center;
}

.float-left {
    float: left;
}

.float-right {
    float: right;
    margin-right: 3rem;
}

.custom-link {
    color:gray
}

.custom-link:hover {
    color: green;
}

.ib {
    display: inline-block;
}

#deepfire {
  color: red;
  margin-right: 5px;
  font-size: 1.5rem;
}

.app-border {
    border: 0.1rem;
    border-style: solid;
    border-color: #0f410f;
    padding: 10px;
    border-radius: 5px;
}

.logout {
    position: absolute;
    right: 2%;
}

footer {
    position: absolute;
    bottom: 0;
    /* background-color: rgba(72, 112, 38, 0.1); */
    width: 100%;
    padding: 1rem;
    font-size: 0.7rem;
}

.router-link-active {
  color: orange;
}

.v-application input {
  /* border: none; */
  border-bottom: rgb(83, 66, 66) solid 1px;
  padding-bottom: 2px;
  margin-bottom: 5%;
}

.form {
  height: 400px;
}

.form input {
  margin: 10px;
}

input:focus, .btn:focus {
  outline: none;
}

/* .btn {
  background-color: gainsboro;
  border-radius: 5px;
  padding: 7px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.185);
} */


</style>
