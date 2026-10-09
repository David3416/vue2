<script>
export default {
  data() {
    return {
      comments: [],
    }
  },

  mounted() {
    fetch('http://localhost:3000/api/comments')
      .then((response) => response.json())
      .then((data) => {
        this.comments = data
      })
  },

  methods: {
    deleteComment(id) {
      const token = localStorage.getItem('token')

      fetch(`http://localhost:3000/api/comments/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(() => {
          this.comments = this.comments.filter((comment) => comment.id !== id)
        })
    },
  },
}
</script>

<template>
  <div class="admin-view">
    <h1 class="admin-view-title">Admin page</h1>

    <div v-for="comment in comments" :key="comment.id" class="admin-comment">
      <p>
        <strong>{{ comment.name }}</strong>
      </p>

      <p>{{ comment.text }}</p>

      <p>👍 {{ comment.likes }} 👎 {{ comment.dislikes }}</p>

      <button @click="deleteComment(comment.id)">Delete</button>
    </div>

    <div class="butt-yellow butt-radius">
      <RouterLink to="/">back</RouterLink>
    </div>
  </div>
</template>
