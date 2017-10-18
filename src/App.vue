<template>
  <div id="app">
    <img src="./assets/transfar-chemistry.png">
    <router-view/>
    <b2b-button></b2b-button>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  export default {
    components: {
      'b2b-button': ButtonComponent
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;  
}
</style>
