import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _182d0a93 = () => interopDefault(import('..\\pages\\Post.vue' /* webpackChunkName: "pages/Post" */))
const _5e022e86 = () => interopDefault(import('..\\pages\\Profile.vue' /* webpackChunkName: "pages/Profile" */))
const _93b27cd4 = () => interopDefault(import('..\\pages\\Register.vue' /* webpackChunkName: "pages/Register" */))
const _989c06b0 = () => interopDefault(import('..\\pages\\postpage\\_id.vue' /* webpackChunkName: "pages/postpage/_id" */))
const _5dc442e2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Post",
    component: _182d0a93,
    name: "Post"
  }, {
    path: "/Profile",
    component: _5e022e86,
    name: "Profile"
  }, {
    path: "/Register",
    component: _93b27cd4,
    name: "Register"
  }, {
    path: "/postpage/:id?",
    component: _989c06b0,
    name: "postpage-id"
  }, {
    path: "/",
    component: _5dc442e2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
