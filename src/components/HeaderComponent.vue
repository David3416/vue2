<script setup>
import headerLogo from '../assets/svg/header-logo.svg'
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="header-wrapper">
        <img :src="headerLogo" class="header-logo" alt="Whitepace" />
        <div class="butt-wrapper">
          <ul class="header-list">
            <li class="header-item">
              <a href="" class="header-link"> Articles </a>
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
          <div class="butt-yellow">Login</div>
          <div class="butt-blue">Try Whitepace free</div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
