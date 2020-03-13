<template>
  <div id="favorites-list-two" class="container-fluid fav">
    <h2>Most Favorite Brands 2019</h2>
    <div class="row justify-content-center">
        <div class="row col-12 justify-content-center">
            <div class="card col-2 shadow2" style="width: 18rem;" v-for="brand in brands" :key="brand.name">
                <div class="card-body">
                    <p class="card-text name">Brand : {{brand.name}}</p> <br>
                    <p class="card-text vote">Votes : {{brand.vote}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'favorites-list-two',
  computed: {
    ...mapState(['brands'])
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Hind|Lilita+One&display=swap');

#favorites-list-two {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.fav {
  padding: 15px;
}
.fav h2 {
  font-family: 'Lilita One', cursive;
  font-size: 50px;
}
.shadow2 {
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  padding: 20px;
  margin: 20px;
  background-color: cadetblue;
  color: beige;
}

h1, h2 {
  font-weight: normal;
}
p.vote {
  font-style: italic;
}
</style>
