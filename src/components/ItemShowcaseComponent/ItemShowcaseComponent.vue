<template>
  <div class='item'>
    <div class='image'>
      <img v-bind:src='item_showcase_attr.image_url' />
    </div>
    <div class='name'>
      <span>{{item_showcase_attr.name}}</span>
    </div>
    <div class='descriptions'>
      <span>{{item_showcase_attr.description}}</span>
    </div>
    <div class='price'>
      <span>{{item_showcase_attr.price}}</span>
    </div>
  </div>
</template>
<script>
  module.exports = {
    name: 'b2b-item-showcase',
    props: ['item_showcase_attr'],
    data: function () {
      return {}
    },
    methods: {
    }
  }
</script>
<style scoped>
  .item {
    width: 250px;
    min-height: 300px;
    padding: 20px;
  }

  .image {
    
  }

  .name {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
  }

  .descriptions {

  }

  .price {

  }
</style>