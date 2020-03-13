import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//import image1 from '../assets/img/laneige.png'

export const store = new Vuex.Store({
    strict: true,
    state: {
        favorites: [
            {   name:'Laneige Water Sleeping Mask', brand: 'Laneige', vote: 24, price: 200, image: '/src/assets/img/laneige.jpg'
            }, 
            {   name:'Centella Asiatica Skin1004', brand: 'Skin1004', vote: 22, price: 190, image: '/src/assets/img/skin1004.jpg'
            },
            {   name:'Strawberry Mask Wash-Off Skinfood', brand: 'Skinfood', vote: 20, price: 220, image: '/src/assets/img/skinfood.jpg'
            },
            {   name:'Fresh Herb Nacific', brand: 'Nacific',  vote: 18, price: 280, image: '/src/assets/img/nacific.jpg'
            },
        ],
        brands: [
            { name: "Laneige", vote: 17, image: '/src/assets/img/laneige.png' },
            { name: "Skin1004", vote: 15, image: '/src/assets/img/skin1004-brand.jpg' },
            { name: "Skinfood", vote: 13, image: '/src/assets/img/skinfood.png' },
            { name: "Nacific", vote: 11, image: '/src/assets/img/nacific.png' },
        ]
    },
    getters: {
        saleProducts: state => {
            var saleProducts = state.favorites.map( favorite => {
                return {
                  name: favorite.name,
                  price: favorite.price/2,
                  image: favorite.image
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