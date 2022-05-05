import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _bb0075b0 = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _12fa3018 = () => interopDefault(import('..\\pages\\cart\\index.vue' /* webpackChunkName: "pages/cart/index" */))
const _3e38c922 = () => interopDefault(import('..\\pages\\deposit\\index.vue' /* webpackChunkName: "pages/deposit/index" */))
const _1e001a33 = () => interopDefault(import('..\\pages\\liked\\index.vue' /* webpackChunkName: "pages/liked/index" */))
const _84543a50 = () => interopDefault(import('..\\pages\\market\\index.vue' /* webpackChunkName: "pages/market/index" */))
const _889c22f8 = () => interopDefault(import('..\\pages\\navbar\\index.vue' /* webpackChunkName: "pages/navbar/index" */))
const _7d46cf91 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _3dc12949 = () => interopDefault(import('..\\pages\\transfer\\index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _2fc5fcca = () => interopDefault(import('..\\pages\\withdraw\\index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _fdf6cbd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/cabinet",
    component: _bb0075b0,
    name: "cabinet"
  }, {
    path: "/cart",
    component: _12fa3018,
    name: "cart"
  }, {
    path: "/deposit",
    component: _3e38c922,
    name: "deposit"
  }, {
    path: "/liked",
    component: _1e001a33,
    name: "liked"
  }, {
    path: "/market",
    component: _84543a50,
    name: "market"
  }, {
    path: "/navbar",
    component: _889c22f8,
    name: "navbar"
  }, {
    path: "/register",
    component: _7d46cf91,
    name: "register"
  }, {
    path: "/transfer",
    component: _3dc12949,
    name: "transfer"
  }, {
    path: "/withdraw",
    component: _2fc5fcca,
    name: "withdraw"
  }, {
    path: "/",
    component: _fdf6cbd8,
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
