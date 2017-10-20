<template>
  <button class='b2b-secondary-button' v-bind:class='{ enabled: button_attr.enabled, disabled: !button_attr.enabled }' v-on:click='clicked'>{{ button_attr.value }}</button>
</template>

<script>
  export default {
    name: 'b2b-secondary-button',
    props: ['button_attr'],
    methods: {
      disable: function () {
        this.button_attr.enabled = false
      },
      enable: function () {
        this.button_attr.enable = true
      },
      clicked: function ($event) {
        this.$emit('clicked', $event, this.button_attr)
      }
    }
  }
</script>

<style scoped>
.b2b-secondary-button {
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #4565F7;
  background-color: #FFFFFF;
  border: solid 1px #82A7FF;
  width: 90px;
  height: 30px;
  border-radius: 2px;
}

.b2b-secondary-button.enabled {
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #4565F7;
  background-color: #FFFFFF;
  border: solid 1px #82A7FF;
  width: 90px;
  height: 30px;
}

.b2b-secondary-button.enabled:hover {
  background-color: #5D7AFF;
  box-shadow: 0 0 4px 0 #82A7FF;
  color: #FFFFFF; 
}

.b2b-secondary-button.enabled:active {
  background-color: #5D7AFF;
  box-shadow: 0 0 4px 0 #82A7FF;
  transform: translateY(2px);
}
</style>
