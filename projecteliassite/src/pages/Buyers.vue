<template>
    <q-page class="flex flex-center">
        
        <div class="row well">
            <div class="col-12 q-px-lg q-pt-lg">
                <h3>Interested in buying?</h3> 
                <h6>Give us your info and we will start you off with our Buyer's Guide!</h6>
            </div>
            <div class="col-12 q-pa-md">
                <ContactForm inquiryTypeInput="Buying" @success="success()" />
            </div>
            <div id="pdfbutton" class="col-12 q-pa-lg">
                <q-btn v-if="showPDFButton" size="lg" class="full-width" color="primary" @click="goToPDF()">
                    <h6>Get The Buyer's Guide</h6>
                    <q-icon size="sm" name="fas fa-external-link-square-alt" class="q-ml-sm" />
                </q-btn>
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
            showPDFButton: false
        }
    },

    computed: {
       
    },

    methods: {
        success() {
            this.showPDFButton = true
            this.scrollToElement('pdfbutton')
        },

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
