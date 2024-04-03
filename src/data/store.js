import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=9d98bb1bbc4e57c59a70f2047905d222&query=matrix&language=it-IT',
  cardFilm: [],
})