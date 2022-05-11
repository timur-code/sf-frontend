<template>
<div>
<nav-bar/>

<div class="main" :style="mainStyle">



    <h1>RANT</h1>
    <p> {{userName}} <br>
        {{emaill}}  <br>
        {{phoneNumber}}
      </p>


       <button
      class="button"
      id="logout"
      @click="logout"
      :style="inputStyle"
    >
      Log out

      </button>
</div>

</div>
</template>


<script>


import NavBar from "../../components/navbar/NavBar";
import Vue from 'vue';
export default Vue.extend({
  components: {
    NavBar,
  },

  data() {
    return {
      userName: '',
      emaill: '',
      phoneNumber: '' 
    }
  },
  async mounted() {
    
      const response = await fetch('https://sf-rant-backend.herokuapp.com/', {
       method: 'GET',
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      
        
      })
      const content = await response.json();
      console.log(content);
      localStorage.setItem('user', JSON.stringify(content));
      
      const user = JSON.parse(localStorage.getItem('user'));
      this.userName = 'UserName: ' + user.fullName;
      this.emaill = 'Email: ' + user.email;
      this.phoneNumber = 'PhoneNumber: ' + user.phone;
      
    },
    name: 'logout',
    methods:{
      async logout() {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        await this.$router.push('/');
      }
    }
    
  })

  
</script>

<style scoped>
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
#logout {
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
