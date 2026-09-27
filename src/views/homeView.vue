<script>
// import HeaderComponent from '../components/HeaderComponent.vue'
// import FooterComponent from '../components/FooterComponent.vue'

import introImg from '../assets/images/img-intro.jpg'
import workImg from '../assets/images/img-work.jpg'

export default {
  // components: {
  //   HeaderComponent,
  //   FooterComponent,
  // },

  data() {
    return {
      introImg,
      workImg,
    }
  },
}
</script>

<template>
  <!-- <HeaderComponent /> -->
  <main class="main">
    <!-- intro starts -->
    <section class="intro">
      <div class="wrapper">
        <div class="intro-wrapper">
          <div class="intro-title-wrapper">
            <h1 class="intro-title">Get More Done with whitepace!!!!!!</h1>

            <p class="intro-subtitle">
              Project management software that enables your teams to collaborate, plan, analyze and
              manage everyday tasks
            </p>

            <p class="butt-blue butt-radius">Try Whitepace free</p>
          </div>

          <div class="intro-foto-wrapper">
            <img :src="introImg" class="intro-foto" />
          </div>
        </div>
      </div>
    </section>

    <!-- Work starts -->
    <section class="work">
      <div class="wrapper">
        <div class="work-wrapper">
          <img :src="workImg" class="work-img" />

          <div class="work-title-wrapper">
            <div class="work-title" id="features">Work togather</div>
          </div>
        </div>
      </div>
    </section>
    <!-- Work ends -->
  </main>

  <!-- <FooterComponent /> -->
</template>
