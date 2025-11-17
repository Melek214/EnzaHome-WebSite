<template>
  <div class="product-page-container">
    
    <h2> Ürün Sayfası</h2>
    <div class="breadcrumb">
      <a href="#">Anasayfa</a> > <a href="#">Koltuklar</a> > <a href="#">Serilere Göre</a> > <a href="#">Netha Koltuklar</a> > <span>Netha</span>
    </div>

    <div class="product-main-content">
      
      <div class="product-image-gallery">
        </div>
      
      <div class="product-details">
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
}
</style>