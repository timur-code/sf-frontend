<template>
  <div v-if="product">
    <nav-bar/>
    <div class="w-75 mx-auto p-5">
      <div class="d-flex flex-row">
        <div class="product-body flex-grow-1">
          <p class="product-name"><span class="font-weight-bold">Name: </span> {{product.name}}</p>
          <p><span class="font-weight-bold">Price: </span> ${{product.price}}</p>
          <p><span class="font-weight-bold">Description: </span> {{product.description}}</p>
          <p><span class="font-weight-bold">Seller: </span> {{product.owner.fullName}}</p>
          <p><span class="font-weight-bold">Category: </span> {{product.categoryName}}</p>
        </div>
        <div class="product-img w-50">
          <img loading="lazy" :src="product.imgLink" alt="img">
        </div>
      </div>
      <div class="product-footer">
        <b-button variant="success" @click="addToCart">
          Add to cart
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../../../../components/navbar/NavBar";
export default {
    components: {
      NavBar
    },
    data() {
      
        return {
          product: null
        }
    },
    async mounted(){
      if(process.browser)
        this.product = await this.loadProduct()
    },
    methods:{
        async loadProduct() {
            let jwt = localStorage.getItem('jwt');
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
            return await this.$axios.get(`/market/${this.$route.params.id}/get`, {
                headers: headers
            }).then(response => response.data)
        },
        addToCart() {
          let jwt = localStorage.getItem('jwt');
          fetch(`https://sf-rant-backend.herokuapp.com/market/${this.$route.params.id}/add`, {
              method: 'POST',
              headers:
                  {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                  }
          }).then(() => this.$router.push('/market/cart'))
        }
    }

}
</script>

<style lang="scss" scoped>

.product-img {
  img {
    box-sizing: border-box;
    width: 100%;
    object-fit: cover;
  }
}

.product-body {
  font-size: 1.5rem;

  .product-name{
    font-size: 2rem;
  }
}
</style>