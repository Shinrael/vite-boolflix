<script>
import Moviecard from './partials/Moviecard.vue'
import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
      }
    },
    components:{
      Moviecard,
    }
  }
</script>


<template>
  <main class="overflow-auto">
    <div class="container text-center">
      <h2  v-if="store.cardFilm.length === 0 & store.cardSeries.length === 0" class="text-danger">Comincia la tua ricerca!</h2>
      <h2 class="text-danger" v-if="store.cardFilm.length > 0">FILM</h2>
      <div class="row row-cols-4 pt-2">
        <Moviecard
          v-for="(movie,index) in store.cardFilm"
          :key="index"
          :poster_path="movie.poster_path"
          :originalTitle="movie.original_title"
          :title="movie.title"
          :original_language="movie.original_language"
          :rate="movie.vote_average"
          />          
      </div>
      <h2 class="text-danger" v-if="store.cardSeries.length > 0">SERIE TV</h2>
      <div class="row row-cols-4 pt-2">
        <Moviecard
          v-for="(tv,index) in store.cardSeries"
          :key="index"
          :poster_path="tv.poster_path"
          :original_name="tv.original_name"
          :name="tv.name"
          :original_language="tv.original_language"
          :rate="tv.vote_average"
          />
      </div>
    </div>

  </main>
</template>



<style lang="scss" scoped>
  main{
    background-color: #434343;
    height: calc(100vh - 100px);
  }
</style>