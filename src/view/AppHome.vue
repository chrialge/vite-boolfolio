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

    <section id="biography">
        <div class="container py-8">
            <h2 class="title">BIOGRAPHY</h2>
            <span class="sub_title">My history life</span>
            <div class="flex flex-row py-9">
                <div class="card_biography flex">
                    <div class="left">
                        <img src="/public/images/img-biography.jpg" alt="">
                    </div>
                    <div class="right pl-8">
                        <h4 class="sub_title">Hi! My name is Christian Algieri. 👋</h4>
                        <p>
                            I'm junior full-stack developer, for much time i worked
                            like as chef,
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- /#biography -->

    <section id="card_projects">

        <div class="container">
            <h2 class="title">LATEST PROJECT</h2>
            <span class="sub_title">My latest projects!</span>

            <div class="row py-10 gap-8 justify-between">

                <DisplayCardApp v-for="project in this.state.projects_latest" :project="project" />

            </div>

            <Loading v-show="this.state.loading" />
        </div>
    </section>

    <section id="contact">
        <div class="container">
            <h2 class="title">CONTACT</h2>
            <span class="sub_title">Don't be shy! Hit me up! 👇👇</span>

            <div class="flex flex-row gap-16 py-10">
                <div class="col flex items-center gap-3">
                    <div class="left">
                        <i class="fa-solid fa-map-location"></i>
                    </div>
                    <div class="right">
                        <h4 class="sub_title">Location</h4>
                        <span>Gradara, Italy</span>
                    </div>
                </div>
                <div class="col flex items-center gap-2">
                    <div class="left">
                        <i class="fa-solid fa-envelope-open-text"></i>
                    </div>
                    <div class="right">
                        <h4 class="sub_title">Mail</h4>
                        <span>chrialge99@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>

    </section>
    <!-- /#contact -->

</template>

<style></style>
