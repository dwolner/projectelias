<template>
    <q-page class="flex flex-center">
        
        <h3>Interested in selling?</h3> 
        <h6>Give us your info and we will start you off with our Seller's Guide!</h6>

        <ContactForm inquiryTypeInput="Selling" @success="goToPDF()" />

    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
    name: 'Sellers',

    components: {
        ContactForm
    },

    data() {
        return {
          
        }
    },

    computed: {
       
    },

    methods: {
        goToPDF() {
            window.open('https://richardelias.com/statics/SellingYourHouseSpring2020.pdf', '_blank')
        }
    },

    created() {
        
    }
}
</script>

<style scoped>
   
</style>
