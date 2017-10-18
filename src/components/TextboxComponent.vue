<template>
  <input type='text' class='b2b-textbox' v-bind:value="text" v-on:focus="focus" v-on:blur="blur" />
</template>

<script>
module.exports = {
  name: 'b2b-textbox',
  text: 'Please input here',
  data: function () {
    return {
      text: 'Please input here'
    }
  },
  methods: {
    focus: function () {
      if (this.text === 'Please input here') {
        this.text = ''
      }
    },
    blur: function () {
      if (this.text === '') {
        this.text = 'Please input here'
      }
    }
  }
}
</script>

<style scoped>
	.b2b-textbox {
		width: 188px;
		height: 26px;
		border: 1px solid #CCCCCC;
		padding-left: 1em;
		border-radius: 3px;
	}

	.b2b-textbox:hover {
		box-shadow: 0 0 4px 0 #82A7FF;
	}
</style>