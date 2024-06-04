<script>
import axios from 'axios'
import ProjectCardApp from '../components/ProjectCard.vue'
import Jumbotron from '../components/Jumbotron.vue'
import Loading from '../components/Loading.vue'
import { state } from '../state.js'


export default {
    name: 'AppProjects',
    data() {
        return {
            state,
        }
    },
    components: {
        ProjectCardApp,
        Jumbotron,
        Loading
    },
    methods: {
        goTo(page) {
            let url = this.state.base_api_url + this.state.base_projects_url + '?page=' + page;
            // console.log(url, page)
            this.state.getProjects(url);

        },

        prevPage(url) {
            console.log(url);
            this.state.getProjects(url);
        },

        nextPage(url) {
            console.log(url);
            this.state.getProjects(url);
        },
        generateProjects() {
            if (this.state.loading === false) {
                this.state.loading = true
            }
            let url = this.state.base_api_url + this.state.base_projects_url;
            this.state.getProjects(url);
        }

    },
    mounted() {
        this.generateProjects();
    }
}
</script>

<template>

    <Jumbotron btnName="Contact" btnRoute="contacts" />

    <section id="card_projects">
        <div class="container">

            <h2 class="title">My All Projects</h2>
            <span class="sub_title">Look ever projects</span>
            <div class="row">

                <ProjectCardApp v-for="project in this.state.projects.data" :project="project" />

            </div>
            <Loading v-show="this.state.loading" />
            <div class="pagination">

                <nav aria-label="Page navigation">
                    <ul class="pagination">

                        <li class="page-item bg-orange" v-show="this, state.projects.prev_page_url">
                            <button class="page-link btn_page" href="#" aria-label="Previous"
                                @click="prevPage(this.state.projects.prev_page_url)">
                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                            </button>
                        </li>

                        <li class="page-item page" :class="{ 'active': page == this.state.projects.current_page }"
                            v-for="page in this.state.projects.last_page" @click="goTo(page)">
                            <span class="page-link">{{
                                page
                            }}</span>
                        </li>

                        <li class="page-item bg-orange" v-show="this.state.projects.next_page_url">
                            <button class="page-link " href="#" aria-label="Next"
                                @click="nextPage(this.state.projects.next_page_url)">
                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                            </button>
                        </li>

                    </ul>
                </nav>

            </div>
        </div>
    </section>
</template>

<style></style>