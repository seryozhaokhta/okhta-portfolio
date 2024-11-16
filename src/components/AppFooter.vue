<!-- components/AppFooter.vue -->

<template>
  <footer class="footer">
    <button
      id="email-button"
      class="email-button"
      @click="copyToClipboard($t('footer.email'))"
    >
      <img class="copy-icon" src="@/assets/to_copy.svg" alt="Copy" />
      <span id="email-text">{{ $t('footer.email') }}</span>
    </button>
    <div class="social-links">
      <a href="#" class="social-link">
        <img
          :src="require('@/assets/github.svg')"
          alt="Github"
          class="social-icon"
        />
      </a>
      <a href="#" class="social-link">
        <img
          :src="require('@/assets/linkedin.svg')"
          alt="LinkedIn"
          class="social-icon"
        />
      </a>
      <a href="#" class="social-link">
        <img
          :src="require('@/assets/youtube.svg')"
          alt="YouTube"
          class="social-icon"
        />
      </a>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const copyToClipboard = (email) => {
  navigator.clipboard
    .writeText(email)
    .then(() => {
      const emailText = document.getElementById('email-text');
      emailText.textContent = t('footer.copy');
      setTimeout(() => {
        emailText.textContent = email;
      }, 2000);
    })
    .catch((err) => {
      console.error('Could not copy text: ', err);
    });
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-default);
  color: var(--text-color-default);
  padding: 20px;
  border-top: 1px solid var(--border-color-default);
  flex-shrink: 0;
}

.dark-theme .footer {
  background-color: var(--background-dark);
  color: var(--text-color-dark);
  border-top: 1px solid var(--border-color-dark);
}

.email-button {
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  font: inherit;
  padding: 0;
  margin: 0;
}

.copy-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.social-links {
  display: flex;
  gap: 10px;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
}

.social-icon {
  width: 24px;
  height: 24px;
  transition: opacity 0.3s;
}

.social-link:hover .social-icon {
  opacity: 0.7;
}
</style>
