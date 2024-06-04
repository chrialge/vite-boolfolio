<script>


export default {
    name: 'FooterApp',
    data() {
        return {
            nav: [
                {
                    'text': 'Home',
                    'route': 'home'
                },
                {
                    'text': 'Projects',
                    'route': 'projects'
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


    <footer id="site_footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    &copy; Christian Algieri 2024
                </div>
                <div class="col">
                    <h3>Quick Link</h3>
                    <ul class="unstyled">
                        <li v-for="item in nav">
                            <router-link :to="{ name: item.route }">{{ item.text }}</router-link>
                        </li>
                    </ul>
                </div>
                <div class="col">
                    <h3>Social</h3>
                    <ul class="social unstyled">
                        <li>
                            <a href="https://github.com/chrialge">
                                <i class="fa-brands fa-square-github"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-square-youtube"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fa-brands fa-linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    <!-- /#site_footer -->


</template>

<style></style>
