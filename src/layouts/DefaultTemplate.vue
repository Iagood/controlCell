<template>
    <div>

        <nav-bar/>
        <!-- <div class="container container-body"> -->
            <router-view></router-view>
        <!-- </div> -->
        <preloader-component></preloader-component>
    </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './partials/NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>
<style scoped>
</style>
