<template>
  <div class="product-card">
    <img :src="image" alt="product" class="product-img" />
    <h3 class="product-title">{{ title }}</h3>
    <p class="product-desc">{{ desc }}</p>
    <p class="product-detail">{{ detail }}</p>

    <!-- Fiyat kısmı — ProductPrice atomunu kullanır -->
    <ProductPrice :price="price" :oldPrice="oldPrice" />
  </div>
</template>

<script setup>
/* dışarıdan props ile veri alır */
import ProductPrice from '../atoms/ProductPrice.vue'

defineProps({
  image: String,
  title: String,
  desc: String,
  detail: String,
  price: String,
  oldPrice: String
})
</script>

<style scoped>
.product-card {
  width: 300px;
  cursor: pointer;
  transition: transform 0.2s;
}
.product-card:hover {
  transform: translateY(-6px);
}
.product-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product-title {
  font-size: 16px;
  font-weight: bold;
}
.product-desc {
  font-size: 12px;
  color: #333;
}
.product-detail {
  font-size: 11px;
  color: #888;
}
</style>
