<template>
  <div class="product-slider-container">
    <div class="slider-header">
      <h3 class="slider-title">Benzer diğer ürünleri inceleyin.</h3>
    </div>
    
    <div class="slider-content">
      <!-- Sola Kaydırma Butonu -->
      <button class="arrow prev" @click="scrollSlider(-1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <!-- Ürün Kartları Listesi -->
      <div class="product-cards-wrapper" ref="sliderRef">
        <!-- Örnek Ürün 1 -->
        <div class="product-card">
          <div class="card-image">
             <!-- Gerçek resimleriniz varsa buraya koyun, yoksa placeholder -->
            <img src="/terra.jpg" alt="Terra">
          </div>
          <div class="card-info">
            <h4>Terra</h4>
            <p class="desc">2,5'lu Koltuk, Keten Dokulu, 16007 Beyaz</p>
            <p class="detail">Beyaz Renk, Metal Ayak</p>
            <div class="card-price">
              <div class="old-price">26.643,00 TL</div>
              <div class="current-price">12.953,50 TL</div>
              <div class="discount-text">Sepette %35 İndirim</div>
            </div>
          </div>
        </div> 

        <!-- Örnek Ürün 2 -->
        <div class="product-card">
          <div class="card-image">
            <img src="/paloma.jpg" alt="Paloma">
          </div>
          <div class="card-info">
            <h4>Paloma</h4>
            <p class="desc">Berjer,Keten Dokulu,55701 Krem</p>
            <p class="detail">Yüksek Ayak</p>
            <div class="card-price">
              <div class="current-price">8.992,00 TL</div>
            </div>
          </div>
        </div>

        <!-- Örnek Ürün 3 -->
        <div class="product-card">
          <div class="card-image">
            <img src="/briza.jpg" alt="Briza">
          </div>
          <div class="card-info">
            <h4>Briza</h4>
            <p class="desc">3'lü Yataklı Koltuk,Kadife Dokulu,13302 Haki</p>
            <p class="detail">Yataklı-Sandıklı Fonksiyon, Yüksek Ayak</p>
            <div class="card-price">
              <div class="no-discount-spacer"></div> <!-- Boşluk tutucu -->
              <div class="current-price">14.990,00 TL</div>
            </div>
          </div>
        </div>

        <!-- Örnek Ürün 4 (Kaydırmayı test etmek için) -->
        <div class="product-card">
          <div class="card-image">
            <img src="/loreto.jpg" alt="Loreto">
          </div>
          <div class="card-info">
            <h4>Loreto</h4>
            <p class="desc">Puf,Keten Dokulu,23502 Mavi</p>
            <p class="detail">Kumaş Renk ve Doku Alternatifli</p>
            <div class="card-price">
              <div class="old-price">5.195,00 TL</div>
              <div class="current-price">3.636,50 TL</div>
              <div class="discount-text">Sepette %30 İndirim</div>
            </div>
          </div>
        </div>

      </div>

      <!-- Sağa Kaydırma Butonu -->
      <button class="arrow next" @click="scrollSlider(1)">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const sliderRef = ref(null);

// Kaydırma Fonksiyonu
const scrollSlider = (direction) => {
  if (sliderRef.value) {
    const cardWidth = 320; // Kart genişliği + boşluk
    sliderRef.value.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth'
    });
  }
};
</script>

<style scoped>
.product-slider-container {
  margin-top: 60px;
  padding-bottom: 40px;
  border-top: 1px solid #eee;
  padding-top: 40px;
}

.slider-header {
  text-align: center;
  margin-bottom: 30px;
}

.slider-title {
  font-size: 16px;
  color: #666;
  font-weight: normal;
}

.slider-content {
  position: relative;
  display: flex;
  align-items: center;
  max-width: 1200px; /* Sepet genişliği ile uyumlu */
  margin: 0 auto;
}

.product-cards-wrapper {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  gap: 20px;
  padding: 10px 5px; /* Gölgeler kesilmesin diye padding */
  width: 100%;
  /* Scrollbar'ı gizle (Opsiyonel) */
  scrollbar-width: none; 
  -ms-overflow-style: none; 
}

.product-cards-wrapper::-webkit-scrollbar { 
    display: none; 
}

.product-card {
  flex: 0 0 300px; /* Kartların sabit genişliği */
  background: white;
  /* border: 1px solid #eee; Görselde border yok gibi, sade bırakalım */
  text-align: left;
  cursor: pointer;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.card-info {
  padding: 15px 0;
}

.card-info h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 5px 0;
  color: #000;
}

.desc {
  font-size: 12px;
  color: #333;
  margin: 0 0 3px 0;
}

.detail {
  font-size: 11px;
  color: #888;
  margin: 0 0 15px 0;
}

.card-price {
  margin-top: 10px;
}

.old-price {
  font-size: 12px;
  text-decoration: line-through;
  color: #999;
}

.current-price {
  font-size: 16px;
  font-weight: bold;
  color: #000;
  margin: 2px 0;
}

.discount-text {
  font-size: 11px;
  color: #c00; /* Kırmızı */
  font-weight: bold;
}

.no-discount-spacer {
    height: 14px; /* Eski fiyat yoksa hizayı korumak için boşluk */
}

/* Ok Butonları */
.arrow {
  background: #fff;
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  z-index: 2;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  color: #333;
}

.arrow:hover {
  background: #f5f5f5;
  color: #000;
}

.prev {
  left: -20px;
}

.next {
  right: -20px;
}
</style>