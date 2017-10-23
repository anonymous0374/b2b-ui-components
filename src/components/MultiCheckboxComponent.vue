<template>
  <div>
    <!-- j-sparrow: for css cannot effectively style checkboxes, using a label to represent the checkbox instead, reference: http://www.inserthtml.com/2012/06/custom-form-radio-checkbox/-->
    <input type='checkbox' :id='multi_checkbox_attr.id' class='css-checkbox' />
    <label :for='multi_checkbox_attr.id' class='css-label'></label>
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
input[type=checkbox].css-checkbox {
  position:absolute;
  z-index:-1000;
  left:-1000px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height:1px; width:1px;
  margin:-1px;
  padding:0;
  border:0;
}

/* when the checkbox is NOT checked */
input[type=checkbox].css-checkbox + label.css-label {
  padding-left:15px;
  height:15px;
  display:inline-block;
  line-height:15px;
  background-repeat:no-repeat;
  background-position: 0 0;
  font-size:15px;
  vertical-align:middle;
  cursor:pointer;
}

/* when the checkbox is checked */
input[type=checkbox].css-checkbox:checked + label.css-label {
  background-position: 0 -15px;
}

label.css-label {
  background-image:url(http://csscheckbox.com/checkboxes/u/csscheckbox_391ce065f36b1460c4845fa9b5173fba.png);
  background-size: 15px;
  border-radius: 3px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>
