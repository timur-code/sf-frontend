import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ce6ebb16 = () => interopDefault(import('..\\pages\\addproduct\\index.vue' /* webpackChunkName: "pages/addproduct/index" */))
const _0304728e = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _cb926a9a = () => interopDefault(import('..\\pages\\deposit\\index.vue' /* webpackChunkName: "pages/deposit/index" */))
const _5857a7c2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _bdedffc0 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _618359d8 = () => interopDefault(import('..\\pages\\transfer\\index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _53882d59 = () => interopDefault(import('..\\pages\\withdraw\\index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _69006163 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/addproduct",
    component: _ce6ebb16,
    name: "addproduct"
  }, {
    path: "/cabinet",
    component: _0304728e,
    name: "cabinet"
  }, {
    path: "/deposit",
    component: _cb926a9a,
    name: "deposit"
  }, {
    path: "/product",
    component: _5857a7c2,
    name: "product"
  }, {
    path: "/register",
    component: _bdedffc0,
    name: "register"
  }, {
    path: "/transfer",
    component: _618359d8,
    name: "transfer"
  }, {
    path: "/withdraw",
    component: _53882d59,
    name: "withdraw"
  }, {
    path: "/",
    component: _69006163,
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
