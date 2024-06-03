<script>


export default {
    name: 'HeaderApp',
    data() {
        return {
            nav: [
                {
                    'text': 'Home',
                    'route': 'home'
                },
                {
                    'text': 'Blog',
                    'route': 'blog'
                },
                {
                    'text': 'About',
                    'route': 'about'
                },
                {
                    'text': 'Contacts',
                    'route': 'contacts'
                },

            ]

        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>

<template>


    <header id="site_header">
        <div class="container">
            <div class="logo_portofolio">
                <img src="https://avatars.githubusercontent.com/u/112910791?s=96&amp;v=4" alt="@chrialge" size="55"
                    height="55" width="55" data-view-component="true">

            </div>

            <div class="right">
                <router-link v-for="item in nav" :to="{ name: item.route }" class="pointer">{{ item.text
                    }}</router-link>
            </div>
        </div>

    </header>
    <!-- /#site_header -->

</template>

<style></style>