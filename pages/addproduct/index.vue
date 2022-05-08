<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <p v-if="errorMessage.length > 0" class="text-danger">{{errorMessage}}</p>
    <input
      v-model="name"
      type="text"
      name="name"
      id="name"
      placeholder="Name"
    />
    <br />
    <input
      v-model="imgLink"
      type="text"
      name="Image"
      id="Image"
      placeholder="Image"
    />
    <br />
    <input
      v-model="description"
      type="text"
      name="desc"
      id="desc"
      placeholder="Description"
    />
    <br />
    <b-form-select
        v-model="category"
        :options="categories"
        name="category"
        id="category"
    >
      <template #first>
        <b-form-select-option value="" disabled>Please select an option</b-form-select-option>
      </template>
    </b-form-select>
    <br />
    <input
      v-model="price"
      type="number"
      name="price"
      id="price"
      placeholder="Price"
    />
    <br />
   

   <button
      class="button"
      id="addproduct"
      :style="inputStyle"
      @click="addprod"
    >Add product
    </button>

  </div>
</template>


<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  name: "addprod",
  components: {
    BFormSelect
  },
  data() {
    return {
    name: '',
    imgLink: '',
    description: '',
    category: '',
    categories: [],
    price: 0,
    errorMessage: ''
    }
  },
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String
  },
  async beforeMount() {
    this.categories = await this.getCategories()
    this.categories = this.categories.map(el => el.categoryName)
    console.log(this.categories)
  },
  methods: {
      async addprod() {
        if (this.name.length === 0 ||
            this.imgLink.length === 0 ||
            this.description.length === 0 ||
            this.category.length === 0 ||
            this.price === 0) {
          this.errorMessage = 'Enter all of the fields'
          return null
        }

        const response = await fetch('https://sf-rant-backend.herokuapp.com/market/add', {
          method: 'POST',
          headers:
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
              },
          body: JSON.stringify({
            name: this.name,
            imgLink: this.imgLink,
            description: this.description,
            categoryName: this.category,
            price: this.price
          })
        }).then(response=>response.json()).then((responseData) => {
          console.log(responseData)
        })
        await this.$router.push('/cabinet')
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
      }
    }
  }
</script>
<style>
/* Import Poppins font: */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.main {
  background: rgba(255, 255, 255, 0.4);
  position: absolute;
  top: 20%;
  left: 30%;
  width: 40%;
  text-align: center;
  padding: 5px;
  border-radius: 3rem;
  box-shadow: 0px 0px 8px -5px #000000;
  padding-top: 3%;
  padding-bottom: 5%;
  font-family: "Poppins", sans-serif;
}
h1 {
  cursor: default;
  user-select: none;
}



input {
  border-radius: 3;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 5px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}
input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}
input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}
#register {
  border-radius: 3rem;
  border: none;
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
}

button {

  cursor: pointer;
  user-select: none;
}

.button2 {
  cursor: pointer;
  user-select: none;
  background: white;
}
img {
  height: 2.2rem;
  margin: 10px;
  user-select: none;
}
img:hover {
  box-shadow: 0px 0px 8px -5px #000000;
  cursor: pointer;
  border-radius: 200rem;
}
</style>
