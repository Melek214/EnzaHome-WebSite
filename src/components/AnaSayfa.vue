<template>
  <div class="anasayfa-container">
      <SliderComponent />
    </div>
</template>

<script setup>
import SliderComponent from './Slider.vue'; // Slider'ı içe aktardık
// Yönlendirme mantığı Header.vue ve App.vue'da olduğu için buraya bir şey yazmaya gerek yok.
</script>

<style scoped>
.anasayfa-container {
  /* Header'ın yüksekliğini telafi etmek için padding korundu */
 padding-top: 100px;
  padding-bottom: 50;
  padding-left: 0;
  padding-right: 0;
  min-height: 80vh;
  }
</style>