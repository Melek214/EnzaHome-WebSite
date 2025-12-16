<script setup>
import { defineProps, defineEmits, ref } from 'vue';

// App.vue’den gelen sepet sayısı
const props = defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
});

const aktifMenu = ref(null);

const showMenu = (menuName) => {
  aktifMenu.value = menuName;
};

const hideMenu = () => {
  aktifMenu.value = null;
};


// App.vue'ya haber göndermek için
const emit = defineEmits(["sayfaDegistir"]);

// --------------------------------
// Yönlendirme fonksiyonları
// --------------------------------

// Üye giriş sayfası
const goToGirisYap = () => {
  emit("sayfaDegistir", "GirisYap");
};

// Alt menü kategorileri
const goToCategory = (kategori) => {
  emit("sayfaDegistir", kategori);
};
</script>

<template>
  <header>
    <!-- 🔵 Üst Kampanya Bandı -->
    <div class="top-banner">
      Yeni Üyelere Özel Enza Ürünlerinde 5.000 TL ve üzeri Alışverişlerde Sepette 500 TL İndirim!
    </div>

    <!-- 🔶 Üst Menü + Logo + Sağ İkonlar -->
    <div class="header-main">
      
      <!-- Logo -->
      <img src="/enza-logo.jpg" alt="Enza Home Logo" class="logo" />

      <!-- Üst Menü -->
      <nav class="top-menu">
        <a href="#">Enza Mimarlarıyla Tasarla</a>
        <a href="#">Satış Noktaları</a>
        <a href="#">Blog</a>
        <a href="#" class="blue">Kampanyalar</a>
      </nav>

      <!-- Sağ Ikonlar -->
      <div class="icons">
        <img src="/search-icon.jpg" class="icon" />
        <img src="/heart-icon.jpg" class="icon" />
        <img src="/user-icon.jpg" class="icon" @click="goToGirisYap" />

        <div class="cart-wrapper">
          <img src="/cart-icon.jpg" class="icon" />
          <span class="cart-count" v-if="props.cartCount > 0">
            {{ props.cartCount }}
          </span>
        </div>
      </div>
    </div>

    <!-- 🟦 ALT ANA MENÜ (Artık tamamen tıklanabilir) -->
    <nav class="bottom-menu">
    <a @mouseenter="showMenu('koltuklar')">KOLTUKLAR</a>
    <a @mouseenter="showMenu('yemek')">YEMEK ODASI</a>
    <a @mouseenter="showMenu('yatak')">YATAK ODASI</a>
    <a @mouseenter="showMenu('tamamlayici')">TAMAMLAYICI MOBİLYA</a>
    <a @mouseenter="showMenu('genc')">GENÇ ODASI</a>
    <a @mouseenter="showMenu('yataklar')">YATAK</a>
    <a @mouseenter="showMenu('evtekstili')">EV TEKSTİLİ</a>
    <a @mouseenter="showMenu('hali')">HALI</a>
    <a @mouseenter="showMenu('aydinlatma')">AYDINLATMA</a>
    <a @mouseenter="showMenu('aksesuar')">AKSESUAR</a>
    <a @mouseenter="showMenu('online')" class="gray">ONLINE ÖZEL</a>
    <a @mouseenter="showMenu('outlet')" class="outlet">OUTLET</a>
      <!-- ⭐ MEGA MENÜ KOLTUKLAR -->
<div 

  class="mega-menu" 
  v-if="aktifMenu === 'koltuklar'"
  @mouseenter="showMenu('koltuklar')"
  @mouseleave="hideMenu"
>

  <div class="mega-col">
    <h4>Ölçüye Göre</h4>
    <p>Tekli Koltuklar</p>
    <p>2'li Koltuklar</p>
    <p>3'lü Koltuklar</p>
    <p>4'lü Koltuklar</p>
  </div>

  <div class="mega-col">
    <h4>Serilere Göre</h4>
    <p>Koltuk Takımları</p>
    <p>Köşe Takımları</p>
  </div>

  <div class="mega-col">
    <h4>Türe Göre</h4>
    <p @click="goToCategory('UrunSayfasi')">Yataklı Koltuklar</p>
    <p>Koltuklar</p>
    <p>Berjerler</p>
    <p>Puflar</p>
    <p>TV Koltukları</p>
  </div>

  <div class="mega-col">
    <h4>Kumaşa Göre</h4>
    <p>Deri Koltuklar</p>
    <p>Kadife Koltuklar</p>
    <p>Keten Koltuklar</p>
  </div>

  <div class="mega-img">
    <img src="/koltuk-ornek.jpg" alt="Koltuk görseli" />
    <button>ÜRÜNLERİ İNCELE</button>
  </div>

