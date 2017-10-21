<template>
	<select class='b2b-select' v-on:change='select' v-model='select_attr.value' v-bind:disabled='select_attr.disabled'><option v-for="opt in select_attr.options" v-bind:value='opt.value'>{{ opt.name }}</option></select>
</template>

<script>
module.exports = {
  name: 'b2b-select',
  props: ['select_attr'],
  data: function () {
    return {}
  },
  methods: {
    select: function ($event) {
      this.$emit('change', $event, this.select_attr.value)
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