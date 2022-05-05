<template>
<div class="main">
  <div id="login">
    <main>
      <!-- Different styles for different devices: -->
      <mq-layout mq="lg">
        <Login />
      </mq-layout>

      <mq-layout mq="md">
        <Login mainStyle="left:20%;width:60%;" inputStyle="width:40%;" />
      </mq-layout>

      <mq-layout mq="sm">
        <Login mainStyle="left:10%;width:80%;" inputStyle="width:50%;" />
      </mq-layout>
    </main>
  </div>

<div id="app" class="container">
    <nav-bar></nav-bar>
    <keep-alive> <router-view></router-view></keep-alive>
  </div>

  </div>
</template>

<script>
import Login from "./components/Login.vue";
export default {
  name: "App",
  components: {
    Login,
  },
  mounted: async () => {
    //Animate being hidden after 2500ms and then remove after 500ms
    await new Promise((r) => setTimeout(r, 2500));
    document.getElementById("white").classList.add("hidden");
    await new Promise((r) => setTimeout(r, 500));
    document.getElementById("white").remove();
  },
};

import NavBar from './components/NavBar.vue'
export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>

<style>
#login {
  background: url("assets/background.jpg") center center;
  background-size: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 24px;
  box-sizing: border-box;
}
html,
body,
#app {
  height: 100%;
  width: 1200px;
  margin: 20px auto;
}
* {
  box-sizing: border-box;
}
</style>