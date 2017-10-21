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
      <b2b-textbox :txtbox_attr='txtbox_attr'></b2b-textbox>
      <b2b-button :button_attr="btn3_attr" v-on:clicked='btn3_clicked'></b2b-button>
      <br>
    </div>
    <div>
      <h4>Select</h4>
      <b2b-select :select_attr='select_attr' v-on:change='select_change'></b2b-select>
      <b2b-button :button_attr="btn4_attr" v-on:clicked='btn4_clicked'></b2b-button>
      <br>
    </div>
    <div>
      <h4>Pagination</h4>
      <b2b-pagination :pages_attr='pages_attr'></b2b-pagination>
      <br>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  import SecondaryButtonComponent from '@/components/SecondaryButtonComponent'
  import TextboxComponent from '@/components/TextboxComponent'
  import SelectComponent from '@/components/SelectComponent'
  import PaginationComponent from '@/components/PaginationComponent'

  export default {
    components: {
      'b2b-button': ButtonComponent,
      'b2b-secondary-button': SecondaryButtonComponent,
      'b2b-textbox': TextboxComponent,
      'b2b-select': SelectComponent,
      'b2b-pagination': PaginationComponent
    },
    data: function () {
      return {
        btn1_attr: {
          enabled: true,
          value: 'normal'
        },
        btn2_attr: {
          enabled: true,
          value: 'secondary'
        },
        btn3_attr: {
          enabled: true,
          value: 'disable'
        },
        btn4_attr: {
          enabled: true,
          value: 'disable'
        },
        txtbox_attr: {
          disabled: false,
          placeholder: 'Please input here',
          text: ''
        },
        select_attr: {
          disabled: false,
          value: '1',
          options: [{
            name: '全部',
            value: 0
          }, {
            name: '待受理',
            value: 1
          }, {
            name: '已取消',
            value: 2
          }, {
            name: '已拒绝',
            value: 3
          }, {
            name: '已完成',
            value: 4
          }]
        },
        pages_attr: {
          pages_displayed: 3,
          total: 5
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
        this.txtbox_attr.disabled = !this.txtbox_attr.disabled
        this.txtbox_attr.disabled ? this.btn3_attr.value = 'enable' : this.btn3_attr.value = 'disable'
      },
      btn4_clicked () {
        this.select_attr.disabled = !this.select_attr.disabled
        this.txtbox_attr.disabled ? this.btn4_attr.value = 'enable' : this.btn4_attr.value = 'disable'
      },
      select_change (e, value) {
        console.log(value)
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
