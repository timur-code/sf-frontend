<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <div>
  


  <div class="row">
    <div>
    <img
    src="~/assets/ocean.jpg"
    />
</div>
  <div>
      <label for="" class="required">Name of product </label>
      <input type="text" />
  </div>
  <div>
      <label for="">Price of product </label>
      <input type="text" />
  </div>                                                                                                                                     <div>
      <label for="">Description </label>
      <input type="text" />
  </div>
</div>

    <button
      type="button"
      class="button2"
      id="withdraw"
      :style="inputStyle"
      @click.prevent="chukumba"
    >
      
    </button>

  </div>
    </div>
</template>

<script>
export default {
    props: {
    mainStyle: String,
    inputStyle: String,
  }
}



</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
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

.fa {
  font-size: 28px;
  color: #000000;
}

input {
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
input:hover {
  box-shadow: 0px 0px 8px -5px #000000;
}
input:active {
  box-shadow: 0px 0px 8px -5px #000000;
}
#signin {
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
.button {
  cursor: pointer;
  user-select: none;
}

.app{
 cursor: pointer;
  user-select: none;
  background: white;
}

.nuxt-link {
  color: black;
  background: black;
}

.button2 {
  cursor: pointer;
  user-select: none;
  background: white;
}

#signup{
  cursor: pointer;
  user-select: none;
  background: white;
}


img {
  height: 100px;
  width: 100px;
  margin: 10px;
  user-select: none;
}

.row {
  overflow: hidden;
  vertical-align: top;
}

.row > div {
  float: left;
  width: 50%;
  padding-left: 10px; /* Отступ слева */
  padding-bottom: 10px
}

label {
  display: inline-block;
  padding-right: .66em;
  position: relative;
}

label.required::after {
  content: "*";
  color: #c00;
  display: block;
  position: absolute;
    top: 0;
    right: 0;
}
</style>