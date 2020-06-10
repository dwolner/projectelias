<template>
    <q-page class="flex flex-center">
        <div :style="parentStyle">
            <div class="row well" :style="innerStyle">

                <div class="col-xs-12" style="padding: 2rem 2.5rem 0;">
                    <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal.reset="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Interested in buying?</h3>
                    
                    <span class="gt-sm" v-for="(item, index) in 6" v-scroll-reveal.reset="{ delay: index * 75, scale: .75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }" style="float: left;">
                        <svg version="1.1" id="svg" class="" width="50" height="50"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 50 50" xml:space="preserve" :style="`transform: rotate(-${ 45 - index * 9 }deg);`">
                            <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#000" />
                        </svg>
                    </span>
                </div>

                <div class="col-xs-12 col-md-6 q-pa-md" v-scroll-reveal.reset="{ delay: 500, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">
                    <div class="col-12 q-px-lg">
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

                    <div class="col-12">
                        <OnTheMarket />
                    </div>
                </div>
                
                <div class="col-xs-12 col-md-6 q-pa-lg"  v-scroll-reveal.reset="{ delay: 750, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">

                    <div class="row well justify-center relative-position" style="height: 100%; border: 2px solid rgb(11, 11, 11);">

                        <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
                            <h4>How To Get Started Buying</h4>

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

                            <div class="row well relative-position" style="min-height: 1rem; max-width: 320px;">
                                <div class="col-xs-6 q-pr-md" align="right">
                                    <q-img src="statics/team/Tom_lender.jpg" style="max-width: 7.5rem;" />
                                </div>

                                <div class="col-xs-6" align="left">
                                    <h6 class="Compass-Serif-Regular">Lender</h6>
                                    <q-img src="statics/logos/GuildLogo.png" style="max-width: 7rem;" />
                                    <h5 class="q-my-sm">Tom Weikel</h5>
                                    <p class="" style="margin: 0; font-size: .8rem;">NMLS # 243656</p>
                                    <p class="" style="margin: 0; font-size: .8rem;">Phone 858.597.3772</p>
                                </div>

                                <div class="col-12 q-pa-lg" align="center">
                                    <q-btn class="full-width" color="primary" size="md" @click="$store.commit('globalInquiryType', 'Buying'), $root.$emit('showContactFormOverlay', true)">
                                        Start your preapproval
                                    </q-btn>
                                </div>
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
import OnTheMarket from '../components/OnTheMarket'

export default {
    name: 'Buyers',

    components: {
        ContactForm,
        OnTheMarket
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
        },

        parentStyle() {
            return `
                background-image: url('statics/house_shots/CA-SanDiego-RanchoSantaFe-128.jpg');
                background-size: cover;
                width: 100%;
                ${this.$q.screen.width > 767 ? 'padding: 3rem;' : ''}
            `
        },

        innerStyle() {
            return `
                background: rgba(255, 255, 255, .85);
                max-width: 1300px;
                width: 100%;
            `
        },
    },

    methods: {
        success() {
            this.showPDFButton = true
            this.scrollToElement('pdfbutton')
        },

        goToPDF() {
            window.open('https://richardelias.com/statics/BuyingaHomeSummer2020.pdf', '_blank')
        }
    },

    created() {
        
    }
}
</script>

<style scoped>
   
</style>
