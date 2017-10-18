<template>
  <div id="app">
    <img src="./assets/transfar-chemistry.png">
    <router-view/>
    <div>
      <h4>Buttons</h4>
      <b2b-button></b2b-button>       
      <b2b-secondary-button></b2b-secondary-button>
      <br>
    </div>
    <div>
      <h4>Input Textboxes</h4>
      <b2b-textbox></b2b-textbox>
      <br>
    </div>
    <div>
      <h4>Select</h4>
      <b2b-select></b2b-select>
      <br>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  import SecondaryButtonComponent from '@/components/SecondaryButtonComponent'
  import TextboxComponent from '@/components/TextboxComponent'
  import SelectComponent from '@/components/SelectComponent'

  export default {
    components: {
      'b2b-button': ButtonComponent,
      'b2b-secondary-button': SecondaryButtonComponent,
      'b2b-textbox': TextboxComponent,
      'b2b-select': SelectComponent
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
