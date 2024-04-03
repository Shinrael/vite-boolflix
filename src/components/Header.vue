<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store,
      }
    }
  }
</script>


<template>
  <header>
    <div class="container d-flex justify-content-end">
      <form class="d-flex pt-4" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Cerca</button>
      </form>
    </div>
  </header>
</template>



<style lang="scss" scoped>
  header{
    height: 100px;
    background-color: black;
  }
</style>