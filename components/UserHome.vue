<template>
  <div class="topnav">
    <nuxt-link class="active" to="/">Twitter</nuxt-link>
    <!-- <a href="">News</a>
  <a href="">Contact</a> -->
    <!-- <nuxt-link to="/Register">Register</nuxt-link> -->

    <nuxt-link to="/Post">CreatePost</nuxt-link>
    <nuxt-link to="/Profile">Profile</nuxt-link>
    <a href="/">Logout</a>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.topnav {
  overflow: hidden;
  background-color: #333;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #ddd;
  color: black;
}

.topnav a.active {
  background-color: #04aa6d;
  color: white;
}
</style>
