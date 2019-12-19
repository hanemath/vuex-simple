<template>
  <div id="favorites-list-one" class="container-fluid sale">
    <h2>SALE 50% OFF</h2>
    <div class="row justify-content-center">
      <div class="row col-12 justify-content-center">
        <div class="card col-2 shadow" style="width: 18rem;" v-for="favorite in saleProducts" v-bind:key="favorite.name">
          <img v-bind:src="favorite.image" class="card-img-top img-fluid" alt="Images"> 
          <div class="card-body">
              <p class="card-text name">Brand : {{favorite.name}}</p> <br>
              <p class="card-text vote">Price : {{favorite.price}}</p>
          </div>
        </div>
      </div>
      <button class="btn btn-custom" v-on:click="reducePrice(6)">Reduce Price</button>
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
  },
  methods: {
    reducePrice: function(amount) {
      /*this.$store.state.favorites.forEach(favorite => {
        favorite.price -= 1;
      }); */ //will be used if only have methods
      //this.$store.commit('reducePrice'); //will be used if only have a mutation
      this.$store.dispatch('reducePrice', amount)  //will be used if have mutation and action
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Hind|Lilita+One&display=swap');

#favorites-list-one {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.sale {
  padding: 20px;
  background-color: cadetblue;
}
.sale h2 {
  font-family: 'Lilita One', cursive;
  font-size: 50px;
}
.card p {
  font-family: 'Hind', sans-serif;
}
.shadow {
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  padding: 20px;
  margin: 20px;
  background-color: brown;
  color: beige;
}
.btn-custom {
  background-color: rgb(41, 41, 54);
  color: white;
  padding: 20px;
}
h1, h2 {
  font-weight: normal;
}
</style>
