<template>
  <div class="cart-wrapper">

    <div class="cart-page-container">

      <div class="campaign-bar">
        <div class="campaign-item">
          Sepetinize <strong>46.464,00</strong> değerinde daha kampanya ürünü ekleyin, 5.000 TL indirim kazanın.
        </div>
        <div class="campaign-item">
          Sepetinize <strong>2.146,00</strong> değerinde daha kampanya ürünü ekleyin, 5.000 TL indirim kazanın.
        </div>
        <div class="campaign-item">
          Sepetinize <strong>7.484,00</strong> değerinde daha kampanya ürünü ekleyin, 7.000 TL indirim kazanın.
        </div>
      </div>

      <div class="cart-main-content">

        <div class="cart-products-area">
          <div class="cart-header">
            <span class="cart-title">SEPETİM</span>
            <a href="#" class="continue-shopping">Alışverişe Devam Et</a>
          </div>

          <div class="product-list">

            <div class="cart-item">
              <div class="item-details">
                <div class="item-image-container">
                  <img src="/netha-koltuk.jpg" alt="Netha 3'lü Yataklı Koltuk + Berjer" class="item-image">
                </div>

                <div class="item-info">
                  <div class="item-name">Netha</div>
                  <div class="item-description">3'lü Yataklı Koltuk + Berjer</div>
                  <div class="delivery-time">6-8 hafta içerisinde teslim edilir.</div>
                </div>
              </div>

              <div class="item-controls">

                <div class="quantity-control">
                  <button class="qty-btn">-</button>
                  <input type="text" value="1" class="qty-input">
                  <button class="qty-btn">+</button>
                </div>

                <div class="price-section">
                  <span class="old-price">67.380,00 TL</span>
                  <span class="current-price">53.536,00 TL</span>
                </div>

                <button class="remove-btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="order-summary-area">

          <div class="summary-box">

            <div class="summary-header">
              <h4>SİPARİŞ ÖZETİ</h4>
              <span class="item-count">1 Ürün</span>
            </div>

            <div class="summary-line">
              <span>Ürünlerin Toplamı (1 ürün)</span>
              <span>57.360,00 TL</span>
            </div>

            <div class="summary-line highlight-line">
              <span>1000 TL Üzeri Kargo Bedava</span>
              <span class="free-text">Ücretsiz</span>
            </div>

            <div class="summary-line discount-line">
              <span>İndirim Toplamı</span>
              <span>-3.824,00 TL</span>
            </div>

            <div class="summary-total">
              <h4>TOPLAM</h4>
              <span class="total-amount">53.536,00 TL</span>
            </div>

          </div>

          <div class="discount-code-box">
            <label for="discount-code">İndirim Kodu</label>
            <div class="input-group">
              <input type="text" id="discount-code" placeholder="Kodu Giriniz">
              <button class="apply-btn">Uygula</button>
            </div>
          </div>

          <button class="checkout-btn">
            SEPETİ ONAYLA >
          </button>
        </div>

      </div>
          <ProductSlider />

    </div>

  </div>
</template>

<script setup>
// (Eğer Cart.vue içinde script'in varsa oraya ilave edebilirsin. 
//  Senin paylaştığın önceki sürümde script yoktu, sadece template+style kullandın.)
import { computed } from 'vue';
import ProductSlider from '../organisms/ProductSlider.vue'; // Slider bileşeni import edildi

const props = defineProps({
  sepet: {
    type: Array,
    default: () => []
  }
});

const urunSayisi = computed(() => {
  return props.sepet.length; 
});

const sepetToplami = computed(() => {
  return props.sepet.reduce((toplam, urun) => toplam + (urun.fiyat * urun.miktar), 0).toFixed(2);
});
</script>

<style scoped>
/* Wrapper sayfayı header kadar aşağı iter. Header yüksekliğine göre ayarla. */
.cart-wrapper {
  margin-top: 120px;
  /* Alternatif: margin-top: var(--header-height, 120px); */
  box-sizing: border-box;
}

/* Genel Yapı ve Konteyner */
.cart-page-container {
  max-width: 1400px;
  margin: 40px auto;
  padding: 0 20px;
}

/* --- Kampanya Çubuğu --- */
.campaign-bar {
  display: flex;
  justify-content: space-between;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
  background: #fff;
}

