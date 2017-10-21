<template>
  <div class='pagination'>
    <div class='page-mark'><span>&lt;</span></div>
    <div class='page-mark' :pages_attr='pages_attr' v-for='page in pages_attr.total'>
      <span>{{ page }}</span>
    </div>
    <div class='page-mark'><span>&gt;</span></div>
  </div>
</template>
<script>
  module.exports = {
    name: 'b2b-pagination',
    props: ['pages_attr'],
    data: function () {
      return {}
    },
    methods: {
    }
  }
</script>
<style scoped>
  .pagination {
    display: inline-flex;
  }

  .page-mark {
    margin: 0 0.2em;
    border: solid 1px #CCCCCC;
    border-radius: 3px;
    line-height: 28px;
    width: 28px;
    height: 28px;
  }
</style>