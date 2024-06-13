<script>
import { gsap } from "gsap";

export default {
    name: 'ProjectCardApp',
    data() {
        return {
            count: 0,
            gsap,
            base_api_url: 'http://127.0.0.1:8000/',
        }
    },
    props: {
        project: Object,
    },

    mounted() {
        this.count = this.project.technologies.length - 1
        // this.gsap.to(".col_animation", {
        //     duration: 3,
        //     rotation: 360,
        // })
    }

}
</script>

<template>

    <div class="col col_animation">
        <router-link :to="{ name: 'singleCard', params: { slug: project.slug } }">
            <div class="card_project">
                <template v-if="project.cover_image.startsWith('uploads')">
                    <div class="card-image">
                        <img :src="base_api_url + 'storage/' + project.cover_image" alt="">
                    </div>
                </template>
                <template v-else>
                    <div class="card-image">
                        <img :src="project.cover_image" :alt="'Image of the project: ' + project.name">
                    </div>

                </template>
                <div class="card_body flex flex-col gap-1">
                    <div class="card_title">
                        <h2>{{ project.name }}</h2>
                    </div>
                    <div class="type">
                        <strong class="metadata">Types: </strong>
                        <span v-if="project.type">{{ project.type.name }}</span>
                        <span v-else>N/A</span>
                    </div>
                    <div class="technologies gap-2">
                        <strong class="metadata">Technologies:</strong>
                        <div class="flex flex-wrap
                        ">
                            <div class="badge_technologies flex gap-1"
                                v-for="(technology, index) in project.technologies">
                                <span
                                    class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{
                                        technology.name }}</span>
                                <span v-if="index < count"> / </span>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </router-link>
    </div>

    <!-- v-for="project in projects.data" -->

</template>

<style></style>
