<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from './components/Header.vue';
import UrunSayfasi from './components/UrunSayfasi.vue';
import AnaSayfa from './components/AnaSayfa.vue';
import GirisYapKayitOl from './components/GirisYapKayitOl.vue';
import UyelikPanel from './components/UyelikPanel.vue';



// Aktif sayfa adını tutan değişken
const aktifSayfaAdi = ref('Anasayfa'); 
const isLoggedIn = ref(false); // Kullanıcı giriş yaptı mı? (Başlangıçta hayır)
const showUyePanel = ref(false); // Üyelik paneli açık mı?

// Sayfa adlarını bileşenlerle eşleştiren obje
const sayfalar = {
  Anasayfa: AnaSayfa,
  UrunSayfasi: UrunSayfasi,
  GirisYap: GirisYapKayitOl,
   UyelikPanel: UyelikPanel
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



</script>

<template>
  <div>
    <HeaderComponent @sayfa-degistir="handleHeaderAction" :isLoggedIn="isLoggedIn.value" />

    <component 
  :is="AktifBilesen" 
  @sayfa-degistir="handleHeaderAction" 
  
  @login-success="handleLoginSuccess"  
/>
    <UyelikPanel 
      v-if="showUyePanel" 
      @kapat="showUyePanel = false" 
      @sayfa-degistir="handleHeaderAction"
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
</style>