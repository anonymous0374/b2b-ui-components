<template>
  <div class='pagination'>
    <div class='page-mark'><span>&lt;</span></div>
    <div class='page-mark' :pages_attr='pages_attr' v-bind:class='{ "page-current": pages_attr.current_page_index === page }' v-on:click='select($event, page)' v-for='page in pages_attr.total' :key='page'>
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
      select: function ($event, page) {
        console.log(`page ${page} selected.`)
        this.pages_attr.current_page_index = page
      }
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

  .page-mark:active {
    transform: translateY(2px);
  }

  .page-current {
    background-color: #4565F7;
    color: #FFFFFF;
  }

</style>