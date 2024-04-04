<script>
  export default {
    props:{
      originalTitle : String,
      title : String, 
      original_name : String,
      name: String,
      original_language : String,
      rate : Number,
      poster_path : String,
    },
    computed:{
      languageFlag(){
        if (this.original_language === 'en') {
        return '../../../public/img/en.png';
      } else if (this.original_language === 'it') {
        return '../../../public/img/it.png';
      } else {
        return null;
      }
      },
      calculatedRate() {
      return Math.ceil(this.rate / 2);
    }
    },
    methods:{
      
    }    
  }
</script>


<template>
  <div class="col mb-2">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <img :src="'https://image.tmdb.org/t/p/w300/' + poster_path" :alt="title">
        </div>
        <div class="flip-card-back">
          <h3>Titolo: {{ title }} {{ name }} </h3> 
          <h5>Titolo Originale: {{ originalTitle }} {{ original_name }}</h5>
          <div v-if="languageFlag">
            <img :src="languageFlag" alt="Bandiera lingua">
          </div>
          <div v-else>
            <p> Lingua Originale: {{ original_language }}</p> 
          </div>
          <div class="stars">
            <p>Voto:
              <template v-for="index in 5">
                <i
                  class="fa-solid fa-star"
                  v-if="index <= calculatedRate"
                  :key="index">
                </i>
                <i
                  :key="'empty_' + index"
                  class="fa-regular fa-star"
                  v-else>
                </i>
              </template>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .flip-card {
  background-color: transparent;
  width: 302px;
  height: 452px;
  perspective: 1000px;
  &:hover .flip-card-inner{
    transform: rotateY(180deg);
  }
  .flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  border: 1px solid white;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  .flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  }
  .flip-card-front {
  background-color: #bbb;
  color: black;
  }
  .flip-card-back {
  background-color: black;
  color: white;
  transform: rotateY(180deg);
  img{
    width: 50px;
    height: 30px;
  }
  }
  }
}
</style>