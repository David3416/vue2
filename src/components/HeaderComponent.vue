<script>
import headerLogo from '../assets/svg/header-logo.svg'
import { smoothScroll } from '../utils/smoothScroll'

export default {
  data() {
    return {
      isHeaderActive: false,
      headerLogo,
    }
  },

  methods: {
    handleScroll() {
      this.isHeaderActive = window.pageYOffset > 50
    },

    handleAnchorClick(event) {
      event.preventDefault()

      const target = event.currentTarget.getAttribute('href')

      smoothScroll(target, 1000)
    },
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    console.log('!!!!!!!')
    const links = document.querySelectorAll('.js-scroll')

    links.forEach((link) => {
      link.addEventListener('click', this.handleAnchorClick)
    })
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)

    const links = document.querySelectorAll('.js-scroll')

    links.forEach((link) => {
      link.removeEventListener('click', this.handleAnchorClick)
    })
  },
}
</script>

<template>
  <header :class="{ 'header-active': isHeaderActive }" class="header">
    <div class="wrapper">
      <div class="header-wrapper">
        <img :src="headerLogo" class="header-logo" alt="Whitepace" />

        <div class="butt-wrapper">
          <ul class="header-list">
            <li class="header-item">
              <a href="#features" class="js-scroll"> Features </a>
            </li>

            <li class="header-item">
              <a href="" class="header-link"> Articles </a>
            </li>

            <li class="header-item">
              <a href="" class="header-link"> Articles </a>
            </li>

            <li class="header-item">
              <a href="" class="header-link"> Articles </a>
            </li>
          </ul>

          <div class="butt-yellow butt-radius">
            <RouterLink to="/login"> Login </RouterLink>
          </div>

          <div class="butt-blue butt-radius">Try Whitepace free</div>
        </div>
      </div>
    </div>
  </header>
</template>
