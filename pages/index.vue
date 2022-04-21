<template>

  <div class="main" :style="mainStyle">
    <h1>RANT</h1>

    <i class="fa fa-envelope-o fa-fw"></i>
    <fa icon="coffee"/>

    <div class="input">
     <span class="input-group-addon">
       <i class="fa fa-envelope-o fa-fw"></i>
       </span>
     <input class="form-control" type="text" v-model="userName" placeholder="Email">
</div>
    <div class="input">
     <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
     <input class="form-control" type="password" v-model="password" placeholder="Password">
</div>


    <button
      class="button"
      id="signin"
      @click.prevent="login"
      :style="inputStyle"
    > Sign in
    </button>

    
     <br />
     <div id="app">
    <input
      type="button"
      value="forgot password"
      class="button2"
      id="fpassword"
      :style="inputStyle"
    />

    <nuxt-link
        to="/register"
        class="button3"
        id="signup"
        :style="inputStyle"
    >
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
  created() {
    // axios.defaults.headers.common['Content-Type'] = 'application/json';
    // axios.defaults.headers.common['Accept'] = 'application/json';
  },
  methods: {
    async login (){
      await fetch('https://sf-rant-backend.herokuapp.com/authenticate', {
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
      }).then(response=> response.json()).then((responseData) => {
        console.log(responseData.jwt)
        localStorage.setItem('jwt', responseData.jwt);
        
      })
      await this.$router.push('/cabinet');
    }
  }
};
</script>

