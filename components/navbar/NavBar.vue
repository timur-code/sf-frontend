<template>
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <nuxt-link class="navbar-brand" :to="'/cabinet'">Finance App</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse justify-content-between navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><nuxt-link class="nav-link" aria-current="page" :to="'/cabinet'">Home</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/market'">Store</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/deposit'">Deposit</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/withdraw'">Withdraw</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/transfer'">Transfer</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/addproduct'">Add Product</nuxt-link></li>
        </ul>
        <form>
          <nuxt-link class="btn btn-outline-dark" :to="'/market/cart'">
            <i class="bi-cart-fill me-1"></i>
            Cart
            <!--<span class="badge bg-dark text-white ms-1 rounded-pill">0</span>-->
          </nuxt-link>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>
</style>