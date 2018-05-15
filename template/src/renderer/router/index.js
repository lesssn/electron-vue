import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
        {
            path: '/',
            redirect: '/main'
        },
        {
            path: '/main',
            name: 'main',
            component: require('@/components/main').default,
            children: [
                {
                    path: '',
                    redirect: "blank"
                },
                {
                    path: "blank",
                    name: "blank",
                    component: require('@/components/blank').default
                }
            ]
        },
        {
            path: '*',
            redirect: '/main'
        }
    ]
})
