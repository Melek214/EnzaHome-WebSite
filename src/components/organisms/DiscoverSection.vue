<template>
  <div class="discover-wrapper">
    
    <!-- BÖLÜM 1: Yaşam Alanlarını Keşfedin -->
    <div class="content-row">
      <!-- Sol: Metin -->
      <div class="text-col">
        <h2 class="serif-title">Enza’nın Yaşam Alanlarını <br> Keşfedin</h2>
        <p class="desc-text">
          Enza Home, yaşam alanlarında kusursuz bir şıklık arayanları modern tasarım anlayışından ilham alarak son trendlerin ışığında özel olarak tasarladığı parçaları keşfetmeye davet ediyor.
        </p>
        <p class="desc-text">
          Görseldeki ürünlere tıklayarak keşfetmeye devam edebilirsiniz.
        </p>
        <button class="action-btn">İNCELE</button>
      </div>
      <!-- Sağ: Görsel -->
      <div class="image-col">
        <!-- Buraya kendi görselinizi koyun: /yasam-alani.jpg -->
        <img src="/yasam-alani.jpg" alt="Yaşam Alanı" class="feature-img">
      </div>
    </div>

    <!-- BÖLÜM 2: Tasarım Felsefesi -->
    <div class="content-row reverse-mobile">
      <!-- Sol: Tasarımcılar Grid -->
      <div class="image-col grid-col">
        <div class="designers-grid">
          <div class="designer-item">
            <img src="/jdd-design-studio.jpg" alt="JDD Design Studio">
            <span class="designer-name">JDD DESIGN STUDIO - ITALYA</span>
          </div>
          <div class="designer-item">
            <img src="/portekiz.jpg" alt="AT Design Studio">
            <span class="designer-name">AT DESIGN STUDIO - PORTEKİZ</span>
          </div>
          <div class="designer-item">
            <img src="/robin-rizzini.jpg" alt="Robin Rizzini">
            <span class="designer-name">ROBIN RIZZINI - İTALYA</span>
          </div>
          <div class="designer-item">
            <img src="/studio-memo.jpg" alt="Studio Memo">
            <span class="designer-name">STUDIO MEMO - İTALYA</span>
          </div>
        </div>
      </div>
      
      <!-- Sağ: Metin -->
      <div class="text-col">
        <h2 class="serif-title">Enza’nın Ulaşılabilir <br> Tasarım Felsefesi</h2>
        <h3 class="sub-title">Az çoktur !</h3>
        <p class="desc-text">
          Enza Home, kendi geniş tasarım ekibinin yanında, dünyadaki saygın tasarım ofisleri ile de çalışarak; özgün şık, modern ve fonksiyonel mobilyaları evlerde buluşturur.
        </p>
        <p class="desc-text">
          Sadece estetik ve şık mobilya tasarımıyla değil, birbirinden özel dekorasyon fikirleriyle de kullanıcılarının yaşamlarına farklılık ve zarafet getiren Enza Home, onlara daima en iyiyi, en yeniyi ve en ulaşılabilir sunmayı amaçlar.
        </p>
        <button class="action-btn">İNCELE</button>
      </div>
    </div>

  </div>
</template>

<style scoped>
.discover-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 20px;
}

.content-row {
  display: flex;
  align-items: center;
  gap: 50px;
  margin-bottom: 100px; /* Bölümler arası boşluk */
}

.content-row:last-child {
  margin-bottom: 0;
}

/* --- Metin Alanları --- */
.text-col {
  flex: 1;
}

.serif-title {
  font-family: 'Times New Roman', Times, serif; /* Görseldeki tırnaklı font */
  font-size: 38px;
  line-height: 1.2;
  font-weight: normal;
  color: #222;
  margin-bottom: 30px;
}

.sub-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.desc-text {
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* --- Buton --- */
.action-btn {
  background: none;
  border: 1px solid #000;
  padding: 12px 40px;
  font-size: 13px;
  font-weight: 400;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 10px;
  transition: none !important;
  border-radius:0;
}

.action-btn:hover {
  background: none !important;   /* Beyaz kalacak */
  color: black !important;       /* Yazı siyah kalacak */
  border-color: black !important;
}

/* --- Görsel Alanları --- */
.image-col {
  flex: 1.2; /* Görsel alanı metinden biraz daha geniş */
}

.feature-img {
  width: 100%;
  height: auto;
  display: block;
}

/* --- Tasarımcılar Grid --- */
.designers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr; /* 2 sütun */
  gap: 10px;
}

.designer-item {
  position: relative;
}

.designer-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: grayscale(100%); /* Siyah beyaz efekt */
  transition: filter 0.3s;
}

.designer-item:hover img {
  filter: grayscale(0%); /* Hover'da renkli */
}

.designer-name {
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
}

/* --- Responsive (Mobil) --- */
@media (max-width: 900px) {
  .content-row {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  /* Tasarım felsefesi kısmında mobilde önce görsel sonra yazı gelsin */
  .reverse-mobile {
    flex-direction: column-reverse;
  }
  
  .serif-title {
    font-size: 28px;
  }
}
</style>