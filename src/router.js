import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index/index'
import Home from './components/Home'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/gwsw/home'
            // name: 'Index',
            // component: Index
        },
        {
            path: '/gwsw/home',
            redirect: '/gwsw/index',
            component: Home,
            children: [{
                path: '/gwsw/index',
                component: Index
            }]
        }
    ]
})
