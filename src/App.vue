<script>
import axios from 'axios';
import HeaderApp from './components/partials/Header.vue';
import FooterApp from './components/partials/Footer.vue';
import ProjectCardApp from './components/ProjectCard.vue'

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
    ProjectCardApp,
  },
  methods: {

    goTo(page) {
      let url = this.base_api_url + this.base_projects_url + '?page=' + page;
      // console.log(url, page)
      this.callApi(url);

    },

    prevPage(url) {
      // console.log(url);
      this.callApi(url);
    },

    nextPage(url) {
      // console.log(url);
      this.callApi(url);
    },

    callApi(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response.data);
          this.projects = response.data.projects
        })
    }
  },
  mounted() {
    let url = this.base_api_url + this.base_projects_url;
    // console.log(url);
    this.callApi(url)
  }
}
</script>

<template>

  <HeaderApp />

  <main id="site_main">

    <section id="jumbotron">
      <div class="container">
        <h1>My portfolio</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam sapiente pariatur aut eveniet porro
          similique eligendi! Explicabo quam non, dolorem dolor eligendi impedit voluptas autem accusamus, expedita
          recusandae accusantium ducimus, adipisci praesentium quia optio aspernatur blanditiis doloribus officiis nisi
          iure molestias? Dicta repellendus nobis minus fugiat ab accusamus pariatur.
        </p>
        <button class="btn btn-primary">My project</button>
      </div>
    </section>


    <section id="card_projects">
      <div class="container">

        <div class="row">

          <ProjectCardApp v-for="project in projects.data" :project="project" :key="project.id" />

        </div>
        <div class="pagination">

          <nav aria-label="Page navigation">
            <ul class="pagination">

              <li class="page-item bg-dark" v-show="projects.prev_page_url">
                <button class="page-link bg-dark" href="#" aria-label="Previous"
                  @click="prevPage(projects.prev_page_url)">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </button>
              </li>

              <li class="page-item page" :class="{ 'active': page == projects.current_page }"
                v-for="page in projects.last_page" @click="goTo(page)">
                <span class="page-link" :class="{ 'active': page == projects.current_page }">{{ page }}</span>
              </li>

              <li class="page-item bg-dark" v-show="projects.next_page_url">
                <button class="page-link bg-dark" href="#" aria-label="Next" @click="nextPage(projects.next_page_url)">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
              </li>

            </ul>
          </nav>

        </div>
      </div>
    </section>

  </main>
  <!-- /#site_main -->

  <FooterApp />

</template>

<style></style>
