<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from './components/organisms/Header.vue';
import UrunSayfasi from './components/pages/UrunSayfasi.vue';
import AnaSayfa from './components/pages/AnaSayfa.vue';
import GirisYapKayitOl from './components/organisms/GirisYapKayitOl.vue';
import UyelikPanel from './components/organisms/UyelikPanel.vue';
import FooterComponent from './components/organisms/Footer.vue';
import Cart from './components/pages/Cart.vue';



// Aktif sayfa adını tutan değişken
const aktifSayfaAdi = ref('Anasayfa'); 
const isLoggedIn = ref(false); // Kullanıcı giriş yaptı mı? (Başlangıçta hayır)
const showUyePanel = ref(false); // Üyelik paneli açık mı?
const sepet = ref([]);
const cartCount = ref(0);

// Sayfa adlarını bileşenlerle eşleştiren obje
const sayfalar = {
  Anasayfa: AnaSayfa,
  UrunSayfasi: UrunSayfasi,
  GirisYap: GirisYapKayitOl,
  UyelikPanel: UyelikPanel,
  'Sepet': Cart,
};

// Şu an gösterilecek bileşeni hesaplayan computed özellik
const AktifBilesen = computed(() => {
  return sayfalar[aktifSayfaAdi.value] || Anasayfa;
});


const handleHeaderAction = (action) => {
  if (action === 'GirisYap') {
    // Eğer kullanıcı giriş yapmadıysa, Giriş/Kayıt sayfasına git
    if (!isLoggedIn.value) {
      aktifSayfaAdi.value = 'GirisYap';
    } else {
      // Eğer kullanıcı giriş yaptıysa, üyelik panelini aç
      showUyePanel.value = true;
    }
  } else {
    // Diğer sayfa değişimlerini normal şekilde ele al
    aktifSayfaAdi.value = action;
  }
}

const handleLoginSuccess = () => {
  isLoggedIn.value = true; // Giriş yapıldı
  showUyePanel.value = true; // Üyelik panelini aç
};

// Sepete ürün ekleme fonksiyonu
const sepeteEkle = (urun) => {

  // 1) Sepete eklenen ürün zaten var mı kontrol et
  const mevcutUrun = sepet.value.find(item => item.id === urun.id);

  if (mevcutUrun) {
    // varsa miktarı arttır
    mevcutUrun.miktar += 1;
  } else {
    // yoksa yeni ürün olarak ekle
    sepet.value.push({ ...urun, miktar: 1 });
  }

  // 2) Sepet sayacını arttır
  cartCount.value++;

  
  if (mevcutUrun) {
    // Ürün zaten varsa miktarını artır
    mevcutUrun.miktar++;
  } else {
    // Ürün sepette yoksa, 1 miktar ile ekle
    sepet.value.push({ ...urun, miktar: 1 });
  }
  
  // Ekleme sonrası kullanıcıyı Sepet sayfasına yönlendir (Opsiyonel)
  aktifSayfaAdi.value = 'Sepet'; 
};

const props = defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
});


// Sayfa değişim fonksiyonu
const sayfaDegistir = (yeniSayfaAdi) => {
    aktifSayfaAdi.value = yeniSayfaAdi;
};

</script>

<template>
  <div  class="app-container">
    <HeaderComponent @sayfa-degistir="handleHeaderAction" 
    :isLoggedIn="isLoggedIn.value" 
    :sepet-urun-sayisi="sepet.length"  
     :cartCount="cartCount"
    @sayfaDegistir="sayfaDegistir"
  />

    <component 
  :is="AktifBilesen" 
  @sayfa-degistir="handleHeaderAction" 
  @login-success="handleLoginSuccess" 
  :sepet="sepet"
  @sepete-ekle="sepeteEkle"
  
  
/>
    <UyelikPanel 
      v-if="showUyePanel" 
      @kapat="showUyePanel = false" 
      @sayfa-degistir="handleHeaderAction"
    />
    <FooterComponent />
    
   
/>
    
  </div>
</template>

<style>
body {
  background-color: white;
  color: black;
  margin: 0; 
  padding: 0;
}
.app-wrapper {
  width: 100%;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}

body, html {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  overflow-x: hidden; /* Taşma engel */
}

.app-container {
  width: 100% !important;
  max-width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
}


</style>