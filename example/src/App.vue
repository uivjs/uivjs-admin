<template>
  <div>
    <v-login>
    </v-login>
    <my-com>
      test22
    </my-com>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import '@speedaf-vui/login';
// import VLogin from '@speedaf-vui/login';


const MyCom = defineComponent({
  name: 'MyCom',
  template: `
    <div>特效师</div>
  `,
})

// console.log('VLogin::', VLogin)
// eslint-disable-next-line
// import VLogin from '@speedaf-vui/login'
export default defineComponent({
  components: {
    // VLogin,
    MyCom
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
