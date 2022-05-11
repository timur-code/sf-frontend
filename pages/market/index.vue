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
        <div class="d-flex justify-content-center">
            <div v-if="categories && categories.length > 0" class="dropdown">
                <button class="dropbtn">Categories</button>
                <div class="dropdown-content">
                  <a
                      v-for="category in categories"
                      @click.prevent="chooseCategory(category)"
                  >
                    {{category}}
                  </a>
                </div>
            </div>
        </div>
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
import NavBar from "../../components/navbar/NavBar";
import ProductCard from "../../components/cards/ProductCard";

export default {
  components: {
    ProductCard,
    NavBar
  },
  props: {
    mainStyle: String,
    inputStyle: String,
  },
  data() {
    return {
      products: [],
      categories: [],
      chosenCategory: ''
    }
  },
  async created() {
    if(process.browser) {
      this.products = await this.getProducts();
      console.log(this.products)
      this.categories = await this.getCategories()
      this.categories = this.categories.map(el => el.categoryName)
      console.log(this.categories)
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
        headers: headers,
        params: {
          category: this.category
        }
      }).then(response => response.data)
    },
    async getCategories() {
      let jwt = localStorage.getItem('jwt');
      const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
      return await this.$axios.get('/market/getCategories', {
        headers: headers
      }).then(response => response.data)
    },
    async chooseCategory(category) {
      console.log(category)
      this.category = category
      this.products = await this.getProducts()
    }
  }
}
</script>

<style scoped lang="scss">
.products-list {
  gap: 2rem;
}

.dropdown {
  position: relative;
  display: inline-block;

  &:hover .dropdown-content {
    display: block;
  }

  .dropbtn {
    background-color:white;
    color: #0000008C;
    padding: 0.5em;
    font-size: 1.5em;
    border: none;
    cursor: pointer;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;

    a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      user-select: none;
      cursor: pointer;
    }

    a:hover {
      background-color: #f1f1f1
    }
  }
}

</style>