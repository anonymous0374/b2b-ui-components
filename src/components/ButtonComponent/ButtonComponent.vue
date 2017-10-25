<template>
  <button
  :class='classObject'
  @click='clicked'
  v-html='button_attr.value'></button>
</template>

<script>
  // import 'kimi_button'
  import 'kimi-button'

  export default {
    name: 'b2b-button',
    props: {
      'button_attr': {
        type: Object,
        required: true,
        validator: function () {
          // some logic to validate this property field
          return true
        }
      }
    },
    computed: {
      classObject: function () {
        return {
          // 'b2b-button': true,
          'ui-button-morange': true,
          enabled: this.button_attr.enabled,
          disabled: !this.button_attr.enabled
        }
      }
    },
    data: function () {
      return {}
    },
    methods: {
      disable: function () {
        this.button_attr.enabled = false
      },
      enable: function () {
        this.button_attr.enable = true
      },
      clicked: function ($event) {
        // emmit this event with additional data
        this.$emit('clicked', $event, this.button_attr)
      }
    }
  }
</script>

<style scoped>
.b2b-button {
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #FFFFFF;
  background-color: #4565F7;
  border: none;
  width: 90px;
  height: 30px;
  border-radius: 2px;
}

.b2b-button.disabled {
  color: #FFFFFF;
  background-color: #CCCCCC;
}

.b2b-button.enabled {
  color: #FFFFFF;
  background-color: #4565F7;
}

.b2b-button.enabled:hover {background-color: #5D7AFF}

.b2b-button.enabled:active {
  background-color: #5D7AFF;
  transform: translateY(2px);
}
</style>
