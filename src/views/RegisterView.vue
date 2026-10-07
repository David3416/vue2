<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      avatar: '',
    }
  },

  methods: {
    register() {
      const formData = new FormData()

      formData.append('name', this.name)
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('avatar', this.avatar)

      fetch('http://localhost:3000/api/users', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
        })
    },
    handleAvatar(event) {
      this.avatar = event.target.files[0]
      console.log(this.avatar)
    },
  },
}
</script>

<template>
  <div class="register-page">
    <h1 class="register-page-title">Register</h1>

    <form @submit.prevent="register">
      <div>
        <label>Name</label>
        <input v-model="name" type="text" />
      </div>

      <div>
        <label>Email</label>
        <input v-model="email" type="email" />
      </div>

      <div>
        <label>Password</label>
        <input v-model="password" type="password" />
      </div>

      <div>
        <label>Avatar</label>
        <input type="file" @change="handleAvatar" accept="image/*" />
      </div>

      <button type="submit" class="butt-yellow butt-radius">Register</button>
    </form>

    <div class="butt-yellow butt-radius">
      <RouterLink to="/">back</RouterLink>
    </div>
  </div>
</template>
