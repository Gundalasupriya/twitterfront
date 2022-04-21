<template>
  <div>
    <br>
    <h4>All Posts:</h4>
    
    <hr>
    <table>
      <tr v-for="(post, i) in $store.state.Posts" :key="i">
        <th>
          <span @click="PostPage(post.postId)" class="postspan"
            ><span>{{ post.title }}</span></span
          >
        </th>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['Posts']),
  },
  created() {
    this.$store.dispatch('getPosts')
  },
  methods: {
    PostPage(id) {
      this.$router.push('/postpage/' + id)
    },
  },
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background-color: coral;
}
</style>
