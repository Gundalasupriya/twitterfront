<template>
  <div>
    <table>
      <tr>
        <td>
          <input type="text" v-model="postText" v-if="isUpdating" />
          <h2 v-else>{{ post.title }}</h2>
        </td>
      </tr>
      <tr >
        <td v-if="post.userId == id">
          <button  v-if="!isUpdating" @click="isUpdate">Update</button>
          <button v-if="!isUpdating" @click="deletePost(post.postId)"> Delete</button>
          <button v-if="isUpdating" @click="updatePost">Submit</button>
        </td>
      </tr>
    </table>
    <!-- <input type="text" v-model="postText" v-if="isUpdating" />
    <h2 v-else>{{ post.title }}</h2>
    <div v-if="post.UserId == user_id">
      <button v-if="!isUpdating" @click="isUpdate">Update</button>
      <button v-if="!isUpdating" @click="deletePost(post.id)">Delete</button>
      <button v-if="isUpdating" @click="updatePost">Submit</button>
    </div> -->
    <h3>Comments :</h3>
  <div v-for="(comment, i) in comments" :key="i">
    <p>{{comment.commentText}}</p>
    <button v-if="comment.userId == id" @click="deleteComment(comment.id)">Delete</button>

  </div>
    <div>
      <label>Comment here:</label>
      <input type="text" v-model="commentText" />
      <button @click="createComment">Comment</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      postText: '',
      commentText: '',
      isUpdating: false,
    }
  },
  computed: {
    ...mapState(['post', 'comments', 'id']),
  },
  async created() {
      await  this.$store.dispatch('getComments')
    await this.$store.dispatch('getPost')
  },
  methods: {
    async createComment() {
      await this.$store.dispatch('createComment', this.commentText)

      await this.$store.dispatch('getComments')
      this.commentText = ''
    },
    async deleteComment(id) {
      await this.$store.dispatch('deleteComment', id)
      await this.$store.dispatch('getComments')
    },
    async deletePost(id) {
      console.log(id)
      await this.$store.dispatch('deletePost', id)
      // await this.$$store.dispatch('getPosts');
      this.$router.push('/')
    },
    isUpdate() {
      this.isUpdating = true
      this.postText = this.post.title
    },
    updatePost() {
      this.isUpdating = false
      this.$store.dispatch('updatePost', this.postText)
      this.$store.commit('updatePost', this.postText)
    },
  },
}
</script>

<style></style>
