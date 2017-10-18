<template>
  <button class='b2b-button'>normal button</button>  
</template>

<script>
  export default {
    name: 'b2b-button',
    data () {
      return {}
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
}

.b2b-button:hover {background-color: #5D7AFF}

.b2b-button:active {
  background-color: #5D7AFF;
  transform: translateY(2px);
}
</style>
