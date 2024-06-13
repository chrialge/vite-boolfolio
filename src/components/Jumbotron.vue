<script>
export default {
    name: 'Jumbotron',
    data() {
        return {

        }

    },
    props: {
        'btnName': String,
        'btnRoute': String,
    }
}
</script>

<template>
    <section id="jumbotron">
        <div class="container_jumbotron text-black">
            <div class="row">
                <div class="col">
                    <h1>
                        < Christian Algieri <span class="text_light">/</span>>
                    </h1>
                    <p>
                        Hi, my name is Christian Algieri. A passionate Junior full-stack Developer, i live in Italy.
                        <span style="font-size: 30px;">👋</span>
                    </p>
                    <ul class="social unstyled flex gap-3">
                        <li>
                            <a href="https://github.com/chrialge">
                                <i class="fa-brands fa-square-github text-4xl"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/christian-algieri-218b42312">
                                <i class="fa-brands fa-linkedin text-4xl"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="tech_stack">
                        <h4>Tech-stack |</h4>
                        <div class="icon-tech-stack">
                            <img src="/public/images/html5-icon.png" alt="">
                            <img src="/public/images/css3-icon.png" alt="">
                            <img src="/public/images/bootstrap-icon.png" alt="">
                            <img src="/public/images/js-icon.png" alt="">
                            <img src="/public/images/vue-icon.png" alt="">
                            <img src="/public/images/laravel-icon.png" alt="">
                            <img src="/public/images/php-icon.png" alt="">
                        </div>



                    </div>

                    <router-link class="btn btn-primary" :to="{ name: btnRoute }">{{ btnName }}</router-link>
                </div>
                <div class="col">
                    <img src="" alt="">
                </div>
            </div>


        </div>
    </section>
</template>

<style></style>