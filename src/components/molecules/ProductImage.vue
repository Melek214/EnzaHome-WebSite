<template>
  <img :src="src" :alt="alt" class="product-image"/>
</template>

<script setup>
defineProps({
  src: String,
  alt: String
});
</script>

<style scoped>
.product-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
