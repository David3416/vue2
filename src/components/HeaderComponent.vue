<script>
import burgerIcon from '../assets/images/burger-icon.png'
import headerLogo from '../assets/svg/header-logo.svg'
import { smoothScroll } from '../utils/smoothScroll'
import { playClickSound } from '../utils/clickSound'

export default {
  data() {
    return {
      burgerIcon,
      isHeaderActive: false,
      headerLogo,
      isMenuOpen: false,
      user: null,
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.user = null
    },
    playClickSound,
    handleScroll() {
      this.isHeaderActive = window.pageYOffset > 50
      console.log('!!!')
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

    const savedUser = localStorage.getItem('user')

    if (savedUser) {
      this.user = JSON.parse(savedUser)
    }

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
  },
}
</script>

<template>
  <header :class="{ 'header-active': isHeaderActive }" class="header">
    <div class="wrapper">
      <div class="wrap">
        <div class="header-wrapper">
          <RouterLink to="/" class="header-logo-link" @click="handleLogoClick">
            <img :src="headerLogo" class="header-logo" alt="Whitepace" />
          </RouterLink>
          <!--  header-nav-active это панель-->
          <div class="header-nav" :class="{ 'header-nav-active': isMenuOpen }">
            <ul class="header-list">
              <li class="header-item">
                <a href="#features" class="header-link" @mouseenter="playClickSound"> Products </a>
                <ul class="header-items-drop-active">
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                </ul>
              </li>

              <li class="header-item">
                <a href="#features" class="header-link" @mouseenter="playClickSound"> Solutions </a>
                <ul class="header-items-drop-active">
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                </ul>
              </li>
              <li class="header-item">
                <a href="#features" class="header-link" @mouseenter="playClickSound"> Resources </a>
                <ul class="header-items-drop-active">
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                </ul>
              </li>
              <li class="header-item">
                <a href="#features" class="header-link" @mouseenter="playClickSound"> Pricing </a>
                <ul class="header-items-drop-active">
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                  <li class="header-item-drop-active">
                    <a href="" class="header-item-drop-link" @mouseenter="playClickSound"> ... </a>
                  </li>
                </ul>
              </li>
            </ul>

            <template v-if="user">
              <span>{{ user.name }}</span>

              <button class="butt-yellow butt-radius" @click="logout">Logout</button>
            </template>

            <template v-else>
              <RouterLink to="/login" class="butt-yellow butt-radius" @click="isMenuOpen = false">
                Login
              </RouterLink>

              <RouterLink to="/register" class="butt-blue butt-radius" @click="isMenuOpen = false">
                Register
              </RouterLink>
            </template>
          </div>
        </div>
        <div class="burger-menu">
          <img @click="isMenuOpen = !isMenuOpen" :src="burgerIcon" alt="Menu" class="burger-icon" />
        </div>
      </div>
    </div>
  </header>
</template>
