<template>
  <div id="app">
    <div class='text-center'><img src="./assets/transfar-chemistry.png"></div>
    <router-view/>
    <div class='component text-center'>
      <h4>Buttons</h4>
      <b2b-button :button_attr="btn1_attr" v-on:clicked='btn1_toggleStatus'></b2b-button>
      <b2b-secondary-button :button_attr="btn2_attr" v-on:clicked='btn2_toggleStatus'></b2b-secondary-button>
    </div>
    <div class='component text-center'>
      <h4>Input Textboxes</h4>
      <b2b-textbox :txtbox_attr='txtbox_attr'></b2b-textbox>
      <b2b-button :button_attr="btn3_attr" v-on:clicked='btn3_clicked'></b2b-button>
    </div>
    <div class='component text-center'>
      <h4>Select</h4>
      <b2b-select :select_attr='select_attr' v-on:change='select_change'></b2b-select>
      <b2b-button :button_attr="btn4_attr" v-on:clicked='btn4_clicked'></b2b-button>
      <br>
    </div>
    <div class='component text-center'>
      <h4>Pagination</h4>
      <b2b-pagination :pages_attr='pages_attr'></b2b-pagination>
      <br>
    </div>
    <div class='component text-center'>
      <h4>Item Showcase</h4>
      <div v-for="item in items" class='showcase'>
        <b2b-item-showcase :item_showcase_attr='item.item_showcase_attr'></b2b-item-showcase>
      </div>
    </div>
    <div class='component text-center'>
      <h4>Multiple Checkbox</h4>
      <div>
        <b2b-multi-checkbox :multi_checkbox_attr='multi_checkbox_attr'></b2b-multi-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
  import ButtonComponent from '@/components/ButtonComponent'
  import SecondaryButtonComponent from '@/components/SecondaryButtonComponent'
  import TextboxComponent from '@/components/TextboxComponent'
  import SelectComponent from '@/components/SelectComponent'
  import PaginationComponent from '@/components/PaginationComponent'
  import ItemShowcaseComponent from '@/components/ItemShowcaseComponent'
  import MultiCheckboxComponent from '@/components/MultiCheckboxComponent'

  export default {
    components: {
      'b2b-button': ButtonComponent,
      'b2b-secondary-button': SecondaryButtonComponent,
      'b2b-textbox': TextboxComponent,
      'b2b-select': SelectComponent,
      'b2b-pagination': PaginationComponent,
      'b2b-item-showcase': ItemShowcaseComponent,
      'b2b-multi-checkbox': MultiCheckboxComponent
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
          records_per_page: 10,
          current_page_index: 2,
          total: 5
        },
        items: [{item_showcase_attr: {
          name: 'name1',
          description: 'some brief description',
          price: 'price',
          image_url: require('./assets/items/1.png')
        }}, {item_showcase_attr: {
          name: 'name1',
          description: 'some brief description',
          price: 'price',
          image_url: require('./assets/items/2.png')
        }}, {item_showcase_attr: {
          name: 'name1',
          description: 'some brief description',
          price: 'price',
          image_url: require('./assets/items/3.jpg')
        }}, {item_showcase_attr: {
          name: 'name1',
          description: 'some brief description',
          price: 'price',
          image_url: require('./assets/items/4.jpg')
        }}, {item_showcase_attr: {
          name: 'name1',
          description: 'some brief description',
          price: 'price',
          image_url: require('./assets/items/5.jpg')
        }}],
        multi_checkbox_attr: {
          id: 'checkbox_1'
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
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.component {
  margin-bottom: 2em;
  padding-bottom: 2em;
  width: 90%;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border: solid 1px #dddddd;
}

.text-center {
  text-align: center;
}

.showcase {
  display: inline-flex;
}
</style>
