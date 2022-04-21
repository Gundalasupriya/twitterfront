<template>
<div>
    <RegisterHeader />
    
  <form @submit.prevent="register">
    <div class="container">
    <label><b>Name</b></label>
    <input type="text"  placeholder="Enter name"  v-model="full_name" required>

    <label><b>Password</b></label>
    <input type="password" placeholder="Enter Password"  v-model="password" required>
    <label><b>Email</b></label>
    <input type="text" placeholder="Enter Email"  v-model="email" required>
        
        
    <button type="submit">Register</button>
    
    </div>
      </form>
      </div>

</template>

<script>
// import Navbar from '../components/Navbar.vue'
export default {
name: 'register',
data()
{
  return {
    full_name: '',
   email: '',
    password: '',
  }
},
methods :{
  async register()
  {
    console.log(this.full_name)
    console.log(this.email)
    console.log(this.password)
    await this.$store.dispatch('registerUser', {
      full_name: this.full_name, 
      email: this.email, 
      password: this.password,
      })
    this.$router.push('/')
  }
}
}

</script>

<style  scoped>


input[type=text], input[type=password], input[type=email] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

img.avatar {
  width: 40%;
  border-radius: 50%;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}


</style>