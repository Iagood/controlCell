<template>
    <loader v-if="loading" object='#FFFAFA' color1='#000000' color2='#FFCA2C' size='5' speed='2' bg='#343a40' objectbg='#999793' opacity='80' name='circular'></loader>
</template>

<script>
import  { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            loading: state => state.preloader
        })
    }
}
</script>