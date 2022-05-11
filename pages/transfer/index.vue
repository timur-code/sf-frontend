<template>
<div>
<nav-bar/>

  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <h1>Transfer</h1>

<div class="transfer-form">



<div class="form-group">
<label class="text-field__label" for="login">Phone:</label>
<input type="text" v-model="user" class="form-control" autocomplete="off" value="0">
</div>  

 <div class="form-group">
<label class="text-field__label" for="login">You send: </label>
<input type="text" v-model="money" class="form-control" autocomplete="off" value="0">
</div>


</div>


<button
      type="button"
      class="button2"
      id="transfer"
      :style="inputStyle"
      @click.prevent="transfer"
    >
      Transfer
    </button>


</div>


</div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
    props: {
    mainStyle: String,
    inputStyle: String,
  },
  data() {
    return {
    user: '',
    money: ''
    }
  },
  async mounted(){
       this.refreshbalance()
    },
    
     
    
    methods: {
    name: 'transfer',
     async transfer() {
       console.log(this.money);
         const user = JSON.parse(localStorage.getItem('user'));  
        const response = await fetch(`https://sf-rant-backend.herokuapp.com/user/${user.id}/transfer`, {
          method: 'POST',
          headers:
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
              },
              
            body: JSON.stringify({
                userTo: this.user,
                amount: this.money 

            })
          
        })
      
        console.log(response.json());
        this.refreshbalance()
        },
        name: 'refreshbalance',
      async refreshbalance(){
      const user = JSON.parse(localStorage.getItem('user'));
        const response = await fetch(`https://sf-rant-backend.herokuapp.com/user/${user.id}/balance`, {
       method: 'GET',
        headers: {'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('jwt')
        }
      })
      const con = await response.json();
        console.log(con);
        this.bal = JSON.parse(con.balance);
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

.fa {
  font-size: 28px;
  color: #000000;
}

.transfer-form{
  margin-bottom: 1rem;
}
.text-field__label {
  display: block;
  margin-bottom: 0.25rem;
}
.text-field__input::placeholder {
  color: #212529;
  opacity: 0.4;
}
input {
  padding: 10px;
  text-align: center;
  outline: none;
  margin: 10px;
  width: 30%;
  box-sizing: border-box;
  font-weight: 400;
  display: block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
}



#signin {
  box-shadow: grey;
}
.button {
  cursor: pointer;
  user-select: none;
}

.button2 {
  cursor: pointer;
  user-select: none;
  background: white;
  border: inherit;
  margin: auto;
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