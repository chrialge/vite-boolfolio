import { createRouter, createMemoryHistory } from 'vue-router';
import AppHome from './view/AppHome.vue';
import AppBlog from './view/AppBlog.vue';
import AppAbout from './view/AppAbout.vue';
import AppContacts from './view/AppContacts.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppHome
        },
        {
            path: '/blog',
            name: 'blog',
            component: AppBlog
        },
        {
            path: '/about',
            name: 'about',
            component: AppAbout
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        }
    ]

})

export { router };