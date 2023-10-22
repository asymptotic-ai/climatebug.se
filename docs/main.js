// Import Vue components
import Menu from './components/Menu.vue';
import Home from './views/Home.vue';
// import About from './views/About.vue';
// import Contact from './views/Contact.vue';

// Setup Vue Router
const routes = [
    { path: '/', component: Home },
    // { path: '/about', component: About },
    // { path: '/contact', component: Contact }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});

// Create and mount the root Vue instance
const app = Vue.createApp({});

// Use the router instance with the main app
app.use(router);

// Mount the app to the #app div in the index.html
app.mount('#app');
