<script>
import { state } from '../state.js'
export default {
    name: 'AppBlog',
    data() {
        return {
            state,
            activeAccordion: null,

        }
    },
    methods: {
        openNotes(index) {
            if (this.activeAccordion === index) {
                this.activeAccordion = null
            } else {
                this.activeAccordion = index
            }


        }
    },
    mounted() {
        let url = this.state.base_api_url + this.state.base_projects_all;
        this.state.getProjectsAll(url)

    }
}
</script>

<template>
    <div class="container py-10">
        <div class="card_blog_projects" v-for="project in state.projects_all">
            <h1 class="title title_project py-4">Projects #{{ project.id }}: {{ project.name }}</h1>
            <div class=" container_blog flex flex-row gap-3">

                <template v-if="project.cover_image.startsWith('uploads')">
                    <div class="card-image grow">
                        <img :src="base_api_url + '/storage/' + project.cover_image" alt="">
                    </div>
                </template>
                <template v-else>
                    <div class="card-image grow">
                        <img :src="project.cover_image" :alt="'Image of the project: ' + project.name">
                    </div>
                </template>
                <div class="card_description">
                    <h4 class="title">Description👇👇</h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed ab vel fugit iusto amet illum
                        aliquam corporis
                        perspiciatis, eligendi fuga nostrum! Voluptas numquam soluta eos iure nam est blanditiis
                        voluptates nesciunt
                        error, officia rerum debitis placeat cupiditate? Ratione ex dolorem facere voluptatibus omnis
                        impedit
                        exercitationem dolorum similique voluptate, perspiciatis id illo earum natus, sapiente veniam
                        explicabo in hic
                        iure excepturi!
                    </p>
                </div>

            </div>
            <div class="accordion_notes py-16">
                <template v-for="(value, index) in 4">
                    <button class="accordion flex justify-between" @click="openNotes(index)"
                        :class="{ active: activeAccordion == index }">
                        <h3>Notes 1</h3>
                        <template v-if="activeAccordion == index">
                            <i class="fa-solid fa-minus text-left"></i>
                        </template>
                        <template v-else>
                            <i class="fa-solid fa-plus text-left"></i>
                        </template>
                    </button>
                    <div class="panel" :class="{ active_accordion: activeAccordion == index }">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, optio ullam ut beatae
                            possimus
                            quaerat
                            dolorum quo nihil modi, nostrum laudantium mollitia eos corrupti? Quae nemo odit neque omnis
                            doloribus.</p>
                    </div>
                </template>


            </div>



        </div>

    </div>
</template>

<style lang="scss" scoped></style>