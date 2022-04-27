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










