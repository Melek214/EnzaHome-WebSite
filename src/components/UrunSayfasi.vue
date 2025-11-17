<template>
  <div class="product-page-container">
    
    <h2> Ürün Sayfası</h2>
    <div class="breadcrumb">
      <a href="#">Anasayfa</a> > <a href="#">Koltuklar</a> > <a href="#">Serilere Göre</a> > <a href="#">Netha Koltuklar</a> > <span>Netha</span>
    </div>

    <div class="product-main-content">
      
      <div class="product-image-gallery">
        <div class="main-image">
          <img src="/netha-koltuk.jpg" alt="Netha 3lü Yataklı Koltuk" class="placeholder-img" />
          <button class="arrow left-arrow"> &lt; </button>
          <button class="arrow right-arrow"> &gt; </button>
        </div>
      </div> <div class="product-details">
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
  flex: 1.5; /* Görsel alanına daha fazla yer ayırıyoruz (Örn: %60) */
}

.main-image {
  position: relative;
  border: 1px solid #eee;
  /* Resmin yükseklik/genişlik oranını korumak için kullanılır */
  padding-bottom: 75%; 
  height: 0;
  overflow: hidden;
}

.placeholder-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Resmi kutuya sığdırır */
  opacity: 0.8; 
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
  width: 80px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
  border: 1px solid transparent;
}

.thumbnail.active {
  border-color: #3a75c4; /* Aktif küçük resme mavi çerçeve */
}

}
</style>