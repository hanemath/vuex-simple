<template>
  <div id="app">
    <Navbar />
    <favorites-list-one></favorites-list-one>
    <favorites-list-two></favorites-list-two>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import FavoritesListOne from './components/FavoritesListOne'
import FavoritesListTwo from './components/FavoritesListTwo'

export default {
  components: {
    Navbar,
    'favorites-list-one' : FavoritesListOne,
    'favorites-list-two' : FavoritesListTwo,
  },
  name: 'app',
  data () {
    return {
      
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
