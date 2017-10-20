<template>
  <div id="app">
    <img src="./assets/transfar-chemistry.png">
    <router-view/>
    <div>
      <h4>Buttons</h4>
      <b2b-button :button_attr="btn1_attr" v-on:clicked='btn1_toggleStatus'></b2b-button>
      <b2b-secondary-button :button_attr="btn2_attr" v-on:clicked='btn2_toggleStatus'></b2b-secondary-button>
      <br>
    </div>
    <div>
      <h4>Input Textboxes</h4>
      <b2b-textbox></b2b-textbox>
      <b2b-button :button_attr="btn3_attr" v-on:clicked='btn3_clicked'></b2b-button>
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
    },
    data: function () {
      return {
        btn1_attr: {
          value: 'normal',
          enabled: true
        },
        btn2_attr: {
          value: 'secondary',
          enabled: true
        },
        btn3_attr: {
          value: 'disable',
          enabled: true
        }
      }
    },
    methods: {
      btn1_toggleStatus () {
        this.btn1_attr.enabled = !this.btn1_attr.enabled
      },
      btn2_toggleStatus () {
        this.btn2_attr.enabled = !this.btn2_attr.enabled
      },
      btn3_clicked () {
        this.btn3_attr.enabled = !this.btn3_attr.enabled
      }
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
