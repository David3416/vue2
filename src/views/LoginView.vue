<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },

  methods: {
    login() {
      fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.error) {
            return
          }

          localStorage.setItem('user', JSON.stringify(data.user))
          localStorage.setItem('token', data.token)
          console.log('User logged in:', data.user)

          this.$router.push('/')
        })
    },
  },
}
</script>
<template>
  <div class="login-view">
    <h1 class="login-view-title">Login</h1>

    <form @submit.prevent="login">
      <div>
        <label>Email</label>
        <input v-model="email" type="email" />
      </div>

      <div>
        <label>Password</label>
        <input v-model="password" type="password" />
      </div>

      <button type="submit" class="butt-yellow butt-radius">Login</button>
    </form>

    <div class="butt-yellow butt-radius">
      <RouterLink to="/">back</RouterLink>
    </div>
  </div>

  <!-- <div class="login-view">
    <h1 class="login-view-title">Login page</h1>

    <div class="butt-yellow butt-radius login-return">
      <RouterLink to="/"> back </RouterLink>
    </div>
  </div> -->
</template>
