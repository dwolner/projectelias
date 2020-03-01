<template>
    <q-page class="flex flex-center">
        <OpenhousesInner />
    </q-page>
</template>

<script>
import OpenhousesInner from '../components/OpenhousesInner'

export default {
    props: ['neighborhood'],

    components: {
        OpenhousesInner
    },

    data() {
        return {
           
        }
    },

    computed: {
       
    },

    methods: {
        
    },

    created() {
        
    }
}
</script>

<style scoped>
    
</style>