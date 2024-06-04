<script>
export default {
    name: 'DisplayCardApp',
    data() {
        return {}
    },
    props: {
        project: Object
    }

}
</script>
<template>
    <div class="container_project w-9/12">
        <div class="card_latest_project flex">
            <div class="left w-3/6">
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
            <div class="right w-3/6">
                <div class="info_project text-center px-6">
                    <h3>{{ project.name }}</h3>
                    <p>{{ project.description }}</p>
                </div>
            </div>
        </div>
    </div>

</template>



<style></style>