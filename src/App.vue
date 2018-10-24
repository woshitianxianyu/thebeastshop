<template>
  <div class="app">

    <router-view/>
  </div>

    

</template>

<script>
import Vue from 'vue';

      
     
    // loading
    import { Indicator,Tabbar, TabItem,table } from 'mint-ui';
    import 'mint-ui/lib/style.css'
    Vue.prototype.$loading = Indicator;
    export default {
      name: 'App'
    }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;

}
</style>
