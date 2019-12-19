import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
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
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.favorites.forEach(favorite => {
                //favorite.price -= 1; //if using a fix amount
                favorite.price -= payload;
            });
        }
    },
    actions: {
        reducePrice: (context, payload) => {
            setTimeout(function(){
                context.commit('reducePrice', payload)
            }, 2000)
        }
    }
})