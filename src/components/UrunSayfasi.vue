<script setup>
import { ref } from 'vue';
const emit = defineEmits(['sayfaDegistir', 'sepeteEkle']);

// --- GÖRSEL VERİLERİ ---
// Görsel URL'leri (örnek, kendi URL'lerinizle değiştirebilirsiniz)
const images = ref([
  '/netha-koltuk.jpg',
  '/netha-koltuk2.jpg',
  '/netha-koltuk3.jpg',
  '/netha-koltuk4.jpg',
]);

// Şu anki aktif görselin indeksi
const currentImageIndex = ref(0);

// Sonraki görsel
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
};

// Önceki görsel
const prevImage = () => {
  currentImageIndex.value = (currentImageIndex.value - 1 + images.value.length) % images.value.length;
};

// Thumbnail'a tıklanınca görseli değiştir
const selectImage = (index) => {
  currentImageIndex.value = index;
};

// Ürün detaylarını temsil eden bir obje tanımlayalım (gerçek bir ürün verisi simülasyonu)
const aktifUrun = {
    id: 1,
    ad: "Netha 3'lü Yataklı Koltuk + Berjer",
    fiyat: 53536.00,
    resim: '/netha-koltuk.jpg',
    // ... diğer veriler
};

// Sepete Ekle butonuna tıklandığında bu fonksiyon çalışacak
const urunuSepeteEkle = () => {
    // emit ile App.vue'daki sepeteEkle fonksiyonunu çağırıyoruz.
    // Aktif ürünü parametre olarak gönderiyoruz.
    emit('sepeteEkle', aktifUrun);
    //alert(`${aktifUrun.ad} sepete eklendi!`);
};

</script>

<template>
  <div class="product-page-container">
    
    <h2> Ürün Sayfası</h2>
    <div class="breadcrumb">
      <a href="#" @click="emit('sayfaDegistir', 'Anasayfa')">Anasayfa</a> > 
      <a href="#" @click="emit('sayfaDegistir', 'Koltuklar')">Koltuklar</a> > 
      <a href="#" @click="emit('sayfaDegistir', 'SerilereGore')">Serilere Göre</a> > 
      <a href="#" @click="emit('sayfaDegistir', 'NethaKoltuklar')">Netha Koltuklar</a> > 
      
      <span>Netha</span>
    </div>

    <div class="product-main-content">
      
      <div class="product-image-gallery">
        <div class="main-image">
          <img 
            :src="images[currentImageIndex]" 
            alt="Netha 3lü Yataklı Koltuk" 
            class="product-main-img" 
          />
          
          <button @click="prevImage" class="arrow left-arrow"> &lt; </button>
          <button @click="nextImage" class="arrow right-arrow"> &gt; </button>
        </div>
        
        <div class="thumbnail-row">
          <img 
            v-for="(image, index) in images" 
            :key="index" 
            :src="image" 
            class="thumbnail" 
            :class="{ 'active': index === currentImageIndex }" 
            @click="selectImage(index)" 
          />
        </div>
      </div>

      <div class="product-details">
        <div class="title-section">
          <h1>Netha</h1>
          <span class="favorite-icon">🤍</span>
        </div>
        <p class="subtitle">3'lü Yataklı Koltuk + Berjer</p>

        <div class="price-section">
          <p class="price-value">76.480<sup class="currency">,00</sup> TL</p>
          <span class="discount-info">Sepette %25 İndirim 57.360,00 TL</span>
        </div>
        <p class="sku">SKU: 1439336</p>

        <div class="action-section">
          <select class="quantity-select">
            <option>1</option><option>2</option><option>3</option>
          </select>
          <button @click="urunuSepeteEkle" class="add-to-cart-btn">SEPETE EKLE</button>
        </div>
        
        <div class="info-list">
          <p><span>💳</span> 6.692,00 Tl x 9 ay'a varan taksit seçenekleri</p>
          <p><span>🚚</span> 6-8 hafta içerisinde teslim edilir.</p>
          <p><span>🎁</span> 75.000 TL ve Üzerine Sepette 5.000 TL İndirimi</p>
          <p><span>💳</span> Bonus'a Özel Peşin Fiyatına 7 Taksit Fırsatı</p>
          <a href="#" class="taksit-link">taksit seçenekleri</a>
        </div>
      </div>
    </div>
  </div>
   
</template>

