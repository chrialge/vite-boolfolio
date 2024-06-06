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
            loading: false,
            success: false,
            errors: false,
        }
    },
    components: {
        Jumbotron
    },
    methods: {
        sendMessage() {
            this.loading = true;

            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                email: this.email,
                message: this.message,
            }

            const url = this.base_api_url + 'api/contacts';
            console.log(url, data)
            axios.post(url, data).then(response => {
                console.log(response)
                if (response.data.success) {
                    this.first_name = ''
                    this.last_name = ''
                    this.email = ''
                    this.message = ''
                    this.success = response.data.message
                } else {
                    this.success = false
                    this.errors = response.data.errors
                }
                this.loading = false;

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



        <template v-if="success">
            <div class="div bg-green-400 border-2 rounded-lg text-green-700 border-green-700 p-2 flex justify-between">
                <div class="info">
                    {{ success }}
                </div>
                <div class="close text-3xl pointer" @click="success = !success">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        </template>
        <template v-if="errors">
            <div class="div bg-red-300 border-2 rounded-lg text-red-700 border-red-700 p-2 flex justify-between">
                <div class="info">
                    <h4 class="py-1">Errors:</h4>
                    <ul class="list-disc px-4">
                        <li v-for="error in errors">{{ error[0] }}</li>
                    </ul>
                </div>
                <div class="close text-3xl pointer" @click="errors = !errors">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
        </template>

        <form @submit.prevent="sendMessage()" class="py-5">


            <div class="mb-5">
                <label for="first_name" class="block mb-2 text-md font-medium sub_title">
                    First name</label>
                <input type="first_name" id="first_name" name="first_name"
                    class="bg-input border-4 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:text-white dark:placeholder-gray-400"
                    :class="{ 'border-red-700': errors.first_name }" placeholder="Mario" v-model="first_name" />
                <template v-if="errors.first_name">
                    <div class="text-red-500" v-for="error in errors.first_name">
                        {{ error }}
                    </div>
                </template>
            </div>
            <div class="mb-5">
                <label for="last_name" class="block mb-2 text-md font-medium sub_title">
                    Last name</label>
                <input type="last_name" id="last_name" name="last_name"
                    class="bg-input border-4 text-sm rounded-lg block w-full p-2.5 dark:placeholder-gray-400 dark:text-white "
                    :class="{ 'border-red-700': errors.last_name }" placeholder="Rossi" v-model="last_name" />
                <template v-if="errors.last_name">
                    <div class="text-red-500" v-for="error in errors.last_name">
                        {{ error }}
                    </div>
                </template>
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-md font-medium sub_title">
                    Email</label>
                <input type="email" id="email" name="email"
                    class="bg-input border-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white"
                    :class="{ 'border-red-700': errors.email }" placeholder="name@flowbite.com" v-model="email" />
                <template v-if="errors.email">
                    <div class="text-red-500" v-for="error in errors.email">
                        {{ error }}
                    </div>
                </template>
            </div>
            <div class="mb-5">
                <label for="message" class="block mb-2 text-md font-medium sub_title">
                    Message</label>
                <textarea id="message" rows="4" name="message"
                    class="bg-input border-4 block p-2.5 w-full text-sm text-gray-900  rounded-lg  dark:placeholder-gray-400 dark:text-white"
                    :class="{ 'border-red-700': errors.message }" placeholder="Leave a comment..."
                    v-model="message"></textarea>
                <template v-if="errors.message">
                    <div class="text-red-500" v-for="error in errors.message">
                        {{ error }}
                    </div>
                </template>
            </div>

            <button type="submit" class="btn btn-primary my-8" style="background-color: white;" :disabled="loading">
                <template v-if="loading == false">
                    Send
                </template>
                <template v-else>
                    <i class="fa-regular fa-paper-plane px-1"></i>
                    Sending....
                </template>
            </button>
        </form>
    </div>


</template>

<style></style>
