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
      @click.prevent="withdraw"
    >
      Withdraw
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
    money: ''
    }
  },
  async mounted(){
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
        
        localStorage.setItem('wallet', JSON.stringify(con));

    },
    
       
    
    methods: {
    name: 'withdraw',
     async withdraw() {
         const user = JSON.parse(localStorage.getItem('user'));
         const wall = JSON.parse(localStorage.getItem('wallet'));
         if(wall.balance >= this.money){
        const response = await fetch(`https://sf-rant-backend.herokuapp.com/user/${user.id}/withdraw`, {
          method: 'POST',
          
          headers:
              {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt')
              },
              
            body: JSON.stringify({
                balance: wall.balance - this.money
            })
            
        })
        console.log(response.json());
        await this.$router.push('/cabinet');
        } else {
            alert('No enough money.')
        }
        
        
     }

        

    }
  }
</script>










