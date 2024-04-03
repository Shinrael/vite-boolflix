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
  <main>
    <div class="container text-center">
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
    </div>

  </main>
</template>



<style lang="scss" scoped>
  main{
    background-color: #434343;
    height: 100%;
  }
</style>