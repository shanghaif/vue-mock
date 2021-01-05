<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data (){
    return{

    }
  },
  created(){
    axios.get('/api/login').then(res => {
      console.log(res)
    })
  }
}
</script>