.campaign-item {
  flex: 1;
  padding: 10px;
  font-size: 12px;
  line-height: 1.4;
  text-align: center;
  border-right: 1px solid #e0e0e0;
  color: #333;
}

.campaign-item:last-child {
  border-right: none;
}

.campaign-item strong {
  color: #3a75c4; /* Enza Mavisi */
  font-weight: bold;
}

/* --- Ana İçerik --- */
.cart-main-content {
  display: flex;
  gap: 20px;
  align-items: flex-start; /* Üstten başlasınlar */
}

.cart-products-area {
  flex: 2; /* Sol taraf daha geniş (yaklaşık 60%) */
  border-right: 1px solid #e0e0e0;
  padding-right: 20px;
}

.order-summary-area {
  flex: 1; /* Sağ taraf daha dar (yaklaşık 40%) */
  max-width: 350px; /* Sağ tarafın çok genişlemesini engellemek için */
}

/* --- Sepet Başlığı --- */
.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 10px;
  border-bottom: 2px solid #333; /* Kalın siyah çizgi */
  margin-bottom: 20px;
}

.cart-title {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.continue-shopping {
  color: #3a75c4; /* Mavi link */
  text-decoration: none;
  font-size: 12px;
}

/* --- Ürün Kartı (Cart Item) --- */
.cart-item {
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #e0e0e0;
}

.item-details {
  display: flex;
  gap: 15px;
}

.item-image-container {
  width: 120px;
  height: 120px;
  overflow: hidden;
  background-color: #f5f5f5;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.item-description, .delivery-time {
  font-size: 14px;
  color: #666;
  margin-bottom: 3px;
}

/* --- Adet ve Fiyat Kontrolü --- */
.item-controls {
  display: flex;
  align-items: center;
  gap: 30px;
}

/* Adet Kontrol Butonları */
.quantity-control {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.qty-btn {
  background: none;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  font-size: 18px;
  color: #333;
}

.qty-input {
  width: 30px;
  text-align: center;
  border: none;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  height: 38px;
  box-sizing: border-box;
  font-size: 14px;
}
.qty-input:focus {
  outline: none;
}

/* Fiyat Bölümü */
.price-section {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    min-width: 100px;
}

.old-price {
    font-size: 14px;
    color: #999;
    text-decoration: line-through;
    margin-bottom: 2px;
}

.current-price {
    font-size: 18px;
    font-weight: bold;
    color: #333;
}

/* Silme Butonu */
.remove-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: #999;
    padding: 5px;
    margin-left: 10px;
}

.remove-btn:hover {
    color: #333;
}

/* --- Sipariş Özeti (Sağ Kısım) --- */
.summary-box {
  border: 1px solid #e0e0e0;
  padding: 20px;
  margin-bottom: 20px;
}

.summary-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
}

.summary-header h4 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.item-count {
  font-size: 14px;
  color: #666;
}

.summary-line {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.highlight-line {
  color: #6198e5; /* Yeşil tonu (Ücretsiz kargo) */
}

.free-text {
  font-weight: bold;
}

.discount-line {
  color: #dc3545; /* Kırmızı tonu (İndirim) */
}

.summary-total {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  border-top: 1px solid #e0e0e0;
  margin-top: 15px;
}

.summary-total h4 {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #333;
}

.total-amount {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* --- İndirim Kodu Alanı --- */
.discount-code-box {
  padding: 15px;
  border: 1px solid #e0e0e0;
  margin-bottom: 20px;
}

.discount-code-box label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
}

.input-group {
  display: flex;
}

.input-group input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  font-size: 14px;
  border-radius: 4px 0 0 4px;
  outline: none;
}

.apply-btn {
  background-color: #f8f8f8;
  color: #333;
  border: 1px solid #ccc;
  border-left: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0 4px 4px 0;
}

.apply-btn:hover {
  background-color: #eee;
}

/* --- Siparişi Onayla Butonu --- */
.checkout-btn {
  width: 100%;
  background-color: black;
  color: white;
  border: none;
  padding: 15px 0;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
}

.checkout-btn:hover {
  background-color: #333;
}

/* Responsive küçük ekran için hafif düzenleme */
@media (max-width: 900px) {
  .cart-main-content {
    flex-direction: column;
  }
  .cart-products-area {
    border-right: none;
    padding-right: 0;
  }
  .order-summary-area {
    max-width: none;
    width: 100%;
  }
}
</style>
