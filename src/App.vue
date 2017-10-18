<template>
  <div id="app">
    <img src="./assets/transfar-chemistry.png">
    <router-view/>
    <b2b-button></b2b-button>
    <b2b-secondary-button></b2b-secondary-button>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  import SecondaryButtonComponent from '@/components/SecondaryButtonComponent'
  export default {
    components: {
      'b2b-button': ButtonComponent,
      'b2b-secondary-button': SecondaryButtonComponent
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
