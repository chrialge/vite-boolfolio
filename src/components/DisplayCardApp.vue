<script>

export default {
    name: 'DisplayCardApp',
    data() {
        return {
            count: 0,
            base_api_url: 'http://127.0.0.1:8000/',
        }
    },
    props: {
        project: Object
    },
    mounted() {
        this.count = this.project.technologies.length - 1
    }

}
</script>
<template>
    <div class="container_project w-full">

        <div class="card_latest_project">
            <div class="top">
                <router-link :to="{ name: 'singleCard', params: { slug: project.slug } }">
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
                </router-link>
            </div>
            <div class="bottom">
                <div class="info_project text-center pl-2">
                    <h3>{{ project.name }}</h3>
                    <h4><strong>Type:</strong>
                        <span v-if="project.type">{{ project.type.name }}</span>
                        <span>N/A</span>
                    </h4>
                    <p>{{ project.description }}</p>
                    <div class="types flex gap-2 justify-center">
                        <div class="badge_technologies" v-for="(technology, index) in project.technologies">
                            <span
                                class="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{{
                                    technology.name }}</span>
                            <span v-if="index < count" style="font-weight: 900;"> / </span>
                        </div>

                    </div>
                    <ul class="action_project unstyled flex gap-1">
                        <li>
                            <a :href="project.url" class="btn_project">Code
                                <i class="fa-brands fa-github"></i>
                            </a>
                        </li>
                        <li>
                            <a :href="project.demo_project" class="btn_project pointer">Live Demo
                                <i class="fa-solid fa-laptop-code"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>


    </div>

</template>



<style></style>