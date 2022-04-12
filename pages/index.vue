<template>
    
  <div class="main" :style="mainStyle">
    <h1>RANT</h1>
    
    <i class="fa fa-envelope-o fa-fw"></i>
    <fa icon="coffee"/>

    <div class="input">
     <span class="input-group-addon">
       <i class="fa fa-envelope-o fa-fw"></i>
       </span>
     <input class="form-control" type="text" placeholder="Email">
</div>
    <div class="input">
     <span class="input-group-addon"><i class="fa fa-key fa-fw"></i></span>
     <input class="form-control" type="password" placeholder="Password">
</div>

  
   
    <input
      type="button"
      value="Sign In"
      class="button"
      id="signin"
      :style="inputStyle"
    />

     <br />
    <input
      type="button"
      value="forgot password"
      class="button2"
      id="fpassword"
      :style="inputStyle"
    />

    <input
      type="button"
      value="sign up"
      class="button2"
      id="signup"
      :style="inputStyle"
    />
    
  </div>
</template>

<script>
export default {
  name: "Login",
  //Custom style for main and input for make the page responsive:
  props: {
    mainStyle: String,
    inputStyle: String,
  },
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