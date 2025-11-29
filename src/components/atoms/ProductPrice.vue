// ürün fiyatı gösterimi
<template>  
  <div class="price-box">
    <span v-if="oldPrice" class="old-price">{{ oldPrice }}</span>
    <span class="current-price">{{ price }}</span>
  </div>
</template>

<script setup>
defineProps({
  price: {
    type: String,
    required: true
  },
  oldPrice: {
    type: String,
    default: null
  }
});
</script>

<style scoped>
.price-box {
  display: flex;
  flex-direction: column;
}
.old-price {
  text-decoration: line-through;
  color: #aa0000;
  font-size: 12px;
}
.current-price {
  font-size: 16px;
  font-weight: bold;
}
</style>
