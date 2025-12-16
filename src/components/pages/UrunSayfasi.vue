<script setup>
import { ref } from 'vue';

// App.vue ile iletişim (Sepet ve Navigasyon)
const emit = defineEmits(['sayfaDegistir', 'sepeteEkle']);

// --- GÖRSEL VERİLERİ ---
const images = ref([
  '/netha-koltuk.jpg',
  '/netha-koltuk2.jpg', // Diğer görselleriniz yoksa aynı resmi koyabilirsiniz
  '/netha-koltuk3.jpg',
  '/netha-koltuk4.jpg',
]);

const currentImageIndex = ref(0);

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};
const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};
const selectImage = (i) => (currentImageIndex.value = i);

// --- ÜRÜN VERİSİ ---
const aktifUrun = {
  id: 1,
  ad: "Netha 3'lü Yataklı Koltuk + Berjer",
  fiyat: 53536, // İndirimli Fiyat
  listeFiyati: 57360, // Liste Fiyatı
  resim: '/netha-koltuk.jpg',
  miktar: 1
};

// Miktar Seçimi (Görseldeki gibi 1 varsayılan)
const selectedQuantity = ref(1);

const urunuSepeteEkle = () => {
  // Seçilen miktarı ürüne ekle
  const urunEklenecek = { ...aktifUrun, miktar: selectedQuantity.value };
  emit('sepeteEkle', urunEklenecek);
};
</script>

<template>
  <div class="product-page-container">
    
    <!-- Breadcrumb (Yol İzleme) -->
    <div class="breadcrumb">
      <a @click="emit('sayfaDegistir','Anasayfa')">Anasayfa</a> 
      <span class="separator">&gt;</span>
      <a>Koltuklar</a> 
      <span class="separator">&gt;</span>
      <a>Serilere Göre</a> 
      <span class="separator">&gt;</span>
      <a>Netha Koltuklar</a> 
      <span class="separator">&gt;</span>
      <span class="current">Netha</span>
    </div>

    <div class="product-main-content">

      <!-- SOL TARA: GÖRSEL GALERİSİ -->
      <div class="product-image-gallery">
        <div class="main-image">
          <img :src="images[currentImageIndex]" class="product-main-img" />
          <!-- Oklar -->
          <button class="arrow left-arrow" @click="prevImage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          <button class="arrow right-arrow" @click="nextImage">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
        </div>

        <div class="thumbnail-row">
          <img 
            v-for="(img,i) in images"
            :key="i"
            :src="img"
            class="thumbnail"
            :class="{ active: i===currentImageIndex }"
            @click="selectImage(i)"
          />
        </div>
      </div>

      <!-- SAĞ TARAF: ÜRÜN DETAYLARI -->
      <div class="product-details">

        <!-- Başlık ve Kalp İkonu -->
        <div class="header-row">
          <h1 class="product-title">Netha</h1>
          <button class="favorite-btn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>

        <p class="product-subtitle">3'lü Yataklı Koltuk + Berjer</p>

        <!-- Fiyat Alanı -->
        <div class="price-container">
          <div class="main-price">
            57.360<sup class="decimals">,00</sup> <span class="currency">TL</span>
          </div>
          <div class="discount-label">
            Sepette %6 İndirim <span class="discounted-price">53.536,00 TL</span>
          </div>
        </div>

        <div class="sku">SKU: 1439336</div>

        <!-- Miktar ve Sepet Butonu -->
        <div class="action-row">
          <div class="quantity-wrapper">
            <select v-model="selectedQuantity" class="quantity-select">
              <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
            </select>
            <span class="chevron-down">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
            </span>
          </div>
          
          <button class="add-to-cart-btn" @click="urunuSepeteEkle">
            SEPETE EKLE
          </button>
        </div>

        <!-- Bilgi Listesi (İkonlu) -->
        <div class="info-list">
          
          <div class="info-item">
            <div class="icon-box">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
            </div>
            <div class="info-text">
              6.245,87 TL x 9 ay'a varan <a href="#" class="link">taksit seçenekleri</a>
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
            </div>
            <div class="info-text">
              6-8 hafta içerisinde teslim edilir.
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
            </div>
            <div class="info-text">
              75.000 TL ve Üzerine Sepette 5.000 TL İndirim!
            </div>
          </div>

          <div class="info-item">
            <div class="icon-box">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
            </div>
            <div class="info-text">
              Bonus'a Özel Peşin Fiyatına 7 Taksit Fırsatı!
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
/* GENEL SAYFA YAPISI */
.product-page-container {
  padding: 20px 30px;
  max-width: 1300px;
  margin: 0 auto;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
}

