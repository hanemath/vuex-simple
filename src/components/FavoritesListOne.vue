<template>
  <div id="favorites-list-one" class="container-fluid sale">
    <h2>SALE 50% +20% OFF*</h2>
    <div class="row justify-content-center">
      <div class="row col-12 justify-content-center">
        <div class="card col-2 shadow" style="width: 18rem;" v-for="favorite in saleProducts" :key="favorite.name">
          <img :src="favorite.image" class="card-img-top img-fluid" alt="Images"> 
          <div class="card-body">
              <p class="card-text name">{{favorite.name}}</p> <br>
              <p class="card-text saleprice">Now Only IDR {{favorite.price}}K</p>
          </div>
        </div>
      </div>
      <button class="btn btn-custom" @click="reducePrice(6)">Do Something</button>
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
@import url('https://fonts.googleapis.com/css?family=Muli:500&display=swap');

#favorites-list-one {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.sale {
  padding: 20px;
  background-color: #fff;
}
.sale h2 {
  font-family: 'Lilita One', cursive;
  font-size: 50px;
}
.card {
  border: 0;
}
.card-img-top {
  height: 18vw;
  padding: 0;
}
.card .name {
  font-family: 'Muli', sans-serif;
  font-weight: 700;
}
.card .saleprice {
  font-family: 'Hind', sans-serif;
  font-style: 
}
.shadow {
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  padding-top: 0;
  padding-right: 0;
  padding-left: 0;
  padding-bottom: 0;
  margin: 20px;
  background-color: #fff;
  color: #000;
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
