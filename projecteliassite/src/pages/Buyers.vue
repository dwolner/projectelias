<template>
    <q-page class="flex flex-center">
        <div :style="parentStyle" class="relative-position" align="center">
            <div class="whiteOverlay"></div>

            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <h2 class="Compass-Serif-Regular q-my-lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Interested in buying?</h2>
                <q-btn color="black" size="lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'right' }" @click="$store.commit('globalInquiryType', 'Buying'), $root.$emit('showContactFormOverlay', true)">
                    Sign Up For Our Free Buyer's Guide
                </q-btn>
            </div>
        </div>
            
        <div class="well" :style="innerStyle">
            <div class="row">
                <div class="col-xs-12" style="padding: 2.5rem 2.5rem 0;">
                    <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        Is now the right time to buy?
                    </h3>

                    <span
                        v-scroll-reveal="{ delay: index * 75, scale: 0.75, rotate: { z: -90 }, easing: 'ease-in-out', distance: '100px', origin: 'left' }"
                        v-for="(item, index) in 6"
                        :key="index"
                        class="gt-sm"
                        style="float: left;"
                    >
                        <svg
                            version="1.1"
                            id="svg"
                            class=""
                            width="50"
                            height="50"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 50 50"
                            xml:space="preserve"
                            :style="`transform: rotate(-${45 - index * 9}deg);`"
                        >
                            <rect id="svgRectangle" class="animated" x="10" y="22" width="35" height="2" fill="#000" />
                        </svg>
                    </span>
                </div>
            </div>

            <div class="row reverse-wrap q-px-lg">
                <div class="col-xs-12 col-md-6 q-pa-lg">
                    <h5 class="q-my-md" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 75 }">Housing Confidence Gaining Steam</h5>

                    <p style="font-size: 1rem;" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 150 }">
                        A recent study from Fannie Mae shows that both buyers and sellers think it's an increasingly good time to make a move.
                    </p>

                    <p style="font-size: 1rem;" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 225 }">
                        <strong>Mortgage Rate Expectations:</strong> The percentage of respondents who say mortgage rates will go down in the next 12 months decreased this month from 25% to 17%, while the percentage who expect mortgage rates to go up increased from 25% to 32%. The share who think mortgage rates will stay the same decreased from 43% to 42%. As a result, the net share of Americans who say mortgage rates will go down over the next 12 months decreased 15 percentage points.
                    </p>

                    <ul style="font-size: 1rem; font-family: 'Compass-Sans-Regular'; padding-left: 1rem;">
                        <li class="q-my-sm" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 300 }">Buyer demand will remain strong as individuals seek lifestyle changes and prioritize their home environment.</li>
                        <li class="q-my-sm" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 375 }">Buyers will have to remain patient, since there is less inventory than usual.</li>
                        <li class="q-my-sm" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 425 }">Ultimately you will have to decide for yourself if now is the right time to buy for you.</li>
                    </ul>
                </div>

                <div class="col-xs-12 col-md-6 q-pa-lg" align="center" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 500 }">
                    <q-img class="q-mt-lg shadow-4" src="statics/HPSI_Page_01.png" style="max-width: 500px; border: 2px solid #1b1b1b;" />
                    <p class="q-mt-sm q-mx-sm" style="font-size: .8rem; font-style: italic;">
                        The percentage of respondents who say it is a good time to buy a home increased from 52% to 61%, while the percentage who say it is a bad time to buy decreased from 39% to 27%. As a result, the net share of Americans who say it is a good time to buy increased 21 percentage points.
                    </p>
                </div>
            </div>

            <div v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left' }" class="row q-pa-lg">
                <div class="col-xs-12 col-md-4 q-pa-lg" align="center">
                    <q-img class="shadow-4" src="statics/compass_money.jpg" style="max-width: 250px;" />
                </div>
                
                <div class="col-xs-12 col-md-8 q-pa-lg">
                    <h5 class="q-my-md">Interest rates are down</h5>

                    <p style="font-size: 1rem;">
                        Interest rates are expected to remain low throughout the year and there are many trends in the market showing good signs for buyers.
                    </p>

                </div>
            </div>

            <div v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left' }" class="row reverse-wrap q-px-lg q-pb-lg">
                <div class="col-xs-12 col-md-8 q-pa-lg">
                    <h5 class="q-mb-md">Start your preapproval now</h5>

                    <p style="font-size: 1rem;">
                        From Tom: "In my career I have navigated many cycles in the real estate industry. Guild Mortgage is a fifty year old San Diego based corporation with a broad array of loan programs and staff expertise unmatched in the mortgage banking industry. The combination of my experience and Guild's strength allow me to put together the loan package that best meets my clients' needs."
                    </p>

                </div>

                <div class="col-xs-12 col-md-4 row well relative-position" style="min-height: 1rem; max-width: 320px;">
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
        
        <div class="relative-position bg-black full-width" align="center">
            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <h3 class="Compass-Serif-Regular q-my-lg text-white" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Get started with our Buyer's Guide!</h3>
                <q-btn class="bg-white text-black" size="lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'right' }"  @click="$store.commit('globalInquiryType', 'Buying'), $root.$emit('showContactFormOverlay', true)">
                    Sign Up For Our Free Buyer's Guide
                </q-btn>
            </div>
        </div>

        <div class="row well" :style="innerStyle">

            <div class="col-xs-12 col-md-6 q-pa-md row" v-scroll-reveal="{ delay: 500, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">
                <div class="col-xs-12 q-pa-md">
                    <h3 class="Compass-Serif-Regular" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Who are we?</h3>
                    <ContactProfile class="q-my-md" showAbout="true" />
                </div>
            </div>
            
            <div class="col-xs-12 col-md-6 q-pa-lg"  v-scroll-reveal="{ delay: 750, easing: 'ease-in-out', distance: '100px', origin: 'bottom' }">
                <div class="row well justify-center relative-position flex flex-center" style="height: 100%; border: 2px solid rgb(11, 11, 11);">

                    <div class="col-xs-12 q-pa-md" align="center">
                        <h4 class="q-mt-md">How To Get Started Buying</h4>

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
                            style="max-width: 500px; margin: 0 auto; background: rgba(0, 0, 0, 0);"
                        >
                            <q-carousel-slide v-for="(id, index) in videoIDs" :key="index" :name="id" class="column no-wrap flex-center" style="padding-bottom: 50px; padding-top: 25px;">
                                <iframe sandbox="allow-scripts" :src="`https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/${ id }`" frameborder="0" allowfullscreen :width="videoEmbedWidth" :height="videoEmbedHeight"></iframe>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>
                    
                    <div class="col-12 q-pa-lg" align="center">
                        <OnTheMarket />
                    </div>
                </div>
            </div>
            
        </div>

        <div class="full-width bg-grey-4">
            <div class="row well" :style="innerStyle">
                <div class="col-xs-12 col-sm-6 col-md-4 q-pa-xl">
                    <div class="relative-position shadow-6" style="max-width: 300px; height: 150px; background-image: url('statics/rhinolisatestimonial.png'); background-size: cover; background-repeat: no-repeat; background-position: 50% 20%;" @click="showVideo = true">
                        <div class="center">
                            <q-btn flat >
                                <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                            </q-btn>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-8 q-pa-xl">
                    <h4 class="Compass-Serif-Regular q-my-md">
                        Hear it from Rhino and Lisa
                    </h4>
                    <p>
                        Rhino and Lisa bought their home with the Richard Elias team and was thrilled with how it went. How could you not be when you get more than what you're asking?
                    </p>
                    <p>
                        Click play to hear their story.
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-black" style="position: relative; width: 100%; height: auto;"> 
            <div class="overlay"></div>
            <Contact />
        </div>

        <q-dialog maximized v-model="showVideo" @show="showVideo = true" @hide="showVideo = false">
            <q-card>
                <q-card-section style="padding: .25rem;">
                    <q-btn class="absolute" round flat size="sm" color="white" @click="showVideo = false" style="top: .5rem; right: .5rem; z-index: 999;">
                        <q-icon name="fas fa-times" color="black" />
                    </q-btn>
                    
                    <div class="flex flex-center" style="padding: 40px; height: calc(100vh - 25px);">
                        <div>
                            <iframe :width="testimonialVideoWidth" :height="testimonialVideoHeight" :src="`https://www.youtube.com/embed/_lneDbg6bCs`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>

    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'
import ContactProfile from '../components/ContactProfile'
import Contact from '../components/Contact'
import OnTheMarket from '../components/OnTheMarket'

export default {
    name: 'Buyers',

    components: {
        ContactForm,
        ContactProfile,
        Contact,
        OnTheMarket
    },

    data() {
        return {
            slideIndex: '60914e4b',
            showPDFButton: false,
            showVideo: false,
            videoIDs: ['60914e4b', '7accfd4a', 'ef5b50ed'],
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

        testimonialVideoWidth() {
            return this.$q.screen.width - 80
        },

        testimonialVideoHeight() {
            return this.testimonialVideoWidth * 0.5625
        },

        parentStyle() {
            return `
                background-image: url('statics/house_shots/CA-SanDiego-RanchoSantaFe-128.jpg');
                background-size: cover;
                background-position: 50%;
                width: 100%;
            `
        },

        innerStyle() {
            return `
                width: 100%;
                margin: 3rem auto;
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
   .whiteOverlay {
        background: rgba(255, 255, 255, 0.5);
        height: 100%;
        width: 100%;
        position: absolute;
    }
</style>