/* Breadcrumb */
.breadcrumb {
  font-size: 11px;
  color: #666;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.breadcrumb a {
  cursor: pointer;
  text-decoration: none;
  color: #666;
  transition: color 0.2s;
}
.breadcrumb a:hover {
  color: #333;
}
.separator {
  margin: 0 5px;
  font-size: 9px;
}
.current {
  font-weight: bold;
  color: #000;
}

/* Ana İçerik */
.product-main-content {
  display: flex;
  gap: 50px;
}

/* SOL: Galeri */
.product-image-gallery {
  flex: 1.4;
  position: relative;
}

.main-image {
  position: relative;
  width: 100%;
  height: 500px; /* Görseldeki gibi büyük alan */
  background-color: #f4f4f4;
  overflow: hidden;
}

.product-main-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Galeri Okları */
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
}
.arrow:hover {
  background: #fff;
}
.left-arrow { left: 0; }
.right-arrow { right: 0; }

.thumbnail-row {
  display: flex;
  gap: 10px;
  margin-top: 15px;
}
.thumbnail {
  width: 80px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid transparent;
  transition: border 0.2s;
}
.thumbnail.active {
  border: 1px solid #000;
}

/* SAĞ: Ürün Detay */
.product-details {
  flex: 1;
  padding-top: 10px;
}

.header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.product-title {
  font-family: 'Times New Roman', Times, serif; /* Görseldeki Tırnaklı Font */
  font-size: 36px;
  font-weight: normal;
  margin: 0;
  color: #000;
  line-height: 1.2;
}

.favorite-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  padding: 0;
}
.favorite-btn:hover {
  color: #000;
}

.product-subtitle {
  font-size: 13px;
  color: #666;
  margin-top: 5px;
  margin-bottom: 25px;
  text-align: left;
}

/* Fiyat Alanı */
.price-container {
  display: flex;
  align-items: baseline; /* Alt hizalama */
  gap: 15px;
  margin-bottom: 10px;
}

.main-price {
  font-size: 32px;
  font-weight: normal;
  color: #000;
  font-family: 'Arial', sans-serif;
}
.decimals {
  font-size: 18px;
  vertical-align: top;
}
.currency {
  font-size: 24px;
  margin-left: 2px;
}

.discount-label {
  color: #eb3248; 
  font-size: 14px;
  font-weight: 600;
}

.discounted-price {
  margin-left: 5px;
}

.sku {
  font-size: 11px;
  color: #000;
  font-weight: bold;
  margin-bottom: 30px;
  letter-spacing: 0.5px;
  text-align: left;
}

/* Aksiyon Alanı (Miktar + Buton) */
.action-row {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
}

.quantity-wrapper {
  position: relative;
  width: 70px;
  height: 45px;
}

.quantity-select {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  background: #fff;
  padding-left: 15px;
  font-size: 16px;
  appearance: none; /* Varsayılan oku gizle */
  cursor: pointer;
  color: #000;
}

.chevron-down {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.add-to-cart-btn {
  flex: 1;
  background-color: #4a90e2; /* Görseldeki mavi */
  color: white;
  border-radius: 0;
  font-size: 17px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 1px;
  transition: background 0.3s;
}
.add-to-cart-btn:hover {
  background-color: #357abd;
}

/* Bilgi Listesi */
.info-list {
  border-top: 1px solid #eee;
  padding-top: 20px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  font-size: 13px;
  color: #333;
  line-height: 1.5;
}

.icon-box {
  width: 24px;
  margin-right: 12px;
  display: flex;
  justify-content: center;
  color: #555;
}

.link {
  text-decoration: underline;
  color: #000;
  font-weight: 600;
  cursor: pointer;
}

/* Responsive */
@media (max-width: 900px) {
  .product-main-content {
    flex-direction: column;
  }
  .main-image {
    height: 350px;
  }
}
</style>