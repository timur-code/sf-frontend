import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _bb0075b0 = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _3e38c922 = () => interopDefault(import('..\\pages\\deposit\\index.vue' /* webpackChunkName: "pages/deposit/index" */))
const _074cb39e = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _7d46cf91 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _3dc12949 = () => interopDefault(import('..\\pages\\transfer\\index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _2fc5fcca = () => interopDefault(import('..\\pages\\withdraw\\index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _fdf6cbd8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
=======
const _0304728e = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _cb926a9a = () => interopDefault(import('..\\pages\\deposit\\index.vue' /* webpackChunkName: "pages/deposit/index" */))
const _bdedffc0 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _53882d59 = () => interopDefault(import('..\\pages\\withdraw\\index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _69006163 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> 4c5336950d45c6e712817e5cbbea4de05adf721c

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
<<<<<<< HEAD
    component: _bb0075b0,
    name: "cabinet"
  }, {
    path: "/deposit",
    component: _3e38c922,
=======
    component: _0304728e,
    name: "cabinet"
  }, {
    path: "/deposit",
    component: _cb926a9a,
>>>>>>> 4c5336950d45c6e712817e5cbbea4de05adf721c
    name: "deposit"
  }, {
    path: "/product",
    component: _074cb39e,
    name: "product"
  }, {
    path: "/register",
<<<<<<< HEAD
    component: _7d46cf91,
=======
    component: _bdedffc0,
>>>>>>> 4c5336950d45c6e712817e5cbbea4de05adf721c
    name: "register"
  }, {
    path: "/transfer",
    component: _3dc12949,
    name: "transfer"
  }, {
    path: "/withdraw",
<<<<<<< HEAD
    component: _2fc5fcca,
    name: "withdraw"
  }, {
    path: "/",
    component: _fdf6cbd8,
=======
    component: _53882d59,
    name: "withdraw"
  }, {
    path: "/",
    component: _69006163,
>>>>>>> 4c5336950d45c6e712817e5cbbea4de05adf721c
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
