import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    beforeEnter: (to, from, next) => {
      window.location.href = 'https://www.google.com';
    }
  },
  {
    path: '/:catchAll(.*)', // This route will catch any path
    beforeEnter: (to, from, next) => {
      // Redirect to YouTube for any string
      window.location.href = 'https://www.youtube.com';
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
