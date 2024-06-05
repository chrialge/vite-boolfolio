<script>
import Jumbotron from '../components/Jumbotron.vue'
import axios from 'axios'

export default {
    name: 'AppContacts',
    data() {
        return {
            base_api_url: 'http://127.0.0.1:8000/',
            first_name: '',
            last_name: '',
            email: '',
            message: '',

        }
    },
    components: {
        Jumbotron
    },
    methods: {
        sendMessage() {
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                message: this.message,
            }

            const url = this.base_api_url + '/api/contacts';
            console.log(url)
            axios.post(url, data).then(response => {
                console.log(response)
            }).catch(err => {
                console.error(err);
            })
        }
    }
}
</script>

<template>
    <Jumbotron btnName="My Home" btnRoute="home" />
    <div class="container py-10">
        <h2 class="title">CREDENTIALS</h2>
        <span class="sub_title">Insert your credential for contact me!</span>





        <form action="" class="py-10 flex flex-col" method="post">


            <div class="mb-5">
                <label for="first_name" class="block mb-2 text-md font-medium sub_title">
                    First name</label>
                <input type="first_name" id="first_name" name="first_name"
                    class="bg-input border-4 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white dark:placeholder-gray-400"
                    placeholder="Mario" required v-model="first_name" />
            </div>
            <div class="mb-5">
                <label for="last_name" class="block mb-2 text-md font-medium sub_title">
                    Last name</label>
                <input type="last_name" id="last_name" name="last_name"
                    class="bg-input border-4 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Rossi" required v-model="last_name" />
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-md font-medium sub_title">
                    Email</label>
                <input type="email" id="email" name="email"
                    class="bg-input border-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@flowbite.com" required v-model="email" />
            </div>
            <div class="mb-5">
                <label for="message" class="block mb-2 text-md font-medium sub_title">
                    Message</label>
                <textarea id="message" rows="4" name="message"
                    class="bg-input border-4 block p-2.5 w-full text-sm text-gray-900  rounded-lg  dark:placeholder-gray-400 dark:text-white"
                    placeholder="Leave a comment..." v-model="message"></textarea>
            </div>

            <button type="submit" class="btn btn-primary my-8" style="background-color: white;"
                @click="sendMessage()">Send</button>
        </form>
    </div>


</template>

<style></style>
