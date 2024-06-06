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
        <div class="container py-10 container_single_card">
            <h1 class="title title_project py-4">Projects #{{ project.id }}: {{ project.name }}</h1>
            <div class="flex flex-row pb-5 gap-7">
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
                    <div class="card-info card_section">
                        <h2 class="title title_card pb-3">{{ project.slug }}</h2>
                        <div class="metadata flex flex-col gap-2">
                            <div class="types">
                                <span class="sub_title">Types: </span>
                                <span v-if="project.type" class="value_info_project">{{ project.type }}</span>
                                <span v-else class="value_info_project">N/A</span>
                            </div>


                            <div class="technologies flex gap-2 ">
                                <span class="sub_title">Technology:</span>
                                <div class="badge_technologies" v-for="(technology, index) in project.technologies">
                                    <span
                                        class=" badge_technology inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{
                                            technology.name }}</span>
                                    <span v-if="index < count" style="font-weight: 900;"> / </span>
                                </div>

                            </div>
                            <div class="start_date">
                                <span class="sub_title">
                                    Start date:
                                </span>
                                <span v-if="project.start_date" class="value_info_project">{{ project.start_date
                                    }}</span>
                                <span v-else class="value_info_project">N/A</span>
                            </div>
                            <div class="finish_date">
                                <span class="sub_title">
                                    Finish date:
                                </span>
                                <span v-if="project.finish_date && project.status === 0" class="value_info_project">{{
                                    project.finish_date
                                    }}</span>
                                <span v-else class="value_info_project">N/A</span>
                            </div>
                            <div class="status">
                                <span class="sub_title pe-3">Status: </span>
                                <i v-if="project.status == 0" class="fa-solid fa-circle" style="color: #0fd212;"></i>
                                <i v-else-if="project.status == 1" class="fa-solid fa-circle"
                                    style="color: #ebee53;"></i>
                                <i v-else class="fa-solid fa-circle" style="color: #fa0000;"></i>

                            </div>
                            <div class="github flex items-center gap-2 pb-2">
                                <a href="https://github.com/chrialge" class="btn_code_here">
                                    <span> Code Here:</span>
                                    <i class="fa-brands fa-github text-xl pl-2"></i>
                                </a>
                            </div>
                            <div class="github flex items-center gap-2">
                                <a href="https://github.com/chrialge" class="btn_code_here">
                                    <span> Demo Here:</span>
                                    <i class="fa-solid fa-laptop-code text-xl pl-2"></i>
                                </a>
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
                    <div class="single_card_bottom">
                        <template v-if="project.video">
                            <div class="card_video">
                                <iframe :src="'https://www.youtube.com/embed/' + project.video + '?si=JcZaDnzpiorjcbfV'"
                                    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
                        web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>

                        </template>
                    </div>

                </div>
                <div class="notes flex gap-3">
                    <div class="card_note card_section ">
                        <div class="note_title pb-4">
                            <h3 class="title title_card inline-block pe-2">Notes:</h3>
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
                    <div class="card_note card_section ">
                        <div class="note_title pb-4">
                            <h3 class="title title_card inline-block pe-2">Notes:</h3>
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
                    <div class="card_note card_section ">
                        <div class="note_title pb-4">
                            <h3 class="title title_card inline-block pe-2">Notes:</h3>
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

    </template>

</template>




<style></style>