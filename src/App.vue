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
      getApiMovies(){
        axios.get(this.store.apiUrl + 'movie',{
          params: store.apiParams
        })
        .then(result =>{
          this.store.cardFilm = result.data.results;
          console.log(this.store.cardFilm);
        })
      },
      getApiSeries(){
        axios.get(this.store.apiUrl + 'tv',{
          params: store.apiParams
        })
        .then(res =>{
          this.store.cardSeries = res.data.results;
          console.log(this.store.cardSeries);
        })
      },
      startSearch(){
        this.getApiMovies(),
        this.getApiSeries()
      }        
    },
    mounted(){
      this.startSearch
    }
  }
</script>



<template>
  <body>
    <Header @startSearch="startSearch"/>
    <Main/>
  </body>
</template>


<style lang="scss" scoped>

</style>