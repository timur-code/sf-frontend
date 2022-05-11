<template>
    <div>
  
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
      <nuxt-link class="navbar-brand" :to="'/cabinet'">Finance App</nuxt-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li class="nav-item"><nuxt-link class="nav-link" aria-current="page" :to="'/cabinet'">Home</nuxt-link></li>
          <li class="nav-item"><nuxt-link class="nav-link" :to="'/market'">Store</nuxt-link></li>
          <li class="dropdown">
    <div class="dropdown">
  <button class="dropbtn">Categories</button>
  <div class="dropdown-content">
  <a href="#">TV</a>
  <a href="#">PC</a>
  <a href="#">Games</a>
  </div>
</div>
  </li>
        </ul>
        <form class="d-flex">
          <nuxt-link class="btn btn-outline-dark" :to="'/market/cart'">
            <i class="bi-cart-fill me-1"></i>
            Cart
            <!--<span class="badge bg-dark text-white ms-1 rounded-pill">0</span>-->
          </nuxt-link>
        </form>
      </div>
    </div>
  </nav>
        
  
        <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Market</h1>

                </div>
            </div>
        </header>
        <!-- Section-->
        <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <div class="d-flex flex-row flex-wrap products-list justify-content-center" v-if="products">
                    <product-card
                        v-for="product in products"
                        :key="product.id"
                        :id="product.id"
                        :name="product.name"
                        :img-link="product.imgLink"
                        :price="product.price"
                    />
                </div>
            </div>
        </section>
         <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">SF|RANT &copy; Finance App</p></div>
        </footer>
    </div>
</template>

<script>

import ProductCard from "../../components/cards/ProductCard";

export default {
  components: {
    ProductCard
  },
  props: {
    mainStyle: String,
    inputStyle: String,
  },
  data() {
    return {
      products: []
    }
  },
  async created() {
    if(process.browser) {
      this.products = await this.getProducts();
      console.log(this.products)
    }
  },
  methods: {
    async getProducts() {
      let jwt = localStorage.getItem('jwt');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
      return await this.$axios.get('/market/getAll', {
        headers: headers
      }).then(response => response.data)
    }
  }
}
</script>

<style scoped>



.dropbtn {
  background-color:white;
  color: #0000008C;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
  display: block;
}


.products-list {
  gap: 2rem;
}

</style>