<style scoped>
/* Şimdilik sadece ana taşıyıcıya padding ekleyelim */
.product-page-container {
  padding: 20px 50px;
  max-width: 1400px;
  margin: 0 auto;
}

.product-main-content {
  display: flex;
  gap: 40px;
  border-top: 1px solid #eee; /* Başlık altındaki çizgiyi koyalım */
  padding-top: 20px;
}

/* Breadcrumb Stili */
.breadcrumb {
  font-size: 13px;
  margin-bottom: 20px;
  color: #666;
}

.breadcrumb a {
  text-decoration: none;
  color: #666;
  margin: 0 5px;
}

.breadcrumb span {
  font-weight: bold;
  color: #333;
}

/* Sol Sütun: Görsel Alanı */
.product-image-gallery {
  flex: 3; /* Görsel alanına daha fazla yer ayırıyoruz (Örn: %60) */
}

.main-image {
  position: relative;
  border: 1px solid #eee;
  /* Resmin yükseklik/genişlik oranını korumak için kullanılır */
  padding-bottom: 120%;
  height: 0;
  overflow: hidden;
  margin-bottom: 10px;
}

/* ESKİ placeholder-img yerine product-main-img kullanıyoruz */
.product-main-img { 
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Resmi kutuya sığdırır */
  opacity: 0.8;
  transition: opacity 0.3s ease-in-out; /* Görsel geçiş efekti */
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.7);
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 10;
}

.left-arrow { left: 10px; }
.right-arrow { right: 10px; }

/* Thumbnail sırası */
.thumbnail-row {
  display: flex;
  overflow-x: auto; /* Çok resim olursa yatay kaydırma çubuğu çıkar */
  gap: 5px;
  padding: 5px 0;
}

.thumbnail {
  width: 70px;
  height: 70px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid transparent;
}

.thumbnail.active {
  border-color: #3a75c4; /* Aktif küçük resme mavi çerçeve */
}
/* SÜTUN 2: ÜRÜN BİLGİLERİ */
.product-details {
  flex: 1; /* Sağ sütuna %40-45 yer verir */
}

.title-section {
  display: flex;
  justify-content: space-between;
  text-align: left ;
  padding-bottom: 5px;
}

.product-details h1 {
  /* Flex değerini 1'de tutarak toplam alanın 1/4'ünü (~%25) detaylara verir. */
  flex: 1;
  font-size: 32px;
  font-weight: 500;
  margin: 0;
  color: #333;
}

.subtitle {
  font-size: 14px;
  text-align: left;
  color: #666;
  margin: 0 0 25px 0;
}

.favorite-icon {
  font-size: 24px;
  color: #999; /* Gri kalp ikonu */
  cursor: pointer;
}

/* Fiyat Bölümü */
.price-section {
  display: flex; /* Bu, içindeki öğeleri yan yana getirir */
  align-items: baseline; /* Farklı boyuttaki yazıların alt çizgilerini hizalar (en iyi yöntem) */
  white-space: nowrap; /*fiyat ve indirim alta düşmesini engeller */
  margin-bottom: 15px;
}
.price-value {
  font-size: 22px;
  font-weight: bold;
  color: #333;
  margin: 0 15px 0 0;
  display: inline-block; /* Fiyatın boyutlanmasını sağlar */
  line-height: 1; /* Yüksekliğini yazıya yakın tutar */
}

.currency {
  font-size: 16px;
  position: relative;
  top: -8px;
  display: inline-block;
}

.discount-info {
  display: inline-block;
  color: #e00;
  font-weight: bold;
  font-size: 12px;
  margin-top: 0;
}

.sku {
  display: block; 
  text-align: left; 
  font-size: 13px;
  color: #999;
  margin-bottom: 20px;
  margin-top: 5px;
  padding-bottom: 0;
  border-bottom: none;
}

/* Buton ve Seçim Alanı */
.action-section {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.quantity-select {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
}

.add-to-cart-btn {
  flex-grow: 1;
  background-color: #5bc0de;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.add-to-cart-btn:hover {
  background-color: #3a75c4;
}

/* Ek Bilgiler Listesi */
.info-list {
  margin-top: 10px;
  padding-top: 0px;
  border-top: none;
}

.info-list p {
  font-size: 13px;
  color: #333;
  margin: 8px 0;
  line-height: 1.4; 
}

.info-list span {
  margin-right: 5px;
}

.taksit-link {
  font-size: 14px;
  color: #5bc0de;
  text-decoration: none;
}
</style>