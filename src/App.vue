<script setup>
import { ref, computed } from 'vue';
import HeaderComponent from './components/Header.vue';
import UrunSayfasi from './components/UrunSayfasi.vue';
import AnaSayfa from './components/AnaSayfa.vue';
import GirisYapKayitOl from './components/GirisYapKayitOl.vue';



// Aktif sayfa adını tutan değişken
const aktifSayfaAdi = ref('Anasayfa'); 

// Sayfa adlarını bileşenlerle eşleştiren obje
const sayfalar = {
  Anasayfa: Anasayfa,
  UrunSayfasi: UrunSayfasi,
  GirisYap: GirisYapKayitOl
};

// Şu an gösterilecek bileşeni hesaplayan computed özellik
const AktifBilesen = computed(() => {
  return sayfalar[aktifSayfaAdi.value] || Anasayfa;
});

// Sayfa değiştirme fonksiyonu
const sayfaDegistir = (yeniSayfaAdi) => {
  console.log("Sayfa değişiyor:", yeniSayfaAdi); // Konsoldan takip etmek için
  aktifSayfaAdi.value = yeniSayfaAdi;
};
</script>

<template>
  <div>
    <HeaderComponent @sayfa-degistir="sayfaDegistir"/>

    <component :is="AktifBilesen" @sayfa-degistir="sayfaDegistir" />
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