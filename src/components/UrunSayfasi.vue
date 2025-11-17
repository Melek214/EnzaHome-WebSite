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
        <div class="thumbnail-row">
          <img v-for="n in 5" :key="n" src="/netha-koltuk.jpg" class="thumbnail" :class="{ 'active': n === 1 }" />
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
          <button class="add-to-cart-btn">SEPETE EKLE</button>
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
  flex: 1.2; /* Görsel alanına daha fazla yer ayırıyoruz (Örn: %60) */
}

.main-image {
  position: relative;
  border: 1px solid #eee;
  /* Resmin yükseklik/genişlik oranını korumak için kullanılır */
  padding-bottom: 70%; 
  height: 0;
  overflow: hidden;
  margin-bottom: 10px;
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
  align-items: center; /* Öğeleri dikeyde ortalar (fiyat ve yazı) */
  flex-wrap: wrap; 
  margin-bottom: 15px;
}
.price-value {
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
  display: inline-block; /* Fiyatın boyutlanmasını sağlar */
}

.currency {
  font-size: 16px;
  position: relative;
  top: -8px;
  display: inline-block;
}

.discount-info {
  /* display: block; yerine inline-block kullanıyoruz ki price-value'nun yanında kalsın */
  display: inline-block; 
  color: #e00; 
  font-weight: bold;
  font-size: 12px;
  margin-top: 0;
  /* Önemli: Fiyatın yanına gelmesi için dikey hizalamayı Flex'e bırakıyoruz. */
  align-self: flex-end; /* Bu, fiyatın altına düşmesini engelleyen bir Flex kuralıdır */
}

.sku {
  font-size: 13px;
  color: #999;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
  margin-top: 5px;
}

/* Buton ve Seçim Alanı */
.action-section {
  display: flex;
  gap: 10px;
  margin-top: 20px;
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
  padding: 12px 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;
}

.add-to-cart-btn:hover {
  background-color: #3a75c4;
}

/* Ek Bilgiler Listesi */
.info-list {
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.info-list p {
  font-size: 14px;
  color: #333;
  margin: 8px 0;
}

.info-list span {
  margin-right: 5px;
}

.taksit-link {
  font-size: 14px;
  color: #5bc0de;
  text-decoration: none;
}

}
</style>