<template>
     <div>
         <p>FullName:
             <input type ="text" v-model ="name" v-if ="isUpdating">
             <span v-else>{{fullname}}</span>
         <button class="button" v-if="!isUpdating" @click="isUpdate">Edit</button>
         <button v-if="isUpdating" @click="UpdateName">Submit</button>
         </p><br>
         <p>Email:{{email}}</p>
     </div>
</template>

<script>
import { mapState } from 'vuex'
export default {

    computed: {
        ...mapState([
            'fullname',
            'email'])
    
    },
    data() {
        return {
            name: '',
            isUpdating: false
        }
    },
    

    
    methods: {
        isUpdate() {
            this.isUpdating = true
           this.name = this.fullname
            
        },
        UpdateName() {
            this.isUpdating=false;
            this.$store.dispatch('UpdateName', 
                this.name);
                this.$store.commit('UpdateName',
                    this.name);
                
            }
        }
    }



</script>

<style scoped>
.button{
    border: solid 1px black;
}

</style>