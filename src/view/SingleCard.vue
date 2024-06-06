<script>
import axios from 'axios';
import ProjectCardApp from '../components/ProjectCard.vue';
import { state } from '../state.js';
import { router } from '../router.js';

export default {
    data() {
        return {
            state,
            project: null,
            count: 0,

        }
    },
    components: {
        ProjectCardApp
    },
    methods: {
        getDestinationSlug() {
            return this.$route.params.slug
        },
        getSingleProject() {
            let url = this.state.base_api_url + this.state.base_projects_url + '/' + this.getDestinationSlug();

            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    if (response.data.success == true) {
                        this.project = response.data.response;
                        this.count = this.project.technologies.length - 1
                        this.loading = false;
                    } else {
                        this.$router.push({ name: 'not-found' })
                    }


                }).catch(error => {

                })

        },

    },
    mounted() {
        this.getSingleProject();


    }
}
</script>
<template>
    <template v-if="this.project">
        <div class="container py-10">
            <h1 class="title py-4">Projects #{{ project.id }}: {{ project.name }}</h1>
            <div class="flex flex-row pb-5">
                <div class="flex-col grow">
                    <template v-if="project.cover_image.startsWith('uploads')">
                        <div class="card-image">
                            <img :src="base_api_url + '/storage/' + project.cover_image" alt="">
                        </div>
                    </template>
                    <template v-else>
                        <div class="card-image">
                            <img :src="project.cover_image" :alt="'Image of the project: ' + project.name">
                        </div>
                    </template>
                </div>
                <div class="flex-col">
                    <div class="card-info">
                        <h2 class="title">{{ project.slug }}</h2>
                        <div class="metadata">
                            <span class="sub_title">Types:</span>
                            <span v-if="project.type">{{ project.type }}</span>
                            <span v-else>N/A</span>

                            <div class="types flex gap-2 ">
                                <span class="sub_title">Technology:</span>
                                <div class="badge_technologies" v-for="(technology, index) in project.technologies">
                                    <span
                                        class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{
                                            technology.name }}</span>
                                    <span v-if="index < count" style="font-weight: 900;"> / </span>
                                </div>

                            </div>
                            <div class="start_date">
                                <span class="sub_title">
                                    Start date:
                                </span>
                                <span v-if="project.start_date">{{ project.start_date }}</span>
                                <span v-else>N/A</span>
                            </div>
                            <div class="finish_date">
                                <span class="sub_title">
                                    Finish date:
                                </span>
                                <span v-if="project.finish_date && project.status === 0">{{ project.finish_date
                                    }}</span>
                                <span v-else>N/A</span>
                            </div>
                            <div class="status">
                                <span class="sub_title pe-3">Status: </span>
                                <i v-if="project.status == 0" class="fa-solid fa-circle" style="color: #0fd212;"></i>
                                <i v-else-if="project.status == 1" class="fa-solid fa-circle"
                                    style="color: #ebee53;"></i>
                                <i v-else class="fa-solid fa-circle" style="color: #fa0000;"></i>

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div class="description">
                <h3 class="title">Description:</h3>
                <p>
                    {{ project.description }}
                </p>
            </div>
            <div class="container_video">
                <div class="video py-6">
                    <h3 class="title">Videos:</h3>
                    <div class="flex flex-row gap-5">
                        <template v-if="project.video">
                            <div class="card_video">
                                <iframe width="800" height="500"
                                    :src="'https://www.youtube.com/embed/' + project.video + '?si=JcZaDnzpiorjcbfV'"
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                        </template>

                        <div class="notes">
                            <div class="card_note">
                                <div class="note_title">
                                    <h3 class="title">Notes:</h3>
                                    <span>namedinote</span>
                                </div>
                                <div class="note_description">
                                    <p>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quaerat
                                        modi
                                        maiores!
                                        Mollitia hic, accusantium minus consequatur rerum dolores laboriosam ullam
                                        necessitatibus ipsum
                                        saepe natus autem quo dolorum quae, veritatis optio ratione. Asperiores vel
                                        ratione
                                        expedita!
                                        Aliquam dicta mollitia temporibus. Dolorem beatae velit adipisci neque
                                        repellendus
                                        pariatur
                                        facilis architecto perferendis? Nostrum ad fugit sint sit autem. Laborum
                                        accusantium
                                        molestiae
                                        sit.
                                    </p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>


            </div>




        </div>

    </template>

</template>




<style></style>