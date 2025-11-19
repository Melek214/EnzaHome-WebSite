<template>
  <div class="account-page-wrapper">
    <div class="form-grid-container">

      <div class="form-column register-column">
        <h1 class="page-title">Yeni Üyelik</h1>
        <p class="subtitle">Yeni bir üyelik oluşturmak için lütfen aşağıdaki formu doldurunuz.</p>

        <form @submit.prevent="handleAuthAction"> 
          <div class="form-row">
            <div class="form-group half-width">
              <label for="ad">Ad*</label>
              <input type="text" id="ad" v-model="registerData.ad" class="form-input" required />
            </div>
            <div class="form-group half-width">
              <label for="soyad">Soyad*</label>
              <input type="text" id="soyad" v-model="registerData.soyad" class="form-input" required />
            </div>
          </div>

          <div class="form-group full-width">
            <label for="reg-email">E-posta*</label>
            <input type="email" id="reg-email" v-model="registerData.email" class="form-input" required />
          </div>

          <div class="form-group full-width">
            <label for="cep-telefonu">Cep Telefonu*</label>
            <input type="tel" id="cep-telefonu" v-model="registerData.phone" class="form-input" required />
          </div>

          <div class="form-group full-width">
            <label for="reg-password">Şifre*</label>
            <div class="password-wrapper">
              <input 
                :type="showRegPassword ? 'text' : 'password'" 
                id="reg-password" 
                v-model="registerData.password" 
                class="form-input" 
                required 
              />
              <span class="eye-icon" @click="toggleRegPasswordVisibility">
                <svg v-if="!showRegPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              </span>
            </div>
          </div>
          
          <div class="checkbox-group">
            <input type="checkbox" id="aydinlatma" v-model="registerData.aydinlatma" required />
            <label for="aydinlatma">Kişisel verilerimin işlenmesi hakkında <a href="#">Aydınlatma Metnini</a> okudum ve anladım.</label>
          </div>
          
          <div class="checkbox-group">
            <input type="checkbox" id="iletisim" v-model="registerData.iletisim" />
            <label for="iletisim">İletişim izinleri</label>
          </div>

          <button type="submit" class="register-btn">ENZA ÜYELİĞİ OLUŞTUR</button>

          <p class="acceptance-text">Enza Üyeliği Oluştur'a basarak <a href="#">Üyelik Sözleşmesini</a> kabul ediyorum.</p>

        </form>
      </div>

      <div class="form-column login-column">
        <h1 class="page-title">Üye Girişi Yap</h1>

        <form @submit.prevent="handleAuthAction"> 
          <div class="form-group full-width">
            <label for="log-email">E-posta Adresi*</label>
            <input type="email" id="log-email" v-model="loginData.email" class="form-input" required />
          </div>

          <div class="form-group full-width">
            <label for="log-password">Şifre*</label>
            <div class="password-wrapper">
              <input 
                :type="showLogPassword ? 'text' : 'password'" 
                id="log-password" 
                v-model="loginData.password" 
                class="form-input" 
                required 
              />
              <span class="eye-icon" @click="toggleLogPasswordVisibility">
                <svg v-if="!showLogPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
              </span>
            </div>
          </div>
          
          <div class="forgot-password-link">
            <a href="#">Şifremi unuttum</a>
          </div>

          <button type="submit" class="login-btn">GİRİŞ YAP</button>
        </form>
      </div>

    </div>
  </div>
  </template>

<script setup>
import { ref, defineEmits } from 'vue';

// --- Giriş Yap (Login) Verileri ---
const aktifForm = ref('GirisYap'); // Başlangıçta Giriş Yap formunu göster
const emit = defineEmits(['sayfaDegistir', 'loginSuccess']); // 👇 YENİ EMIT TANIMI

