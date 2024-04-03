<script>
import axios from 'axios';
import { store } from './data/store';
import Header from './components/Header.vue';
import Main from './components/Main.vue';

  export default {
    components:{
      Header,
      Main,
    },
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl)
        .then(result =>{
          this.store.cardFilm = result.data.results;
          console.log(this.store.cardFilm);
        })
      }
    },
    mounted(){
      this.getApi()
    },
  }
</script>



<template>
  <body>
    <Header/>
    <Main/>
  </body>
</template>


<style lang="scss" scoped>

</style>