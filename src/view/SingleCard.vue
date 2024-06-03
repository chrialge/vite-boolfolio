<script>
import axios from 'axios'
import ProjectCardApp from '../components/ProjectCard.vue'
import { state } from '../state.js'

export default {
    data() {
        return {
            state,
            project: null,
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
                    this.project = response.data.response;

                    this.loading = false;

                })
            console.log(this.project)
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

            <ProjectCardApp :project="this.project" class="w-100" />
        </div>

    </template>

</template>




<style></style>