// Butona tıklandığında çağrılacak fonksiyon
// Burası artık tüm formu gönderdiğimizde (submit) çalışır.
const handleAuthAction = () => {
    // Burada normalde API'ye istek atılır ve başarılı olup olmadığı kontrol edilir.
    
    // Biz başarılı girişi/kaydı simüle ediyoruz:
    console.log("Giriş/Kayıt Simülasyonu Başarılı. App.vue'ya sinyal gönderiliyor.");
    
    // 👇 App.vue'ya 'loginSuccess' olayını gönderiyoruz
    emit('loginSuccess');
    
    // Başarılı işlemden sonra ana sayfaya yönlendir (veya paneli aç)
    // Şimdilik ana sayfaya dönelim. App.vue paneli otomatik açacaktır.
    emit('sayfaDegistir', 'Anasayfa'); 
};

const loginData = ref({
  email: '',
  password: ''
});
const showLogPassword = ref(false);

const toggleLogPasswordVisibility = () => {
  showLogPassword.value = !showLogPassword.value;
};

// handleLogin fonksiyonu artık kullanılmadığı için silinebilir
/*
const handleLogin = () => {
  console.log('Giriş yapılıyor:', loginData.value);
};
*/

// --- Kayıt Ol (Register) Verileri ---
const registerData = ref({
  ad: '',
  soyad: '',
  email: '',
  phone: '',
  password: '',
  aydinlatma: false,
  iletisim: false
});
const showRegPassword = ref(false);

const toggleRegPasswordVisibility = () => {
  showRegPassword.value = !showRegPassword.value;
};

// handleRegister fonksiyonu artık kullanılmadığı için silinebilir
/*
const handleRegister = () => {
  console.log('Yeni üyelik oluşturuluyor:', registerData.value);
};
*/
</script>

<style scoped>
/* Stillerinizde değişiklik yapılmadı */
/* ... (Mevcut stiller) ... */

.account-page-wrapper {
  padding-top: 150px; /* Header altı boşluk */
  padding-bottom: 50px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
}

.form-grid-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px; /* Sayfanın maksimum genişliği */
  padding: 0 40px;
  gap: 100px;
}

.form-column {
  flex: 1; /* Her iki sütunun eşit genişlikte olması */
  padding: 0 20px;
}

.page-title {
  font-family: 'Times New Roman', Times, serif; 
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 20px;
  color: #333;
}

.subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 40px;
}

/* --- Form Alanları Genel --- */
.form-row {
    display: flex;
    gap: 20px;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

.half-width {
    flex: 1; /* Ad ve Soyad için eşit genişlik */
}

.full-width {
    width: 100%;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: bold;
  color: #999;
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  background-color: white; 
  border: 1px solid #ccc; 
  color: black; 
  border-radius: 0; 
  box-sizing: border-box;
}

.form-input:focus {
  outline: none;
  border-color: #333;
}

/* Şifre ve İkon Düzeni */
.password-wrapper {
  position: relative;
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;
  display: flex;
  align-items: center;
}

/* --- Kayıt Ol (Register) Alanı Özelleri --- */
.register-column {
    border-right: 1px solid #eee; /* İki sütun arasına ince çizgi (isteğe bağlı) */
    padding-right: 50px; 
}

.checkbox-group {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;
    font-size: 14px;
}

.checkbox-group input[type="checkbox"] {
    margin-top: 3px;
    margin-right: 10px;
    min-width: 15px;
    min-height: 15px;
    border: 1px solid black;
    cursor: pointer;
}

.checkbox-group a, .acceptance-text a {
    color: black;
    text-decoration: underline;
    font-weight: bold;
}

.acceptance-text {
    font-size: 12px;
    color: #666;
    margin-top: 15px;
}

/* --- Butonlar --- */
.login-btn, .register-btn {
  width: 100%;
  background-color: black;
  color: white;
  padding: 15px 0;
  font-size: 16px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-btn:hover, .register-btn:hover {
  background-color: #333;
}

/* --- Giriş Yap (Login) Alanı Özelleri --- */
.login-column {
    padding-left: 50px;
}

.forgot-password-link {
  text-align: left;
  margin-bottom: 30px;
}

.forgot-password-link a {
  color: black;
  font-size: 14px;
  text-decoration: underline;
  font-weight: 500;
}
</style>