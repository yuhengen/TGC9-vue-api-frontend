import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';

// import in all my pages
import Faults from './components/Faults';
import Page2 from './components/Page2';
import AddFault from './components/AddFault'
import EditFault from './components/EditFault'
import ConfirmDelete from './components/ConfirmDelete'

Vue.config.productionTip = false

// define routes
const routes = [
    {
        path: '/faults',
        component: Faults
    },
    {
        path: '/page2',
        component: Page2
    }, {
        path: '/faults/add',
        component: AddFault
    }, {
        path: '/faults/:id/edit',
        component: EditFault
    }, {
        path: '/faults/:id/delete',
        component: ConfirmDelete
    }
]

// create router
const router = new VueRouter({ routes })

Vue.use(VueRouter);

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
