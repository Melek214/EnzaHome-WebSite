<script setup>
import HeaderComponent from './components/Header.vue'
import ProductDetail from './components/ProductDetail.vue' // 👈 YENİ BİLEŞEN İÇE AKTARILDI

</script>

<template>
  <div>
    <HeaderComponent />

    <ProductDetail /> </div>
</template>

<style>
/* Stil kısmı, sadece genel body ayarlarını tutacak şekilde sadeleştirildi */
body {
  background-color: white;
  color: black;
  margin: 0; /* Header'ın tam oturması için gerekli */
  padding: 0;
}
</style>
