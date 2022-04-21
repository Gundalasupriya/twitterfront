<template>
  <div>
      <div>
          <form @submit.prevent="createPost">
              <label for="">
                  Title: <input type="text" v-model="title">
              </label>
              <input type="submit">
          </form>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: ''
        }
    },
    methods:{
        createPost(){
            this.$store.dispatch('createPost', this.title)
        }
    }

}
</script>

<style>

</style>