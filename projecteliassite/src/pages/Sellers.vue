<template>
    <q-page class="flex flex-center">
        
        <div class="row well">

            <div class="col-xs-12" style="padding: 2rem 2.5rem 0;">
                <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal.reset="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Interested in selling?</h3>
                
                <span class="gt-sm" v-for="(item, index) in 6" v-scroll-reveal.reset="{ delay: index * 75, scale: .75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }" style="float: left;">
                    <svg version="1.1" id="svg" class="" width="50" height="50"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" xml:space="preserve" :style="`transform: rotate(-${ 45 - index * 9 }deg);`">
                        <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#000" />
                    </svg>
                </span>
            </div>

            <div class="col-xs-12 col-md-6 q-pa-md">
                <div class="col-12 q-px-lg">
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

            <div class="col-xs-12 col-md-6 q-pa-md" style="">

                <div class="row well justify-center relative-position" style="border: 2px solid rgb(11, 11, 11);">
                    
                    <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
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
                            style="max-width: 500px; height: 100%; margin: 0 auto; background: rgba(0, 0, 0, 0);"
                        >
                            <q-carousel-slide v-for="(id, index) in videoIDs" :key="index" :name="id" class="column no-wrap flex-center" style="padding-bottom: 50px; padding-top: 25px;">
                                <iframe sandbox="allow-scripts" :src="`https://www.simplifyingthemarket.com/en/videos/embed/${ id }`" frameborder="0" allowfullscreen :width="videoEmbedWidth" :height="videoEmbedHeight"></iframe>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
                        
                        <div id="homebot_homeowner" style="max-width: 400px;"></div>
                         
                    </div>
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

    mounted() {
        window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
    }
}
</script>

<style scoped>
   
</style>
