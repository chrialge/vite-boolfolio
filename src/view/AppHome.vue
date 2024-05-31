<script>
import axios from 'axios'
import Jumbotron from '../components/Jumbotron.vue'
import ProjectCardApp from '../components/ProjectCard.vue'

export default {
    name: 'AppHome',
    data() {
        return {
            projects: [],
            base_api_url: 'http://127.0.0.1:8000/',
            base_projects_latest_url: 'api/latest',
        }
    },
    components: {
        Jumbotron,
        ProjectCardApp
    },
    methods: {
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
        let url = this.base_api_url + this.base_projects_latest_url;
        // console.log(url);
        this.callApi(url)
    }
}
</script>

<template>
    <Jumbotron btnName="My projects" btnRoute="blog" />

    <section id="card_projects">

        <div class="container">
            <h1 class="text-black">Latest Project</h1>
            <div class="row">

                <ProjectCardApp v-for="project in projects" :project="project" />

            </div>
        </div>
    </section>

</template>

<style></style>