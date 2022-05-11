<template>
  <div class="mb-5">
    <div class="card h-100 product-card">
      <!-- Product image-->
      <div class="w-100 p-2 d-flex justify-content-center">
        <img :src="imgLink" alt="..." />
      </div>
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">{{name}}</h5>
          <!-- Product price-->
          ${{price}}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div class="text-center">
          <nuxt-link class="btn btn-outline-dark mt-auto" :to="`/market/product/${id}`">View</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      default: 'Product'
    },
    imgLink: {
      type: String,
      default: 'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'
    },
    price: {
      type: Number,
      default: 1
    }

  }
}
</script>

<style lang="scss" scoped>
.product-card {
  width: 300px;

  img {
    box-sizing: border-box;
    width: 100%;
    object-fit: cover;
  }
}
</style>