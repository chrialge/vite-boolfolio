<script>
import axios from 'axios'
import Jumbotron from '../components/Jumbotron.vue'
import ProjectCardApp from '../components/ProjectCard.vue'
import Loading from '../components/Loading.vue'
import { state } from '../state.js'
import DisplayCardApp from '../components/DisplayCardApp.vue'

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
        Loading,
        DisplayCardApp,
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
            <div class="separeted flex items-center gap-3 justify-center py-20">
                <hr>
                <h1 class="text-black ">Latest Projects</h1>
                <hr>
            </div>

            <div class="row py-10 gap-16">


                <DisplayCardApp v-for="project in this.state.projects_latest" :project="project" />




            </div>

            <Loading v-show="this.state.loading" />
        </div>
    </section>

</template>

<style></style>
