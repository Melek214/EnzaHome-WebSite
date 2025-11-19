<template>
  <div class="uye-panel-backdrop" @click.self="$emit('kapat')">
    <div class="uye-panel-container">
      <div class="panel-header">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Arama yap" class="search-input" />
      </div>

      <div class="panel-content">
        <h2 class="user-greeting">Merhaba, Melek</h2>
        
        <div class="section-group">
          <h3 class="section-title">SİPARİŞLERİM</h3>
          <div class="list-item" @click="$emit('sayfaDegistir', 'Siparislerim')">
            <span>Tüm Siparişlerim</span>
            <span class="arrow-icon">></span>
          </div>
        </div>
        
        <div class="section-group">
          <h3 class="section-title">KİŞİSEL BİLGİLERİM</h3>
          <div class="list-item">
            <span>Profilim</span>
            <span class="arrow-icon">></span>
          </div>
          <div class="list-item">
            <span>Adreslerim</span>
            <span class="arrow-icon">></span>
          </div>
          <div class="list-item">
            <span>Email Değiştir</span>
            <span class="arrow-icon">></span>
          </div>
          <div class="list-item">
            <span>Şifre Değiştir</span>
            <span class="arrow-icon">></span>
          </div>
        </div>

        <div class="section-group">
          <div class="list-item">
            <span>Favorilerim</span>
            <span class="arrow-icon">></span>
          </div>
          <div class="list-item">
            <span>Kuponlarım</span>
            <span class="arrow-icon">></span>
          </div>
          <div class="list-item">
            <span>Sıkça Sorulan Sorular</span>
            <span class="arrow-icon">></span>
          </div>
        </div>
        
        <button class="logout-btn">ÇIKIŞ YAP</button>
      </div>

    </div>
  </div>
</template>

<script setup>
// Panel dışına tıklanınca paneli kapatmak için 'kapat' olayı tanımlanır
const emit = defineEmits(['kapat', 'sayfaDegistir']); 
</script>

<style scoped>
.uye-panel-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Hafif karartılmış arka plan */
  z-index: 1001; /* Header'dan daha yukarıda olmalı */
  display: flex;
  justify-content: flex-end; /* Paneli sağa yasla */
}

.uye-panel-container {
  width: 380px; /* Panel genişliği */
  background-color: white;
  height: 100%;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto; /* İçerik taşarsa kaydırma çubuğu */
}

.panel-header {
  display: flex;
  align-items: center;
  padding: 15px 25px;
  border-bottom: 1px solid #eee;
}

.search-icon {
  margin-right: 10px;
  color: #333;
}

.search-input {
  border: none;
  font-size: 16px;
  width: 100%;
  outline: none;
}

.panel-content {
  padding: 25px;
}

.user-greeting {
  font-family: 'Times New Roman', Times, serif; 
  font-size: 32px;
  font-weight: normal;
  margin-bottom: 40px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
}

.section-group {
  margin-bottom: 30px;
}

.section-title {
  font-size: 14px;
  color: #888;
  font-weight: bold;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  font-size: 16px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
}

.list-item:hover {
  color: #3a75c4;
}

.arrow-icon {
  font-weight: bold;
  font-size: 18px;
  color: #888;
}

.logout-btn {
  width: 100%;
  background-color: white;
  color: black;
  padding: 15px 0;
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  cursor: pointer;
  text-transform: uppercase;
  margin-top: 40px;
}

.logout-btn:hover {
  background-color: #f5f5f5;
}
</style>