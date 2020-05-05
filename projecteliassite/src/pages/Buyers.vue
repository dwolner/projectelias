<template>
    <q-page class="flex flex-center">

        <div class="row well">

            <div class="col-xs-12 q-pa-md">
                <div class="col-12 q-px-lg q-pt-lg">
                    <h3>Interested in buying?</h3> 
                    <h6>Give us your info and we will start you off with our Buyer's Guide!</h6>
                    <p class="q-my-sm">Check out more info about buying below.</p>
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
            
            <div class="col-xs-12 q-pa-md">

                <div class="row well justify-center relative-position" style="margin: 2rem 0;">
                    <div class="col-xs-12 col-md-6 q-pa-sm" align="center">
                        <h5>Top Videos For Buyers</h5>

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

                    <div class="col-xs-12 col-md-6 q-pa-sm" align="center">

                        <div class="row well relative-position" style="min-height: 1rem;">
                            <div class="col-xs-6" align="right">
                                <q-img src="statics/team/Tom_lender.jpg" style="max-width: 7.5rem;" />
                            </div>

                            <div class="col-xs-6 q-pl-md" align="left">
                                <h6 class="Compass-Serif-Regular">Lender</h6>
                                <q-img src="statics/logos/GuildLogo.png" style="max-width: 7rem;" />
                                <h5 class="q-my-sm">Tom Weikel</h5>
                                <p class="" style="margin: 0; font-size: .8rem;">NMLS # 243656</p>
                                <p class="" style="margin: 0; font-size: .8rem;">Phone 858.597.3772</p>
                            </div>

                            <div class="col-12 q-pa-lg" align="center">
                                <q-btn color="primary" size="md" @click="$store.commit('globalInquiryType', 'Buying'), $root.$emit('showContactFormOverlay', true)">
                                    Get Started on your preapproval
                                </q-btn>
                            </div>
                        </div>
                    </div>
                </div>

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
            slideIndex: '35238-70afc3829d7f0cdac24400a255ace4ba/60914e4b',
            showPDFButton: false,
            videoIDs: ['35238-70afc3829d7f0cdac24400a255ace4ba/60914e4b', '35238-70afc3829d7f0cdac24400a255ace4ba/7accfd4a', '35238-70afc3829d7f0cdac24400a255ace4ba/ef5b50ed'],
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
            window.open('https://richardelias.com/statics/BuyingaHomeSpring2020.pdf', '_blank')
        }
    },

    created() {
        
    }
}
</script>

<style scoped>
   
</style>
