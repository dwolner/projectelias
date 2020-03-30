<template>
    <q-page class="flex flex-center">
        
        <div class="row well">
            <div class="col-12 q-pa-lg">
                <h3>Interested in selling?</h3> 
                <h6>Give us your info and we will start you off with our Seller's Guide!</h6>
            </div>
            <div class="col-12 q-pa-md">
                <ContactForm inquiryTypeInput="Selling" @success="showPDFButton = true" />
            </div>
            <div class="col-12 q-pa-lg">
                <q-btn v-if="showPDFButton" size="lg" class="full-width" color="primary" @click="goToPDF()">
                    <h6>Get The Seller's Guide</h6>
                    <q-icon size="sm" name="fas fa-external-link-square-alt" class="q-ml-sm" />
                </q-btn>
            </div>
        </div>

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
            showPDFButton: false
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
