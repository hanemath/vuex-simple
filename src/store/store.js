import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        favorites: [
            {name:'Laneige', vote: 24, price: 20}, 
            {name:'Skin2004', vote: 22, price: 19},
            {name:'Skinfood', vote: 20, price: 22},
            {name:'Arirang', vote: 18, price: 28},
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.favorites.map( favorite => {
                return {
                  name: '**'+favorite.name+'**',
                  price: favorite.price/2,
                }
              });
              return saleProducts;
        }
    }
})