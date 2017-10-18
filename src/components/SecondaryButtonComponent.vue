<template>
  <button class='b2b-secondary-button'>normal button</button>  
</template>

<script>
  export default {
    name: 'b2b-secondary-button',
    data () {
      return {}
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
}

.b2b-secondary-button:hover {
  background-color: #5D7AFF;
  box-shadow: 0 0 4px 0 #82A7FF;
  color: #FFFFFF; 
}

.b2b-secondary-button:active {
  background-color: #5D7AFF;
  box-shadow: 0 0 4px 0 #82A7FF;
  transform: translateY(2px);
}
</style>
