<script>
// import HeaderComponent from '../components/HeaderComponent.vue'
// import FooterComponent from '../components/FooterComponent.vue'

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
    <section class="trusted">
      <div class="wrapper">
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
            <button @click="nextSlide" class="slider-butt">
              <img :src="left_arrow" class="left_arrow" />
            </button>

            <button @click="prevSlide" class="slider-butt">
              <img :src="right_arrow" class="right-arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- Work ends -->
  </main>

  <!-- <FooterComponent /> -->
</template>
