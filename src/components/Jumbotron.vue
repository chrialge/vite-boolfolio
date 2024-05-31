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
        <div class="container text-black">
            <h1>My portfolio</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit quisquam sapiente pariatur aut eveniet
                porro
                similique eligendi! Explicabo quam non, dolorem dolor eligendi impedit voluptas autem accusamus,
                expedita
                recusandae accusantium ducimus, adipisci praesentium quia optio aspernatur blanditiis doloribus officiis
                nisi
                iure molestias? Dicta repellendus nobis minus fugiat ab accusamus pariatur.
            </p>
            <router-link class="btn btn-primary" :to="{ name: btnRoute }">{{ btnName }}</router-link>
        </div>
    </section>
</template>

<style></style>