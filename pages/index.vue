<template>
  <div>
  <div v-if="token == null">
    <Header />
    <UserLogin />
  </div>
  <div v-else>
    <UserHome />
    <Posts />

  </div>



    
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import UserLogin from '~/components/UserLogin.vue'
import UserHome from '~/components/UserHome.vue'
import Posts from '~/components/Posts.vue'
import { mapState } from 'vuex'
export default {
  components: { 
    Posts,
     UserHome, 
     UserLogin, 
     Header },
  computed: {
    ...mapState(['token']),
  },

}
</script>

<style>

</style>