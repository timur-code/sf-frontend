<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <div class="input d-flex justify-content-center">
     <span class="input-group-addon">
       <i class="fa fa-envelope-o fa-fw"></i>
       </span>
     <input class="form-control" type="text" v-model="userName" placeholder="Email" style="width: 40%;">
    </div>
    <div class="input d-flex justify-content-center">
     <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
     <input class="form-control" type="password" v-model="password" placeholder="Password" style="width: 40%;">
    </div>
    <br/>
      <button
        class="button"
        id="signin"
        @click.prevent="login"
        :style="inputStyle"
      > Sign in
      </button>
    <br/>
      <div class="link">
        <nuxt-link
        class="bottom-footer__link"
        to="/register">
          Sign up
        </nuxt-link>

      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  name: "Login",
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String,
  },
  async mounted(){
    
  },
  created() {
    // axios.defaults.headers.common['Content-Type'] = 'application/json';
    // axios.defaults.headers.common['Accept'] = 'application/json';
  },
  methods: {


    async login (){
        
        const response = await fetch('https://sf-rant-backend.herokuapp.com/authenticate', {
        method: 'POST',
        headers:
            {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
              /*,
              'Authorization': 'Bearer ' + jwt*/
            },
        body: JSON.stringify({
          username: this.userName,
          password: this.password
        })
        
      }).then(response=> response.json()).then((responseData)=> {
        
        console.log(responseData.jwt)
        localStorage.setItem('jwt', responseData.jwt);
        
      }).catch(err => {
        console.log(err)
        alert('Incorrect email or password')
        window.location.reload();
      })
      
      await this.$router.push('/cabinet');
       
    }
  }
};
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
  border-radius: 3rem ;
  border:#000000;
  padding: 10px;
  text-align: center;
  margin: 5px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
   cursor: pointer;
  user-select: none;
}


#signin {
  border-radius: 3rem;
  border:#000000;
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

link {
  border-radius: 3rem ;
  border:#000000;
  padding: 10px;
  text-align: center;
  margin: 5px;
  width: 30%;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
   cursor: pointer;
  user-select: none;
  border:grey;
  margin:grey;
}

.bottom-footer__link {
  color:black;
  text-decoration: none;
  margin-block: 56px;
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
