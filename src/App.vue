<script>
import axios from 'axios';
import HeaderApp from './components/partials/Header.vue';
import FooterApp from './components/partials/Footer.vue';

//import { RouterView } from 'vue-router';

export default {
  name: 'App',
  data() {
    return {
      projects: [],
      base_api_url: 'http://127.0.0.1:8000/',
      base_projects_url: 'api/projects',

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
