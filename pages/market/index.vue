<template>
    <div>
        <nav-bar/>
        <!-- Header-->
        <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Market</h1>

                </div>
            </div>
        </header>
        <!-- Section-->
        <!--
        <Dropdown
    :options="[{ id: 1, name: 'Option 1'}, { id: 2, name: 'Option 2'}]"
    v-on:selected="validateSelection"
    v-on:filter="getDropdownValues"
    :disabled="false"
    name="zipcode"
    :maxItem="10"
    placeholder="Please select an option">
      </Dropdown>
-->


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
/*import Dropdown from 'vue-simple-search-dropdown';*/
import NavBar from "../../components/navbar/NavBar";
import ProductCard from "../../components/cards/ProductCard";

export default {
  components: {
    NavBar,
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
.products-list {
  gap: 2rem;
}
</style>