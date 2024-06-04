import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './view/AppHome.vue';
import AppBlog from './view/AppBlog.vue';
import AppAbout from './view/AppAbout.vue';
import AppContacts from './view/AppContacts.vue';
import SingleCard from './view/SingleCard.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
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
        },
        {
            path: '/projects/:slug',
            name: 'singleCard',
            component: SingleCard
        },
        {
            path: '/:patchMatch(.*)*',
            name: 'not-found',
            component: NotFound
        },
    ]

})

export { router };