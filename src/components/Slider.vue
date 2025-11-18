<template>
  <div class="slider-container">
    <div class="slider-wrapper" :style="wrapperStyle">
      <div class="slide slide-1">
        <img src="/kampanya1.jpg" alt="Enza Kampanya 1" class="slide-image" />
      </div>
      <div class="slide slide-2">
        <img src="/kampanya2.jpg" alt="Enza Kampanya 2" class="slide-image" />
      </div>
      <div class="slide slide-3">
        <img src="/kampanya3.jpg" alt="Enza Kampanya 3" class="slide-image" />
      </div>
    </div>
    
    <div class="slider-pagination">
      <span v-for="n in 3" 
            :key="n" 
            :class="{ active: currentSlide === n }" 
            @click="goToSlide(n)"></span>
    </div>
    <button class="nav-arrow left-arrow" @click="prevSlide">&#10094;</button>
    <button class="nav-arrow right-arrow" @click="nextSlide">&#10095;</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(1);
const slideInterval = ref(null);
const slideCount = 3; 

// Wrapper'ın CSS transform stilini hesaplar (Slayt geçişini bu sağlar)
const wrapperStyle = computed(() => {
  // Her slaydın genişliği %100 kabul edilirse, kaydırma miktarı: -(currentSlide - 1) * 100
  const offset = (currentSlide.value - 1) * 100;
  return {
    transform: `translateX(-${offset}%)`
  };
});

// Otomatik geçişi başlatan fonksiyon
const startAutoSlide = () => {
  slideInterval.value = setInterval(() => {
    currentSlide.value = (currentSlide.value % slideCount) + 1;
  }, 4000); // Her 4 saniyede bir slayt değiştir
};

// Belirli bir slayta git
const goToSlide = (n) => {
  clearInterval(slideInterval.value); // Manuel geçişte otomatik geçişi durdur
  currentSlide.value = n;
  startAutoSlide(); // Tekrar başlat
};

// Sonraki slayta geç
const nextSlide = () => {
  clearInterval(slideInterval.value);
  currentSlide.value = (currentSlide.value % slideCount) + 1;
  startAutoSlide();
};

// Önceki slayta geç
const prevSlide = () => {
  clearInterval(slideInterval.value);
  currentSlide.value = currentSlide.value === 1 ? slideCount : currentSlide.value - 1;
  startAutoSlide();
};

onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  clearInterval(slideInterval.value); // Bileşen yok edildiğinde zamanlayıcıyı temizle
});
</script>

<style scoped>
.slider-container {
  width: 100%;
  overflow: hidden; 
  position: relative;
  height: 400px; /* Slider'ın yüksekliğini ayarlayın */
}

.slider-wrapper {
  display: flex;
  width: 300%; 
  height: 100%;
  transition: transform 0.8s ease-in-out; 
}

.slide {
  width: 33.333%; 
  height: 100%;
  position: relative; /* Metin katmanı için gerekli */
  display: flex; /* İçeriği ortalamak için */
  justify-content: center; /* İçeriği yatayda ortala */
  align-items: center; /* İçeriği dikeyde ortala */

}

.slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Görseli kapsayıcıya sığdırır, oranları korur */
    display: block; /* Alt boşluğu engeller */
}

/* Görsel üzerine gelecek metin için */
.overlay-text {
    position: absolute;
    bottom: 50px; /* Görselin altında bir konumda */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.5); /* Yarı şeffaf arka plan */
    color: white;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
}

.slider-pagination {
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  z-index: 10;
}

.slider-pagination span {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: background-color 0.3s;
}

.slider-pagination span.active {
  background-color: white;
}

/* Ok Navigasyonu Stilleri */
.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  border-radius: 5px;
}

.left-arrow {
  left: 10px;
}

.right-arrow {
  right: 10px;
}
</style>