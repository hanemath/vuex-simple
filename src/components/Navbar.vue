<template>
<div id="nav" class="row">
    <nav class="navbar .navbar-expand{-sm|-md|-lg|-xl} navbar-dark custombg fixed-top col-12">
        <router-link class="navbar-brand active col text-left" to="/"><b>Makeup Store</b></router-link>
        <router-link class="on-user col-1 pt-2 mx-0 my-0">
            <p><img src="" class="img-fluid col-12" alt=""></p>
        </router-link>
        <router-link class="on-user col-1 pt-2 mx-0" >
            <p><img src="" class="img-fluid col-12" alt=""></p>
        </router-link>
    </nav>
</div>   
</template>

<script>
export default {
    name: 'navbar',
}
</script>

<style>
nav .on-user{
    color:#fff;
}
#app .custombg {
    background-color: #ca6960;
}
</style>