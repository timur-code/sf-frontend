<template>
  <div>
    <nav-bar/>
    <section class="h-100" style="background-color: #eee;">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-10">

        <div class="d-flex justify-content-between align-items-center mb-4">
          <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                  class="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <cart-card
          v-for="product in cartProducts"
          :key="product.id"
          @removedItemFromCart="reloadCart"
          :id="product.id"
          :name="product.name"
          :price="product.price"
          :img-link="product.imgLink"
        />

        <div class="card mb-4">
          <div class="card-body p-4 d-flex flex-row">
            <div class="form-outline flex-fill">
              <input type="text" id="form1" class="form-control form-control-lg" />
              <label class="form-label" for="form1">Discound code</label>
            </div>
            <button type="button" class="btn btn-outline-warning btn-lg ms-3">Apply</button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <b-button variant="success" @click="buyCart" class="btn btn-warning btn-block btn-lg">Proceed to Pay</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>

</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import NavBar from "../../../components/navbar/NavBar";
import CartCard from "../../../components/cards/CartCard";

export default {
  components: {
    NavBar,
    CartCard
  },
  data () {
    return {
      cartProducts: []
    }
  },
  computed: {
    ...mapGetters({
      products: "cartProducts",
      total: "total",
    }),
  },
  async beforeMount() {
    this.cartProducts = await this.getCart();
    console.log(this.cartProducts)
  },
  methods: {
    ...mapMutations(["addToCart", "removeFromCart"]),
    async getCart() {
      let jwt = localStorage.getItem('jwt');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
      return await this.$axios.get('/market/cart', {
        headers: headers
      }).then(response => response.data)
    },
    async reloadCart() {
      this.cartProducts = await this.getCart();
    },
    async buyCart() {
      let jwt = localStorage.getItem('jwt');
      let response = await fetch(`https://sf-rant-backend.herokuapp.com/market/cart/buy`, {
        method: 'POST',
        headers:
            {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${jwt}`
            }
      }).then(response => {
        console.log(response.status)
      })
      await this.reloadCart()
    },
    checkout() {
      const string = this.products
        .map((item) => {
          return item.dish + " " + item.quantity + " шт.";
        })
        .join("\n");
      alert(string + "\nОбщая стоимость " + this.total + " руб.");
    },
  },
};
</script>

<style scoped>
.cart_list {
  margin-bottom: 20px;
}
.cart_item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border-bottom: 1px solid gray;
}
.cart_item > span {
  width: 300px;
}
.button {
  background: #fff;
  border: 1px solid #35a2c7;
  border-radius: 4px;
}
.button:hover {
  background: #35a2c7;
  color: #fff;
  border: none;
  cursor: pointer;
}
.item_button {
  margin-right: 10px;
}
.cart_button,
.remove_button {
  width: 30px;
  height: 30px;
}
.checkout {
  margin-top: 30px;
  padding: 10px;
  border-radius: 4px;
  background: #35a2c7;
  color: #fff;
  border: none;
  cursor: pointer;
}
.total {
  font-weight: bold;
}
</style>