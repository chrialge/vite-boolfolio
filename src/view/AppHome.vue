<script>
import axios from 'axios'
import Jumbotron from '../components/Jumbotron.vue'
import ProjectCardApp from '../components/ProjectCard.vue'
import Loading from '../components/Loading.vue'
import { state } from '../state.js'

export default {
    name: 'AppHome',
    data() {
        return {
            state,
        }
    },
    components: {
        Jumbotron,
        ProjectCardApp,
        Loading
    },
    methods: {
        generateProjects() {
            if (this.state.loading === false) {
                this.state.loading = true
            }
            let url = this.state.base_api_url + this.state.base_projects_latest_url;
            this.state.getProjectsLatest(url);
        }
    },
    mounted() {
        this.generateProjects();
    }
}
</script>

<template>
    <Jumbotron btnName="My projects" btnRoute="blog" />

    <section id="card_projects">

        <div class="container">
            <h1 class="text-black">Latest Project</h1>
            <div class="row">


                <ProjectCardApp v-for="project in this.state.projects_latest" :project="project" />




            </div>

            <Loading v-show="this.state.loading" />
        </div>
    </section>

</template>

<style></style>
