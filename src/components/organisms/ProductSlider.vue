<template>
  <!-- Tüm ürün kaydırıcı alanını kapsar -->
  <div class="product-slider">
    
    <!-- Başlık -->
    <h2 class="slider-title">Öne Çıkan Ürünler</h2>

    <!-- Kartların yatay olarak kaydırıldığı alan -->
    <div class="product-cards-wrapper" ref="sliderRef">

      <!-- products array'indeki her ürün için çalışır -->
      <!-- :key → vue performans için gerekli -->
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :image="item.image"
        :title="item.title"
        :desc="item.desc"
        :detail="item.detail"
        :price="item.price"
        :oldPrice="item.oldPrice"
      />
    </div>

    <!-- Sol tarafa kaydırma ok tuşu -->
    <div class="arrow arrow-left" @click="scrollLeft">‹</div>

    <!-- Sağ tarafa kaydırma ok tuşu -->
    <div class="arrow arrow-right" @click="scrollRight">›</div>

  </div>
</template>

<script setup>
/* ref → reactive değişken yapmak için */
import { ref } from 'vue'

/* Molekül kart bileşeni import */
import ProductCard from '../molecules/ProductCard.vue'

/* kaydırılacak alanı işaret eder */
const sliderRef = ref(null)

/* Ürün listesi — normalde backend'den gelir ama biz burada statik kullandık */
const products = [
  {
    id: 1,
    image: "/Terra.jpg",         // ürün resmi
    title: "Terra",              // ürün adı
    desc: "2,5'lu Koltuk, Keten Dokulu, 16007 Beyaz", // açıklama
    detail: "Beyaz Renk, Metal Ayak",                 // ek özellik
    price: "12.953,50 TL",        // indirimli fiyat
    oldPrice: "26.643,00 TL"      // eski fiyat
  },
  {
    id: 2,
    image: "/Paloma.jpg",
    title: "Paloma",
    desc: "Berjer,Keten Dokulu,55701 Krem",
    detail: "Yüksek Ayak",
    price: "8.992,00 TL",
    oldPrice: null                // eski fiyat yok (indirim yok)
  },
  {
    id: 3,
    image: "/Briza.jpg",
    title: "Briza",
    desc: "3'lü Yataklı Koltuk,Kadife Dokulu,13302 Haki",
    detail: "Yataklı-Sandıklı Fonksiyon, Yüksek Ayak",
    price: "14.990,00 TL",
    oldPrice: null
  },
  {
    id: 4,
    image: "/Loreto.jpg",
    title: "Loreto",
    desc: "Puf,Keten Dokulu,23502 Mavi",
    detail: "Kumaş Renk ve Doku Alternatifli",
    price: "3.636,50 TL",
    oldPrice: "5.195,00 TL"
  }
]

/* Sağ yön → kaydırıcıyı sağa 300px kaydırır */
const scrollRight = () => {
  sliderRef.value.scrollLeft += 300
}

/* Sol yön → kaydırıcıyı sola 300px kaydırır */
const scrollLeft = () => {
  sliderRef.value.scrollLeft -= 300
}
</script>

<style scoped>
/* Tüm slider alanı */
.product-slider {
  position: relative;
  width: 100%;
  margin: auto;
  padding: 20px 0;
}

/* Başlık stili */
.slider-title {
  text-align: left;
  font-size: 22px;
  margin-bottom: 15px;
  font-weight: bold;
}

/* Kaydırılabilir ürün kartları alanı */
.product-cards-wrapper {
  display: flex;          /* kartlar yan yana */
  gap: 20px;              /* kartlar arası boşluk */
  overflow-x: auto;       /* yatay kaydırma aktif */
  scroll-behavior: smooth;/* kaydırma animasyonlu */
  padding-bottom: 10px;
}

/* Sol/Sağ ok ikonları */
.arrow {
  position: absolute;
  top: 45%;
  font-size: 40px;
  cursor: pointer;
  background: white;
  padding: 5px 10px;
  user-select: none;
  border-radius: 10px;
  font-weight: bold;
}

/* Sol ok pozisyonu */
.arrow-left {
  left: 10px;
}

/* Sağ ok pozisyonu */
.arrow-right {
  right: 10px;
}
</style>
