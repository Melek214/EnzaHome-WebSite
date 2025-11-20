<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from './components/Header.vue';
import UrunSayfasi from './components/UrunSayfasi.vue';
import AnaSayfa from './components/AnaSayfa.vue';
import GirisYapKayitOl from './components/GirisYapKayitOl.vue';
import UyelikPanel from './components/UyelikPanel.vue';
import FooterComponent from './components/Footer.vue';
import Cart from './components/Cart.vue';



// Aktif sayfa adını tutan değişken
const aktifSayfaAdi = ref('Anasayfa'); 
const isLoggedIn = ref(false); // Kullanıcı giriş yaptı mı? (Başlangıçta hayır)
const showUyePanel = ref(false); // Üyelik paneli açık mı?
const sepet = ref([]);

// Sayfa adlarını bileşenlerle eşleştiren obje
const sayfalar = {
  Anasayfa: AnaSayfa,
  UrunSayfasi: UrunSayfasi,
  GirisYap: GirisYapKayitOl,
   UyelikPanel: UyelikPanel,
   'Sepet': Cart
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
  // Basitçe ürünün miktarını 1 olarak ayarlar ve sepete ekler
  const mevcutUrun = sepet.value.find(item => item.id === urun.id);
  
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

// Sayfa değişim fonksiyonu
const sayfaDegistir = (yeniSayfaAdi) => {
    aktifSayfaAdi.value = yeniSayfaAdi;
};

</script>

<template>
  <div>
    <HeaderComponent @sayfa-degistir="handleHeaderAction" 
    :isLoggedIn="isLoggedIn.value" 
    :sepet-urun-sayisi="sepet.length"  
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 120px;
}
</style>