<template>
  <div id="favorites-list-two" class="container-fluid">
    <h2>Most Favorite Brands</h2>
    <div class="row justify-content-center">
        <div class="row col-11 justify-content-center">
            <div class="card col-3 shadow2" style="width: 18rem;" v-for="favorite in favorites" v-bind:key="favorite.name">
                <div class="card-body">
                    <p class="card-text name">Brand : {{favorite.name}}</p> <br>
                    <p class="card-text vote">Votes : {{favorite.vote}}</p>
                    <p class="card-text vote">Price : {{favorite.price}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'favorites-list-two',
  computed: {
    favorites(){
      return this.$store.state.favorites;
    }
  }
}
</script>

<style>
#favorites-list-one {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.shadow2 {
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    padding: 20px;
    margin: 20px;
    background-color: chocolate;
    color: beige;
}

h1, h2 {
  font-weight: normal;
}
p.vote {
  font-style: italic;
}
</style>
