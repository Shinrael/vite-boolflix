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
      }
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
          <h1>{{ title }} {{ name }} </h1> 
          <h3>{{ originalTitle }} {{ original_name }}</h3>
          <div v-if="languageFlag">
            <img :src="languageFlag" alt="Bandiera lingua">
          </div>
          <div v-else>
            <p>{{ original_language }}</p> 
          </div>
          <p>{{ rate }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .flip-card {
  background-color: transparent;
  width: 300px;
  height: 450px;
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
  background-color: #2980b9;
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