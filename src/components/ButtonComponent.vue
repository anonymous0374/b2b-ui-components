<template>
  <button class='b2b-button' v-bind:class='{ enabled: button_attr.enabled, disabled: !button_attr.enabled }' v-on:click='clicked'>{{ button_attr.value }}</button>  
</template>

<script>
  export default {
    name: 'b2b-button',
    enabled: true,
    props: ['button_attr'],
    data: function () {
      return {
        enabled: true
      }
    },
    methods: {
      disable: function () {
        this.enabled = false
      },
      enable: function () {
        this.enable = true
      },
      clicked: function () {
        // emmit this event
        this.$emit('clicked')
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
