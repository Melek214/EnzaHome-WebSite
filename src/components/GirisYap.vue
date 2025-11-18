<template>
  <div class="login-page-wrapper">
    <div class="login-form-container">
      
      <h1 class="page-title">Üye Girişi Yap</h1>

      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">E-posta Adresi*</label>
          <input type="email" id="email" v-model="email" class="form-input" required />
        </div>

        <div class="form-group">
          <label for="password">Şifre*</label>
          <div class="password-wrapper">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="password" 
              class="form-input" 
              required 
            />
            <span class="eye-icon" @click="togglePasswordVisibility">
              <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
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
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const handleLogin = () => {
  console.log('Giriş yapılıyor:', email.value);
};
</script>

<style scoped>
.login-page-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px; /* Header altı boşluk */
  padding-bottom: 50px;
  min-height: 80vh;
}

.login-form-container {
  width: 100%;
  max-width: 450px;
  padding: 20px;
  text-align: center;
}

.page-title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 36px;
  font-weight: normal;
  margin-bottom: 40px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
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
  border-color: #f4f0f0ff;
}

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

.login-btn {
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

.login-btn:hover {
  background-color: #333;
}
</style>