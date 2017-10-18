<template>
  <button class='b2b-secondary-button' v-bind:class='{ enabled: enabled, disabled: !enabled }' v-on:click='toggleButtonStatus'>secondary</button>  
</template>

<script>
  export default {
    name: 'b2b-secondary-button',
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
