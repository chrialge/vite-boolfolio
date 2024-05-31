<script>


export default {
    name: 'ProjectCardApp',
    data() {
        return {


        }
    },
    props: {
        project: Object,
        key: Number,
    },
}
</script>

<template>

    <div class="col">
        <div class="card">
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
            <div class="card_body">
                <div class="card_title">
                    <h3>{{ project.name }}</h3>
                </div>
            </div>
        </div>
    </div>

    <!-- v-for="project in projects.data" -->

</template>

<style></style>
