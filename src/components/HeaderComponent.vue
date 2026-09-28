<script>
import headerLogo from '../assets/svg/header-logo.svg'
import { smoothScroll } from '../utils/smoothScroll'
import buttonSfx from '../assets/sound/click.mp3'

export default {
  data() {
    return {
      isHeaderActive: false,
      headerLogo,
      buttonSfx,
      clickAudio: null,
    }
  },
  methods: {
    handleScroll() {
      this.isHeaderActive = window.pageYOffset > 50
    },
    playClickSound() {
      console.log('HOVER', performance.now())
      console.log(this.clickAudio)
      console.log('READY STATE:', this.clickAudio.readyState)

      this.clickAudio.currentTime = 0
      this.clickAudio.play()
    },
    handleAnchorClick(event) {
      event.preventDefault()

      const target = event.currentTarget.getAttribute('href')

      smoothScroll(target, 1000)
    },
    handleLogoClick(event) {
      if (this.$route.path === '/') {
        event.preventDefault()

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
      }
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)

    this.clickAudio = new Audio(this.buttonSfx)
    this.clickAudio.load()

    const links = document.querySelectorAll('.header-link')

    links.forEach((link) => {
      link.addEventListener('click', this.handleAnchorClick)
    })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)

    const links = document.querySelectorAll('.header-link')

    links.forEach((link) => {
      link.removeEventListener('click', this.handleAnchorClick)
    })
    this.clickAudio = null
  },
}
</script>

<template>
  <header :class="{ 'header-active': isHeaderActive }" class="header">
    <div class="wrapper">
      <div class="header-wrapper">
        <RouterLink to="/" class="header-logo-link" @click="handleLogoClick">
          <img :src="headerLogo" class="header-logo" alt="Whitepace" />
        </RouterLink>
        <div class="butt-wrapper">
          <ul class="header-list">
            <li class="header-item">
              <a href="#features" class="header-link" @mouseenter="playClickSound"> Features </a>
              <ul class="header-items-drop-active">
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> aaa </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> bbb </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ccc </a>
                </li>
              </ul>
            </li>

            <li class="header-item">
              <a href="#features" class="header-link" @mouseenter="playClickSound"> Features </a>
              <ul class="header-items-drop-active">
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> aaa </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> bbb </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ccc </a>
                </li>
              </ul>
            </li>
            <li class="header-item">
              <a href="#features" class="header-link" @mouseenter="playClickSound"> Features </a>
              <ul class="header-items-drop-active">
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> aaa </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> bbb </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ccc </a>
                </li>
              </ul>
            </li>
            <li class="header-item">
              <a href="#features" class="header-link" @mouseenter="playClickSound"> Features </a>
              <ul class="header-items-drop-active">
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> aaa </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> bbb </a>
                </li>
                <li class="header-item-drop-active">
                  <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ccc </a>
                </li>
              </ul>
            </li>
          </ul>

          <RouterLink to="/login" class="butt-yellow butt-radius"> Login </RouterLink>
          <RouterLink to="/try" class="butt-blue butt-radius"> Try Whitepace free </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>
