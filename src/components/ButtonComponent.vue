<template>
  <button class='b2b-button' v-bind:class='{ enabled: enabled, disabled: !enabled }' v-on:click='toggleButtonStatus'>normal button</button>  
</template>

<script>
  export default {
    name: 'b2b-button',
    enabled: true,
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
      toggleButtonStatus: function () {
        if (!this.enabled) {
          return false
        } else {
          this.enabled = false
          return false
        }
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
