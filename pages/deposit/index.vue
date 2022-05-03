<template>
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    <h1>Withdraw</h1>

    <p> Balance:{{bal}} </p>

    <input
      v-model="money"
      type="number"
      name="email"
      id="email"
      placeholder="Type your sum"
    />  
    <button
      type="button"
      class="button2"
      id="withdraw"
      :style="inputStyle"
      @click.prevent="deposit"
    >
      Deposit
    </button>


    </div>
</template>

<script>
export default {
    props: {
    mainStyle: String,
    inputStyle: String,
  },
  data() {
    return {
    bal: '',
    money: 0
    }
  },
  async mounted(){
       this.refreshbalance()
    },
    
     
    
    methods: {
    name: 'deposit',
     async deposit() {
       console.log(this.money);
         const user = JSON.parse(localStorage.getItem('user'));  
        const response = await fetch(`https://sf-rant-backend.herokuapp.com/user/${user.id}/deposit`, {
          method: 'POST',
          headers:
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
              },
              
            body: JSON.stringify({
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








<<<<<<< HEAD
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


