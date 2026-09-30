<script>
import footerLogo from '../assets/svg/footer-logo.svg'
export default {
  data() {
    return {
      footerLogo,
      isLanguageOpen: false,
    }
  },
}
</script>

<template>
  <footer class="footer">
    <div class="wrapper">
      <footer class="footer">
        <div class="footer-top">
          <!-- Brand -->
          <div class="footer-brand">
            <a href="#" class="footer-logo">
              <img src="../assets/svg/footer-logo.svg" alt="Whitepace" />
              <span>whitepace</span>
            </a>

            <p>
              whitepace was created for the new ways we live and work. We make a better workspace
              around the world
            </p>
          </div>

          <!-- Product -->
          <div class="footer-column">
            <h3>Product</h3>

            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Customer stories</a></li>
            </ul>
          </div>

          <!-- Resources -->
          <div class="footer-column">
            <h3>Resources</h3>

            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Guides & tutorials</a></li>
              <li><a href="#">Help center</a></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-column">
            <h3>Company</h3>

            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Media kit</a></li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="footer-cta">
            <h2>Try It Today</h2>

            <p>Get started for free. Add your whole team as your needs grow.</p>

            <a href="#" class="footer-button"> Start today → </a>
          </div>
        </div>

        <!-- BOTTOM -->

        <div class="footer-bottom">
          <div class="footer-language-wrapper">
            <div class="footer-language" @click="isLanguageOpen = !isLanguageOpen">🌐 English⌄</div>

            <div class="dropdown-content" :class="{ 'dropdown-content--open': isLanguageOpen }">
              <a href="#">English</a>
              <a href="#">Русский</a>
            </div>
          </div>

          <div class="footer-legal">
            <a href="#">Terms & privacy</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
          </div>

          <div class="footer-copyright">©2021 Whitepace LLC.</div>

          <div class="footer-socials">
            <a href="#">f</a>
            <a href="#">♥</a>
            <a href="#">in</a>
          </div>
        </div>
      </footer>
    </div>
  </footer>
</template>