</div>

    </nav>
  </header>
</template>

<style scoped>
/* 🔵 ÜST BAND */
.top-banner {
  background-color: #1e7bbf;
  color: white;
  text-align: center;
  padding: 8px 0;
  font-size: 14px;
  font-weight: 500;
  width: 100vw !important;
  position: relative;
  margin: 0;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* 🔶 Üst Menü Alanı */
.header-main {
  display: flex;
  align-items: center;
  padding: 18px 10px;
  gap: 60px;
}

.logo {
  height: 50px;
}

/* Üst Menü */
.top-menu {
  display: flex;
  gap: 28px;
  font-size: 14px;
  margin-left: 20px;
}

.top-menu a {
  text-decoration: none;
  color: #444;
}

.top-menu .blue {
  color: #1e7bbf;
  font-weight: 600;
}

/* Sağ İkonlar */
.icons {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}

.icon {
  width: 50px;
  height: auto;
  cursor: pointer;
  filter: contrast(150%);
}

/* Sepet + Sayı */
.cart-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.cart-count {
  position: absolute;
  top: -6px;
  right: -4px;
  background-color: black;
  color: white;
  font-size: 11px;
  padding: 2px 6px;
  border-radius: 10px;
  min-width: 18px;
  text-align: center;
  line-height: 1;
}

/* Alt Menü */
.bottom-menu {
  display: flex;
  flex-wrap: nowrap;
  white-space: nowrap;
  justify-content: center;
  gap: 24px;
  padding: 12px 0;
  border-top: 1px solid #ddd;
  //border-bottom: 1px solid #eee;
  box-shadow: 0 30px 20px rgba(0,0,0,0.06);
  font-size: 13px;
  font-weight: 700;  
  overflow-x: auto;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  line-height: 1 !important;
}

.bottom-menu a {
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-weight: 800 !important; /* Extra Bold */
}

.bottom-menu .gray {
  color: #666;
}

.bottom-menu .outlet {
  color: #d60000;
  font-weight: 700;
}

.mega-menu {
  position: absolute;
  top: 100%;              /* Alt menünün hemen altında çıksın */
  left: 0;
  width: 100vw;           /* Tüm ekran genişliği */
  background: #ffffff;
  padding: 40px 80px;
  display: flex;
  gap: 60px;
  justify-content: flex-start;
  border-top: 1px solid #ddd;
  border-bottom: 2px solid #eee;

  /* Üstteki sabit header’ın altında gözükmesi için */
  z-index: 999;      
    /* Ana header'ın altında taşma sorununu çözer */
  transform: translateX(calc(-65vw + 50% + 40px));     
}

.mega-col {
  width: 220px;           /* Kolon genişlikleri */
}

.mega-col h4 {
  font-size: 14px;
  font-weight: 700;   /* KALIN BAŞLIK */
  margin-bottom: 12px;
  color: #222;
  text-align: left !important;
}

.mega-col p {
  font-size: 13px;
  font-weight: 400;   /* NORMAL YAZI */
  margin: 6px 0;
  color: #444;
  cursor: pointer;
  text-align: left !important;
}

.mega-col p:hover {
  color: #1e7bbf;
}

/* Sağdaki görsel kutusu */
.mega-img img {
  width: 300px;
  height: auto;
  border-radius: 8px;
}

.mega-img button {
  margin-top: 15px;
  padding: 10px 18px;
  border: 1px solid black;
  background: white;
  font-weight: bold;
  cursor: pointer;
}

.mega-img button:hover {
  background: black;
  color: white;
}

.bottom-menu {
  position: relative; /* Mega menu bunun altına oturacak */
  overflow: visible !important; /* kritik */
  z-index: 100;
}

</style>
