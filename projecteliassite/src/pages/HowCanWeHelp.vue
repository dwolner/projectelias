<template>
    <q-page class="flex flex-center">
        
        <div class="row well">
            <div class="col-12 q-px-lg q-pt-lg">
                <h3>How can we help you today?</h3>
            </div>
            <div class="col-12 q-pa-md">
                <ContactForm inquiryTypeInput="" @success="success()" />
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
            // this.showPDFButton = true
            // this.scrollToElement('pdfbutton')
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
