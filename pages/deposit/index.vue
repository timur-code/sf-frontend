<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    
    <input
      v-model="number"
      type="text"
      name="number"
      id="number"
      placeholder="Number"
    />
    <br />
    <input
      v-model="number"
      type="text"
      name="phone"
      id="phone"
      placeholder="Phonenumber"
    />
    <br />

    <button
      type="button"
      class="button2"
      id="Deposit"
      :style="inputStyle"
      @click.prevent="deposit">
    </button>
     

    <nuxt-link
        to="/"
        class="button2"
    >
      <span>Back</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "deposit",
  data() {
    return {
    number: ''
    }
  },
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String
  },
  
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
#signin {
  box-shadow: grey;
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
