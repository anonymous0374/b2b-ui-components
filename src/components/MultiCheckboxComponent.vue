<template>
  <div>
    <!-- j-sparrow: for css cannot effectively style checkboxes, using a label to represent the checkbox instead, reference: http://www.inserthtml.com/2012/06/custom-form-radio-checkbox/-->
    <input type='checkbox' :id='multi_checkbox_attr.id' class='regular-checkbox' />
    <label :for='multi_checkbox_attr.id'></label>
  </div>
</template>
<script>
  module.exports = {
    name: 'b2b-multi-checkbox',
    props: ['multi_checkbox_attr'],
    data: function () {
      return {}
    }
  }
</script>
<style scoped>
  label {
    display: inline;
  }

  .regular-checkbox {
    display:  none;
  }

  .regular-checkbox + label {
    /* background-color: #CCCCCC; */
    border: 1px solid #CCCCCC;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05);
    padding: 7px;
    border-radius: 3px;
    display: inline-block;
    position: relative;
  }

  .regular-checkbox + label:active, .regular-checkbox:checked + label:active {
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(0,0,0,0.1);
  }

  .regular-checkbox:checked + label {
    background-color: #4565F7;
    border: 1px solid #adb8c0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px -15px 10px -12px rgba(0,0,0,0.05), inset 15px 10px -12px rgba(255,255,255,0.1);
    color: #CCCCCC;
  }

.regular-checkbox:checked + label:after {
  content: '\2714';
  font-size: 14px;
  position: absolute;
  top: 0px;
  left: 3px;
  color: #CCCCCC;
}

  .checkbox {
    border:  solid 1px #CCCCCC;
  }

  .checkbox:checked {
    border-color: #4565F7;
    color:  #FFFFFF;
  }
</style>
