<template>
	<select class='b2b-select'><option v-for="opt in options">{{ opt.name }}</option></select>
</template>

<script>
module.exports = {
  name: 'b2b-select',
  data: function () {
    return {
      options:
      [{
        name: '全部',
        value: '全部'
      }, {
        name: '待受理',
        value: '待受理'
      }, {
        name: '已取消',
        value: '已取消'
      }, {
        name: '已拒绝',
        value: '已拒绝'
      }, {
        name: '已完成',
        value: '已完成'
      }]
    }
  }
}
</script>

<style scoped="">
  .b2b-select {
    width: 203px;
    height: 30px;
    border: 1px solid #CCCCCC;
    padding-left: 1em;
    border-radius: 3px;
  }

  .b2b-select:hover {
    box-shadow: 0 0 4px 0 #82A7FF;
  }

  .b2b-select>option {
    height: 30px;
    padding: 2em;
  }  
</style>