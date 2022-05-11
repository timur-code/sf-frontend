<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <input
      v-model="email"
      type="text"
      name="email"
      id="email"
      placeholder="Email"
    />
    <br />
    <input
      v-model="name"
      type="text"
      name="fullName"
      id="fullName"
      placeholder="FullName"
    />
    <br />
    <input
      v-model="number"
      type="text"
      name="phone"
      id="phone"
      placeholder="+7-777-777-77-77"
    />
    <br />

    <input
      v-model="password"
      type="password"
      name="password"
      id="password"
      placeholder="Password"
    />
    <br />
    <button
      class="button"
      id="register"
      :style="inputStyle"
      @click.prevent="register"
    >Register
    </button>
  <br />
    <nuxt-link
        to="/"
        class="button2"
    >
      <span>Sign in</span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
    name: '',
    email: '',
    password: '',
    number: ''
    }
  },
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String
  },
  methods: {
     async register() {
       var phoneN = /^[2-9]\d{2}-\d{3}-\d{4}$/;
          // if (this.number.match(phoneN)){
          //   console.log()
          // } else {
          //   alert('Wrong phonenumber')
          //   window.location.reload();
          // }
        await fetch('https://sf-rant-backend.herokuapp.com/authorize', {
          method: 'POST',
          headers:
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
          body: JSON.stringify({
            fullName: this.name,
            email: this.email,
            phone: this.number,
            password: this.password
          })
        }).then(response=>response.json()).then((responseData) => {
          console.log(responseData.jwt)
          localStorage.setItem('jwt', responseData.jwt)
          
        }).catch(err => {
        console.log(err)
        
      })
        await this.$router.push('/');
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
