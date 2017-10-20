Vue.js learning notes -- by j-sparrow, wechat_id: kai_zhou_sg

general concepts:

1 the core of Vue.js, is a template system, that allows developers to 
declaratively render data to the DOM easily -- in a recative way.

2 component composing allows Vue.js to build large-scale applications.
  2.1 data v.s. props
  2.2 props and events

3 an vue instance v.s. a component

4 multiple pages application v.s. single page application

details

1 template syntax(binding syntax in various scenarios)
  1.1 easy cases are documented on its official website: https://vuejs.org/v2/guide/syntax.html
  1.2 there are tricky scenarios I met, and hereby documented here:
    (1) a component just render data from INSIDE itself(from the data property), and the data goes to an element's outterHtml within its template:    
    <template>
      <span>{{ message }}</span>
    </template>
    <script>
      module.exports = {
        data: function () {
          return {
            message: 'hello world' // this message property(its value: hello world) will be rendered(interpolated to {{ message }} in template)
          }
        }
      }
    </script>
    (2) the same case as case (1), only that the data is an object:
    <template>
      <span>{{ message.text }}</span>
    </template>
    <script>
      module.exports = {
        data: function () {
          return {
            message: {
              text: 'hello world'
            }
          }
        }
      }
    </script>
    (3) a component just render data from INSIDE itself(from the data property), and the data goes to an element's attributes within its template:
    <template>
      <button :value="txt_on_btn"></button> <!--note here, the syntax is DIFFERENT, it's not {{}} again, it's just "", it's a BINDING, not INTERPOLATING -->
    </template>
    <script>
      module.exports = {
        data: function () {
          return {
            txt_on_btn: 'hello world' // this message property(its value: hello world) will be rendered(interpolated to {{ message }} in template)
          }
        }
      }
    </script>
    (4) the same case as case (3), only that the data is an object:
    <template>
      <button :value="btn_attr.txt_on_btn"></button>
    </template>
    <script>
      module.exports = {
        data: function () {
          return {
            btn_attr: {
              txt_on_btn: 'hello world' // this message property(its value: hello world) will be rendered(interpolated to {{ message }} in template)
            }
          }
        }
      }
    </script>
    (5) a component accepts data from OUTSIDE(from other components maybe). This REQUIRES another parent components providing data(which may again come from another accestor)
    -- parent component(provides an object from its data property):
    <template>
      <child-component v-bind:comp_attr="random_data"></child-component>
    </template>
    <script>
      moudle.exports = {
        data: function () { // pay attention here: parent provides data to child-component through data property, NOT props property(props should come from parent's parent, which DOES NOT exist)
          return {
            random_data: "some data hold by parent component, it could be provided to the child-component, but not necessarily so"
          }
        }
      }
    </script>
    -- child component(accepts data and bind it to its attr property inside):
    <template>
      <input type='text' v-bind:value="comp_attr" />
    </template>
    <script>
      module.exports = {
        props: ['comp_attr']
      }
    </script>



