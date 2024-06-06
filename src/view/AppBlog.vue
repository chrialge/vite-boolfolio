<script>
import { state } from '../state.js'
export default {
    name: 'AppBlog',
    data() {
        return {
            state,

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
        </div>

    </div>
</template>

<style lang="scss" scoped></style>