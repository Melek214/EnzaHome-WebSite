<script setup>
// Ebeveyne (App.vue) sayfa değişim olayını yaymak için tanımlama
const emit = defineEmits(['sayfaDegistir']);

// --- Navigasyon Fonksiyonları ---

// Ürün Sayfasına Git
const goToUrunSayfasi = () => {
    emit('sayfaDegistir', 'UrunSayfasi');
};

// Ana Sayfaya Git
const goToAnasayfa = () => {
    emit('sayfaDegistir', 'Anasayfa');
};

// Giriş Yap Sayfasına Git
const goToGirisYap = () => {
    emit('sayfaDegistir', 'GirisYap');
};
</script>

<template>
  <header class="main-header">
    <div class="header-container">
      <div class="header-left">
        <img
          src="https://be3232fe.cdn.akinoncloud.com/static_omnishop/enza497_2/img/enza-logo.svg"
          alt="Enza Home Logo"
          class="logo"
          @click="goToAnasayfa" 
        />
      </div>

      <nav class="header-center">
        <a href="#">Enza Mimarlarıyla Tasarla</a>
        <a href="#">Satış Noktaları</a>
        <a href="#">Blog</a>
        <a href="#" class="highlight">Kampanyalar</a>
      </nav>

      <div class="header-right">
        <span>🔍</span>
        <span>🤍</span>
        <span @click="goToGirisYap" style="cursor: pointer;" title="Üye Girişi">👤</span>
        <span>🛒</span>
      </div>
    </div>

    <nav class="sub-menu">
      <a @click="goToUrunSayfasi">KOLTUKLAR</a>
      
      <a @click="goToAnasayfa">YEMEK ODASI</a>
      <a @click="goToAnasayfa">YATAK ODASI</a>
      <a @click="goToAnasayfa">TAMAMLAYICI MOBİLYA</a>
      <a @click="goToAnasayfa">GENÇ ODASI</a>
      <a @click="goToAnasayfa">YATAK</a>
      <a @click="goToAnasayfa">EV TEKSTİLİ</a>
      <a @click="goToAnasayfa">HALI</a>
      <a @click="goToAnasayfa">AYDINLATMA</a>
      <a @click="goToAnasayfa">AKSESUAR</a>
      <a @click="goToAnasayfa">MİMARLAR ÖNERİYOR</a>
    </nav>
  </header>
</template>

<style scoped>
.main-header {
  background-color: white;
  border-bottom: 1px solid #ddd;
  font-family: Arial, sans-serif;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  display: block;
  cursor: pointer;
}

.header-center a {
  margin: 0 15px;
  color: #333;
  font-size: 14px;
  text-decoration: none;
}

.header-center a.highlight {
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
  cursor: pointer;
}

.sub-menu a:hover {
  color: #3a75c4;
}
</style>