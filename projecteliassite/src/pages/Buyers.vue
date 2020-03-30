<template>
    <q-page class="flex flex-center">
        
        <div class="row well">
            <div class="col-12 q-pa-lg">
                <h3>Interested in buying?</h3> 
                <h6>Give us your info and we will start you off with our Buyer's Guide!</h6>
            </div>
            <div class="col-12 q-pa-md">
                <ContactForm inquiryTypeInput="Buying" @success="goToPDF()" />
            </div>
        </div>

    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'

export default {
    name: 'Buyers',

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
            window.open('https://richardelias.com/statics/BuyingaHomeSpring2020.pdf', '_blank')
        }
    },

    created() {
        
    }
}
</script>

<style scoped>
   
</style>
