<script>
import axios from 'axios';
import HeaderApp from './components/partials/Header.vue';
import FooterApp from './components/partials/Footer.vue';


//import { RouterView } from 'vue-router';

export default {
  name: 'App',
  data() {
    return {


    }
  },
  components: {
    HeaderApp,
    FooterApp,

  },
  methods: {


  },
  mounted() {

  }
}
</script>

<template>

  <HeaderApp />

  <main id="site_main">

    <router-view></router-view>

  </main>
  <!-- /#site_main -->

  <FooterApp />

</template>

<style></style>
