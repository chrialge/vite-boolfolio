<script>
import Jumbotron from '../components/Jumbotron.vue'

export default {
    name: 'AppContacts',
    data() {
        return {

        }
    },
    components: {
        Jumbotron
    }
}
</script>

<template>
    <Jumbotron btnName="My Home" btnRoute="home" />
    <div class="container py-10">
        <h2 class="title">CREDENTIALS</h2>
        <span class="sub_title">Insert your credential for contact me!</span>





        <form action="" class="py-10 flex flex-col">


            <div class="mb-5">
                <label for="first-name" class="block mb-2 text-md font-medium sub_title">
                    First name</label>
                <input type="first-name" id="first-name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Mario" required />
            </div>
            <div class="mb-5">
                <label for="last-name" class="block mb-2 text-md font-medium sub_title">
                    Last name</label>
                <input type="last-name" id="last-name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Rossi" required />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-md font-medium sub_title">
                    Email</label>
                <input type="email" id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 gg"
                    placeholder="name@flowbite.com" required />
            </div>
            <div class="mb-5">
                <label for="message" class="block mb-2 text-md font-medium sub_title">
                    Message</label>
                <textarea id="message" rows="4"
                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Leave a comment..."></textarea>
            </div>

            <button class="btn btn-primary my-8" style="background-color: white;">Send</button>
        </form>
    </div>


</template>

<style></style>
