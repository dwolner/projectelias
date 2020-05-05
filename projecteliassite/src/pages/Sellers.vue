<template>
    <q-page class="flex flex-center">
        
        <div class="row well">

            <div class="col-xs-12 q-pa-md">
                <div class="col-12 q-pa-lg">
                    <h3>Interested in selling?</h3> 
                    <h6>Give us your info and we will start you off with our Seller's Guide!</h6>
                </div>
                <div class="col-12 q-pa-md">
                    <ContactForm inquiryTypeInput="Selling" @success="success()" />
                </div>
                <div id="pdfbutton" class="col-12 q-pa-lg">
                    <q-btn v-if="showPDFButton" size="lg" class="full-width" color="primary" @click="goToPDF()">
                        <h6>Get The Seller's Guide</h6>
                        <q-icon size="sm" name="fas fa-external-link-square-alt" class="q-ml-sm" />
                    </q-btn>
                </div>
            </div>

            <div class="col-xs-12 q-pa-md">

                <div class="row well justify-center relative-position" style="margin: 2rem 0;">
                    <div class="col-xs-12 q-pa-sm" align="center">
                        <h5>Top Videos For Sellers</h5>

                        <q-carousel 
                            v-model="slideIndex" 
                            class="rounded-borders"
                            control-color="black"
                            transition-prev="slide-right" 
                            transition-next="slide-left" 
                            animated 
                            swipeable 
                            navigation 
                            padding 
                            arrows
                            infinite
                            style="max-width: 800px; height: 100%; margin: 0 auto; background: rgba(0, 0, 0, 0)"
                        >
                            <q-carousel-slide v-for="(id, index) in videoIDs" :key="index" :name="id" class="column no-wrap flex-center" style="padding-bottom: 75px;">
                                <iframe sandbox="allow-scripts" :src="`https://www.simplifyingthemarket.com/en/videos/embed/${ id }`" frameborder="0" allowfullscreen :width="videoEmbedWidth" :height="videoEmbedHeight"></iframe>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>

                    <!-- <div class="col-xs-12 col-md-6 q-pa-sm" align="center">
                        
                        <div id="homebot_homeowner"></div>
                        
                    </div> -->
                </div>

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
            slideIndex: '35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9',
            showPDFButton: false,
            videoIDs: ['35238-70afc3829d7f0cdac24400a255ace4ba/a19b2bc9', '35238-70afc3829d7f0cdac24400a255ace4ba/ed23d645', '35238-70afc3829d7f0cdac24400a255ace4ba/1c3d0d96']
        }
    },

    computed: {
        videoEmbedWidth() {
            let width = this.$q.screen.width < 1024 ? this.$q.screen.width : 1024
            return this.$q.screen.width > 599 ? (width - 128) / 3 : (width - 112)
        },

        videoEmbedHeight() {
            return this.videoEmbedWidth * .5625
        }
    },

    methods: {
        success() {
            this.showPDFButton = true
            this.scrollToElement('pdfbutton')
        },

        goToPDF() {
            window.open('https://richardelias.com/statics/SellingYourHouseSpring2020.pdf', '_blank')
        }
    },

    created() {
        window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
    }
}
</script>

<style scoped>
   
</style>
