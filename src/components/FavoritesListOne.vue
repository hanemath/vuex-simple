<template>
  <div id="favorites-list-one" class="container-fluid">
    <h2>BRANDS in SALE</h2>
    <div class="row justify-content-center">
        <div class="row col-12 justify-content-center">
            <div class="card col-2 shadow" style="width: 18rem;" v-for="favorite in saleProducts" v-bind:key="favorite.name">
                <div class="card-body">
                    <p class="card-text name">Brand : {{favorite.name}}</p> <br>
                    <p class="card-text vote">Price : {{favorite.price}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'favorites-list-one',
  computed: {
    favorites(){
      return this.$store.state.favorites;
    },
    saleProducts() {
      return this.$store.getters.saleProducts;
    }
  }
}
</script>

<style>
#favorites-list-one {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin-top: 60px;
}

.shadow {
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    padding: 20px;
    margin: 20px;
    background-color: brown;
    color: beige;
}

h1, h2 {
  font-weight: normal;
}
</style>
