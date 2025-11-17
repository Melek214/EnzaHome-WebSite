<template>
  <header class="main-header">
    <div class="header-container">
      <!-- Sol kısım - Logo -->
      <div class="header-left">
        <img
          src="https://be3232fe.cdn.akinoncloud.com/static_omnishop/enza497_2/img/enza-logo.svg"
          alt="Enza Home Logo"
          class="logo"
        />
      </div>

      <!-- Orta kısım - Menü -->            
      <nav class="header-center">
        <a href="#">Enza Mimarlarıyla Tasarla</a>
        <a href="#">Satış Noktaları</a>
        <a href="#">Blog</a>
        <a href="#" class="highlight">Kampanyalar</a>
      </nav>

      <!-- Sağ kısım - İkonlar -->
      <div class="header-right">
        <span>🔍</span>
        <span>🤍</span>
        <span>👤</span>
        <span>🛒</span>
      </div>
    </div>

    <!-- Alt Menü -->
    <nav class="sub-menu">
      <a href="#">KOLTUKLAR</a>
      <a href="#">YEMEK ODASI</a>
      <a href="#">YATAK ODASI</a>
      <a href="#">TAMAMLAYICI MOBİLYA</a>
      <a href="#">GENÇ ODASI</a>
      <a href="#">YATAK</a>
      <a href="#">EV TEKSTİLİ</a>
      <a href="#">HALI</a>
      <a href="#">AYDINLATMA</a>
      <a href="#">AKSESUAR</a>
      <a href="#">MİMARLAR ÖNERİYOR</a>
    </nav>
  </header>
</template>

<style>
.main-header {
  background-color: white;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif;

  position: fixed; /* sayfanın üstüne sabitler */
  top: 0;          /* en üstte başlar */
  left: 0;
  width: 100%;     /* sayfanın tamamını kaplar */
  z-index: 1000;  
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
}

.header-left .logo {
  width: 160px;
  display: block; /* Resimlerin altındaki boşluğu engeller */
}

.header-center a {
  margin: 0 15px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.header-center a.highlight {   /*Sayfadaki tum a etiketlerine (yani linklere) şu stili uygula*/
  font-weight: bold;
  color: #3a75c4;
}

.header-right span {
  margin: 0 8px;
  font-size: 13px;
  cursor: pointer;
}

.sub-menu {
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 12px 0;
  border-top: 1px solid #eee;
}

.sub-menu a {
  color: #222;
  font-weight: bold;
  text-decoration: none;
  font-size: 10px;
}

.sub-menu a:hover {
  color: #3a75c4;
}
</style>
