<script>
import { playClickSound } from '../utils/clickSound'

import brushImg from '../assets/svg/brush-img.svg'
import taskKey from '../assets/svg/task-key.svg'
import avatar from '../assets/images/default-avatar.png'

import right_arrow from '../assets/svg/right-arrow.svg'
import left_arrow from '../assets/svg/left-arrow.svg'

import introImg from '../assets/images/img-intro6.png'
import workImg from '../assets/images/img-intro7.png'

export default {
  data() {
    return {
      user: null,
      commentText: '',
      avatar,

      users: [],

      sliderWidth: 0,

      introImg,
      taskKey,
      brushImg,
      workImg,

      right_arrow,
      left_arrow,

      currentSlide: 0,
      isMobile: false,

      reviews: [],
    }
  },

  methods: {
    addComment() {
      if (!this.commentText.trim()) {
        return
      }

      fetch('http://localhost:3000/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: this.user.id,
          text: this.commentText,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          this.reviews.push({
            id: data.id,
            text: data.text,
            name: this.user.name,
            avatar: this.user.avatar,
            likes: 0,
            dislikes: 0,
          })

          this.commentText = ''
        })
    },
    likeComment(id) {
      fetch(`http://localhost:3000/api/comments/${id}/like`, {
        method: 'POST',
        credentials: 'include',
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((data) => {
              throw new Error(data.error)
            })
          }

          return response.json()
        })
        .then(() => {
          const review = this.reviews.find((review) => review.id === id)

          if (review) {
            review.likes++
            review.dislikes = Math.max(0, review.dislikes - 1)
          }
        })
        .catch((error) => {
          console.log(error.message)
        })
    },

    dislikeComment(id) {
      fetch(`http://localhost:3000/api/comments/${id}/dislike`, {
        method: 'POST',
        credentials: 'include',
      })
        .then((response) => {
          if (!response.ok) {
            return response.json().then((data) => {
              throw new Error(data.error)
            })
          }

          return response.json()
        })
        .then(() => {
          const review = this.reviews.find((review) => review.id === id)

          if (review) {
            review.dislikes++
            review.likes = Math.max(0, review.likes - 1)
          }
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
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

    updateSliderWidth() {
      this.sliderWidth = this.$refs.slider.offsetWidth
      this.isMobile = window.innerWidth <= 900
    },
  },

  mounted() {
    const savedUser = localStorage.getItem('user')

    if (savedUser) {
      this.user = JSON.parse(savedUser)
    }
    fetch('http://localhost:3000/api/comments')
      .then((response) => response.json())
      .then((data) => {
        this.reviews = data
      })
    this.updateSliderWidth()

    window.addEventListener('resize', this.updateSliderWidth)
  },

  beforeUnmount() {
    window.removeEventListener('resize', this.updateSliderWidth)
  },
}
</script>

<template>
  <div v-for="user in users" :key="user.id" class="j-son">
    <p>{{ user.name }}</p>
    <p>{{ user.email }}</p>
  </div>
  <!-- <HeaderComponent /> -->
  <main class="main">
    <!-- intro starts -->

    <section class="intro">
      <div class="wrapper">
        <div class="intro-wrapper">
          <div class="intro-title-wrapper">
            <h1 class="section-title">Lorem ipsum</h1>
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
          <div class="work-foto-wrapper">
            <img :src="workImg" class="work-img" />
          </div>
          <div class="work-title-wrapper">
            <h1 class="section-title">Lorem ipsum</h1>
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
            <h1 class="section-title">Lorem ipsum</h1>
            <img :src="brushImg" class="title-brush brush-plan" />
            <p class="plan-subtitle">
              With whitepace, share your notes with your colleagues and collaborate on them. You can
              also publish a note to the internet and share the URL with others.
            </p>
          </div>
          <div class="plans">
            <div class="plan butt-radius">
              <div class="plan-title">Free</div>
              <div class="plan-price">$0</div>
              <div class="plan-sub-title">Capture ideas and find them quickly</div>
              <ul class="plan-list">
                <li class="plan-feature">Sync unlimited devices</li>
                <li class="plan-feature">10 GB monthly uploads</li>
                <li class="plan-feature">200 MB max. note size</li>
                <li class="plan-feature">Customize Home dashboard and access extra widgets</li>
                <li class="plan-feature">Connect primary Google Calendar account</li>
              </ul>
              <div class="plan-butt butt-radius">Get Started</div>
            </div>
            <div class="plan butt-radius plan-center">
              <div class="plan-title">Lorem ipsum</div>
              <div class="plan-price">$11.99</div>
              <div class="plan-sub-title">Capture ideas and find them quickly</div>
              <ul class="plan-list">
                <li class="plan-feature plan-feature-center">Sync unlimited devices</li>
                <li class="plan-feature plan-feature-center">10 GB monthly uploads</li>
                <li class="plan-feature plan-feature-center">200 MB max. note size</li>
                <li class="plan-feature plan-feature-center">
                  Customize Home dashboard and access extra widgets
                </li>
                <li class="plan-feature plan-feature-center">
                  Connect primary Google Calendar account
                </li>
              </ul>
              <div class="butt-blue butt-radius">Get Started</div>
            </div>
            <div class="plan butt-radius">
              <div class="plan-title">Organization</div>
              <div class="plan-price">$49.99</div>
              <div class="plan-sub-title">Capture ideas and find them quickly</div>
              <ul class="plan-list">
                <li class="plan-feature">Sync unlimited devices</li>
                <li class="plan-feature">10 GB monthly uploads</li>
                <li class="plan-feature">200 MB max. note size</li>
                <li class="plan-feature">Customize Home dashboard and access extra widgets</li>
                <li class="plan-feature">Connect primary Google Calendar account</li>
              </ul>
              <div class="plan-butt butt-radius">Get Started</div>
            </div>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </section>
    <!-- PLAN STAR ----------------------------------------------------------->

    <!--   START ----------------------------------------------------->
    <section class="taskkey-section">
      <div class="taskkey-wrapper">
        <h1 class="section-title taskkey-title">Lorem ipsum</h1>
        <img :src="taskKey" class="task-key-bg" />
        <img :src="brushImg" class="title-brush brush-taskkey" />
        <p class="taskkey-subtitle">
          Access your notes from your computer, phone or tablet by synchronising with various
          services, including whitepace, Dropbox and OneDrive. The app is available on Windows,
          macOS, Linux, Android and iOS. A terminal app is also available!
        </p>
        <a href="#!" class="butt-blue butt-radius task-key-butt">Try Taskey</a>
      </div>
    </section>
    <!-- TASKKEY END ----------------------------------------------------->

    <!-- TRUST START ------------------------------------------------------------>
    <section class="trusted">
      <div class="wrapper">
        <div class="trusted-title-wrapper">
          <h1 class="section-title">Lorem ipsum</h1>
          <img :src="brushImg" class="title-brush brush-trust" />
          <p class="trusted-subtitle">
            Whether you want to get organized, keep your personal life on track, or boost workplace
            productivity, Evernote has the right plan for you.
          </p>
        </div>

        <div ref="slider" class="slider">
          <div
            class="slider-track"
            :style="{
              transform: `translateX(-${currentSlide * (isMobile ? sliderWidth : 504)}px)`,
            }"
          >
            <div v-for="(review, index) in reviews" :key="index" class="card">
              <img
                :src="review.avatar ? `http://localhost:3000/uploads/${review.avatar}` : avatar"
                alt="Avatar"
                class="avatar"
              />

              <p class="revue-caption">{{ review.text }}</p>
              <p class="revue-name">{{ review.name }}</p>
              <div class="review-actions">
                <button @click="likeComment(review.id)">👍 {{ review.likes }}</button>

                <button @click="dislikeComment(review.id)">👎 {{ review.dislikes }}</button>
              </div>
            </div>
          </div>

          <div class="slider-butt-wrapper">
            <button @click="prevSlide" class="slider-butt">
              <img :src="left_arrow" class="arrow-style" />
            </button>

            <button @click="nextSlide" class="slider-butt">
              <img :src="right_arrow" class="arrow-style" />
            </button>
          </div>
        </div>
        <div class="comment-form">
          <template v-if="user">
            <h3>Leave a comment</h3>

            <textarea v-model="commentText" placeholder="Write your comment..."></textarea>

            <button @click="addComment" class="butt-blue butt-radius">Leave comment</button>
          </template>

          <p v-else>Войдите или зарегистрируйтесь, чтобы оставить комментарий.</p>
        </div>
      </div>
    </section>
    <!-- TRUST END ------------------------------------------------------------>
  </main>
  <!-- <FooterComponent /> -->
</template>
