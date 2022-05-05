<template>
  <div class="card rounded-3 mb-4">
    <div class="card-body p-4">
      <div class="row d-flex justify-content-between align-items-center">
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img
              :src="imgLink" loading="lazy"
              class="img-fluid rounded-3" alt="Cotton T-shirt" style="object-fit: cover; width: 150px; height: 150px">
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <p class="lead fw-normal mb-2">{{name}}</p>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <h5 class="mb-0">${{ price }}</h5>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <b-button variant="danger" @click="removeFromCart">Remove</b-button>
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
  },
  methods: {
    async removeFromCart () {
      //Пока не работает на бэкенде, позже будет
      let jwt = localStorage.getItem('jwt');
      fetch(`https://sf-rant-backend.herokuapp.com/market/cart/${this.id}/remove`, {
        method: 'POST',
        headers:
            {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${jwt}`
            }
      })
      this.$emit('removedItemFromCart')
    }
  }
}
</script>

<style scoped>
</style>