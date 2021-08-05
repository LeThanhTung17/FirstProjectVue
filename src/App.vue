<template>
  <div id="app">
    <Header />
    <Hobbies />
  </div>
</template>

<script>
import Header from './components/Header'
import Hobbies from './components/Hobbies'

export default {
  name: 'App',
  components: { Header, Hobbies }
}
</script>

<style>
#app {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0 auto;
}
</style>