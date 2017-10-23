<template>
  <input type='text' class='b2b-textbox' :placeholder="txtbox_attr.placeholder" v-bind:disabled='txtbox_attr.disabled' v-model="txtbox_attr.text" v-on:focus="focus" v-on:blur="blur" />
</template>

<script>
module.exports = {
  name: 'b2b-textbox',
  props: ['txtbox_attr'],
  methods: {
    focus: function () {
    },
    blur: function ($event) {
      this.$emit('blur', $event, this.txtbox_attr)
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