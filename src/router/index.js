import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => require(["@/components/HelloWorld.vue"], resolve),
      children:[
        {
          path: '/home',
          component: resolve => require(["@/Page/Home.vue"], resolve),
        },
        {
          path: '/order',
          component: resolve => require(["@/Page/Order.vue"], resolve),
        },
        {
          path: '/Content',
          component: resolve => require(["@/Page/Content.vue"], resolve),
        },
        {
          path: '/Self1',
          component: resolve => require(["@/Page/Self1.vue"], resolve),
        },
        {
          path: '/Self2',
          component: resolve => require(["@/Page/Self2.vue"], resolve),
        },
        {
          path: '/Self3',
          component: resolve => require(["@/Page/Self3.vue"], resolve),
        },
        {
          path: '/Self4',
          component: resolve => require(["@/Page/Self4.vue"], resolve),
        }
      ]
    },
    

  ]
})
