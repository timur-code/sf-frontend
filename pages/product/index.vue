<template>
<div class="main" :style="mainStyle">
<h1>RANT</h1>





<div class="ss">
<img
src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/1280px-Clouds_over_the_Atlantic_Ocean.jpg"
/>
</div>

<div class="row">
<div class="kk">
<div>
<label for="" class="required">Name of product </label>
<input type="text" />
</div>
<div>
<label for="">Price of product </label>
<input type="text" />
</div>
<div>
<label for="">Lorem Ipsum is simply dummy text of the printing and typesetting industry </label>
<input type="text" />
</div>
</div>
</div>




<button
type="button"
class="btmarket"
id="withdraw"
:style="inputStyle"
@click.prevent=""
>
Add to Cart
</button>

<button
type="button"
class="btcabinet"
id="withdraw"
:style="inputStyle"
@click.prevent="link"
>
Cabinet
</button>

</div>
</template>

<script>
export default {
    props: {
    mainStyle: String,
    inputStyle: String,
  },
    async mounted(){
      
        const response = await fetch('https://sf-rant-backend.herokuapp.com/market/${productId}/get', {
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

    
  methods:{
    name:'cabinet',
    async link(){
      await this.$router.push('/cabinet');
    },
    name:'prodinfo',
    
  }

}




</script>

<style>
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
.btmarket{
  border-radius: 3rem;
  border: none;
  padding: 10px;
  outline: none;
  width: 30%;
  cursor: pointer;
  user-select: none;
  background: rgb(184, 183, 183);
    position: absolute;
    bottom: 20px;
    right: 20px;
}
.btcabinet{
  border-radius: 3rem;
  border: none;
  padding: 10px;
  outline: none;
  width: 30%;
  cursor: pointer;
  user-select: none;
  background: rgb(184, 183, 183);
    position: absolute;
    bottom: 20px;
    left: 20px;
}
#signup{
cursor: pointer;
user-select: none;
background: white;
}


img {
height: 250px;
width: 250px;
margin: 10px;
user-select: none;
}

.row {
overflow: hidden;
vertical-align: top;
}

.row > div {
width: 50%;


}

.kk{
  float:right;
  padding-right: 90px;
  margin-left:0px;
}
.ss{
  float:left;
  padding-left: 70px;
  padding-top: 10px;
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