<template>
  <main>
   <HomePage msg="Welcome to Your Vue.js App"/>
  </main>
</template>

<script>
import HomePage from './components/HomePage.vue';

export default {
  name: 'App',
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

body{
  background:linear-gradient(to bottom,#555,#999)
}
</style>
