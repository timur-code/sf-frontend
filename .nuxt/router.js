import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
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
=======
const _ce6ebb16 = () => interopDefault(import('..\\pages\\addproduct\\index.vue' /* webpackChunkName: "pages/addproduct/index" */))
const _0304728e = () => interopDefault(import('..\\pages\\cabinet\\index.vue' /* webpackChunkName: "pages/cabinet/index" */))
const _cb926a9a = () => interopDefault(import('..\\pages\\deposit\\index.vue' /* webpackChunkName: "pages/deposit/index" */))
const _5857a7c2 = () => interopDefault(import('..\\pages\\product\\index.vue' /* webpackChunkName: "pages/product/index" */))
const _bdedffc0 = () => interopDefault(import('..\\pages\\register\\index.vue' /* webpackChunkName: "pages/register/index" */))
const _618359d8 = () => interopDefault(import('..\\pages\\transfer\\index.vue' /* webpackChunkName: "pages/transfer/index" */))
const _53882d59 = () => interopDefault(import('..\\pages\\withdraw\\index.vue' /* webpackChunkName: "pages/withdraw/index" */))
const _69006163 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
>>>>>>> dc352b89a26f54d4a78cb7c0c657a20f4986b37f

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
<<<<<<< HEAD
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
=======
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
>>>>>>> dc352b89a26f54d4a78cb7c0c657a20f4986b37f
    name: "register"
  }, {
    path: "/transfer",
    component: _618359d8,
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
>>>>>>> dc352b89a26f54d4a78cb7c0c657a20f4986b37f
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
