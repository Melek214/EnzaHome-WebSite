<script setup>
import { ref } from 'vue';
import HeaderComponent from './components/Header.vue';
import UrunSayfasi from './components/UrunSayfasi.vue';
import Anasayfa from './components/Anasayfa.vue'; // 👈 TÜRKÇE İSİM İLE İÇE AKTARILDI

// Hangi sayfanın aktif olduğunu tutan reaktif değişken
const aktifSayfa = ref('Anasayfa'); // Başlangıçta Anasayfa gösterilsin

// Sayfa geçişini yöneten fonksiyon
const sayfaDegistir = (yeniSayfaAdi) => {
  // Yalnızca UrunSayfasi'na geçiş yapıldığında veya Anasayfa'ya geri dönüldüğünde aktif sayfa değişir
  if (yeniSayfaAdi === 'UrunSayfasi') {
      aktifSayfa.value = 'UrunSayfasi';
  } else {
      aktifSayfa.value = 'Anasayfa'; // Diğer tüm linkler (Koltuklar, Seriler vb.) şimdilik Anasayfa'ya döner
  }
};
</script>

<template>
  <div>
    <HeaderComponent @sayfa-degistir="sayfaDegistir"/>

    <component :is="aktifSayfa === 'Anasayfa' ? Anasayfa : UrunSayfasi" 
               @sayfa-degistir="sayfaDegistir" 
    />
  </div>
</template>

<style>
/* Stil kısmı, sadece genel body ayarlarını tutacak şekilde sadeleştirildi */
body {
  background-color: white;
  color: black;
  margin: 0; /* Header'ın tam oturması için gerekli */
  padding: 0;
}
</style>