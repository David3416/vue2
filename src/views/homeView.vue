<script>
// import FooterComponent from '../components/FooterComponent.vue'
import { playClickSound } from '../utils/clickSound'
import brushImg from '../assets/svg/brush-img.svg'

import img1 from '../assets/images/img-intro1.png'
import img2 from '../assets/images/img-intro2.png'
import img3 from '../assets/images/img-intro3.png'
import img4 from '../assets/images/img-intro4.png'
import img5 from '../assets/images/img-intro5.png'

import right_arrow from '../assets/svg/right-arrow.svg'
import left_arrow from '../assets/svg/left-arrow.svg'

import introImg from '../assets/images/img-intro5.png'
import workImg from '../assets/images/img-intro5.png'

export default {
  // components: {
  //   HeaderComponent,
  //   FooterComponent,
  // },

  data() {
    return {
      introImg,
      brushImg,
      workImg,
      right_arrow,
      left_arrow,
      currentSlide: 0,
      reviews: [
        {
          name: 'Card 1',
          image: img1,
          caption:
            '“If you haven’t tried whitepace yet, you need to give it a shot for your next event. It’s so easy and intuitive to get a new event setup and if you need any help their customer service is seriously amazing.”',
        },
        { name: 'Card 2', image: img2 },
        { name: 'Card 3', image: img3 },
        { name: 'Card 4', image: img4 },
        { name: 'Card 5', image: img5 },
      ],
    }
  },
  methods: {
    playClickSound,
    nextSlide() {
      if (this.currentSlide < this.reviews.length - 3) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    },
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
            <h1 class="section-title">Get More Done with whitepace!!!!!!</h1>
            <img :src="brushImg" class="title-brush brush-intro" />
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

    <!-- WORK STARTS -------------------------------------->
    <section class="work">
      <div class="wrapper">
        <div class="work-wrapper">
          <img :src="workImg" class="work-img" />
          <div class="intro-title-wrapper">
            <h1 class="section-title">Work together</h1>
            <img :src="brushImg" class="title-brush brush-work" />
            <p class="intro-subtitle">
              With whitepace, share your notes with your colleagues and collaborate on them. You can
              also publish a note to the internet and share the URL with others.
            </p>

            <p class="butt-blue butt-radius">Try Whitepace free</p>
          </div>
        </div>
      </div>
    </section>
    <!-- WORK ENDS -------------------------------------->

    <!-- PLAN STAR ----------------------------------------------------------->
    <section class="plan-section">
      <div class="wrapper">
        <div class="plan-wrapper">
          <div class="plan-title-wrapper">
            <h1 class="section-title">Choose Your Plan</h1>
            <img :src="brushImg" class="title-brush brush-plan" />
            <p class="plan-subtitle">
              With whitepace, share your notes with your colleagues and collaborate on them. You can
              also publish a note to the internet and share the URL with others.
            </p>
          </div>
          <div class="plans"></div>
        </div>
      </div>
    </section>
    <!-- PLAN STAR ----------------------------------------------------------->

    <!-- TRUST START ------------------------------------------------------------>
    <section class="trusted">
      <div class="wrapper">
        <div class="trusted-title-wrapper">
          <h1 class="section-title">See what our trusted users Say</h1>
          <img :src="brushImg" class="title-brush brush-trust" />
          <p class="trusted-subtitle">
            Whether you want to get organized, keep your personal life on track, or boost workplace
            productivity, Evernote has the right plan for you.
          </p>
        </div>

        <div class="slider">
          <div
            class="slider-track"
            :style="{ transform: `translateX(-${currentSlide * 492 + currentSlide * 10}px)` }"
          >
            <div v-for="(review, index) in reviews" :key="index" class="card">
              <div class="card-img-wrapper">
                <img :src="review.image" alt="" class="card-img" />

                <p class="revue-caption">{{ review.caption }}</p>
                <p class="revue-name">{{ review.name }}</p>
              </div>
            </div>
          </div>

          <div class="slider-butt-wrapper">
            <button @click="prevSlide" class="slider-butt" @mouseclick="playClickSound">
              <img :src="left_arrow" class="arrow-style" />
            </button>

            <button @click="nextSlide" class="slider-butt">
              <img :src="right_arrow" class="arrow-style" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- TRUST END ------------------------------------------------------------>
  </main>

  <!-- <FooterComponent /> -->
</template>
