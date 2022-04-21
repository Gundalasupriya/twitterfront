<template>
  <div class="topnav">
    <nuxt-link class="active" to="/">Twitter</nuxt-link>
    <nuxt-link to="/Register">Register</nuxt-link>

    
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
