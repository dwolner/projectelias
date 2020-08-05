<template>
    <q-page class="flex">

        <div :style="parentStyle" class="relative-position" align="center">
            <div class="whiteOverlay"></div>

            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <h2 class="Compass-Serif-Regular q-my-lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Interested in selling?</h2>
                <q-btn color="black" size="lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'right' }" @click="$store.commit('globalInquiryType', 'Selling'), $root.$emit('showContactFormOverlay', true)">
                    Sign Up For Our Free Sellers's Guide
                </q-btn>
            </div>
        </div>
            
        <div class="well" :style="innerStyle">
            <div class="row">
                <div class="col-xs-12" style="padding: 2rem 2.5rem 0;">
                    <h3 class="Compass-Serif-Regular q-mr-md" style="float: left;" v-scroll-reveal="{ delay: 0, easing: 'ease-in-out', distance: '100px', origin: 'left' }">
                        Why sell your home in 2020?
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
                    <h5 class="q-my-md" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 75 }">It's a Seller's Market</h5>

                    <p style="font-size: 1rem;" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 150 }">
                        Housing inventory is low nationwide which means there are fewer homes for buyers to choose from. There were 15.7% fewer homes for sale this March compared to 2019 according
                        to realtor.com’s March Housing Report. 
                    </p>
                    <p style="font-size: 1rem;" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 225 }">
                        Additionally, median listing prices are up nationally at $320,000, 3.8% higher than in 2019. If economic conditions worsen, the pool
                        of buyers might shrink and home prices could drop. Why wait to sell when prices are possibly going to drop?
                    </p>

                    <ul style="font-size: 1rem; font-family: 'Compass-Sans-Regular'; padding-left: 1rem;">
                        <li class="q-py-md" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 300}">Versus last year, the total number of properties available in San Diego this month is lower by 2095 units or 29.9%.</li>
                        <li class="q-py-md" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 375 }">This year's smaller inventory means that buyers who waited to buy may have smaller selection to choose from.</li>
                        <li class="q-py-md" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 425 }">The number of current inventory is up 0.4% compared to the previous month.</li>
                    </ul>
                </div>

                <div class="col-xs-12 col-md-6 q-pa-lg" align="center" v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left',  delay: 500 }">
                    <q-img class="q-mt-lg shadow-4" src="statics/compass_sellers_graph.jpg" style="max-width: 500px; border: 2px solid #1b1b1b;" />
                </div>
            </div>

            <div v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left' }" class="row q-px-lg">
                <div class="col-xs-12 col-md-4 q-pa-lg" align="center">
                    <q-img class="shadow-4" src="statics/compass_apartment.jpg" style="max-width: 250px;" />
                </div>

                <div class="col-xs-12 col-md-8 q-pa-lg">
                    <h5 class="q-my-md">Safe home selling standards and Virtual Services</h5>

                    <p style="font-size: 1rem;">
                        The safety of our clients and communities are of the utmost importance to us. During these uncertain times, we are offering a completely virtual home selling and buying experience. From digital marketing, to virtual showings, to inspection, to closing, we have the resources to bring you through the entire transaction virtually.
                    </p>
                    <p style="font-size: 1rem;">
                        However, should you feel the need to show your home to prospective buyers in person, we have the tools to guide you through a safe process.
                    </p>
                </div>
            </div>

            <div v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left' }" class="row reverse-wrap q-pa-lg">
                <div class="col-xs-12 col-md-8 q-pa-lg">
                    <h5 class="q-my-md">Interest rates are down</h5>

                    <p style="font-size: 1rem;">
                        Interest rates are expected to remain low throughout the year and there are many trends in the market showing good signs for sellers.
                    </p>
                    
                    <p style="font-size: 1rem; margin-top: 2rem;">
                        <strong>DID YOU KNOW?</strong>
                        Nationally, homes sold in 60 days in March  four days more quickly than last year!
                    </p>

                </div>
                
                <div class="col-xs-12 col-md-4 q-pa-lg" align="center">
                    <q-img class="shadow-4" src="statics/compass_money.jpg" style="max-width: 250px;" />
                </div>
            </div>
        </div>
        
        <div class="relative-position bg-black full-width" align="center">
            <div class="q-pa-xl" :style="$q.screen.width > 767 ? 'padding: 5rem;' : 'padding: 2rem;'">
                <h3 class="Compass-Serif-Regular q-my-lg text-white" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'left' }">Get started with our Sellers's Guide!</h3>
                <q-btn class="bg-white text-black" size="lg" v-scroll-reveal="{ delay: 1000, easing: 'ease-in-out', distance: '100px', origin: 'right' }"  @click="$store.commit('globalInquiryType', 'Selling'), $root.$emit('showContactFormOverlay', true)">
                    Sign Up For Our Free Seller's Guide
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
            
            <div class="col-xs-12 col-md-6 q-pa-lg" style="">
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
                                <iframe
                                    sandbox="allow-scripts"
                                    :src="`https://www.simplifyingthemarket.com/en/videos/embed/35238-70afc3829d7f0cdac24400a255ace4ba/${id}`"
                                    frameborder="0"
                                    allowfullscreen
                                    :width="videoEmbedWidth"
                                    :height="videoEmbedHeight"
                                ></iframe>
                            </q-carousel-slide>
                        </q-carousel>
                    </div>

                    <div class="col-xs-12 col-sm-6 col-md-12 q-py-xl" align="center">
                        <div id="homebot_homeowner" style="max-width: 400px;"></div>
                    </div>
                </div>
            </div>
            
        </div>

        <div class="full-width bg-grey-4">
            <div v-scroll-reveal="{ opacity: 0, duration: 1000, distance: '100px', origin: 'left' }" class="row well" :style="innerStyle">
                <div class="col-xs-12 col-sm-6 col-md-4 q-pa-xl">
                    <div class="relative-position shadow-6" style="max-width: 300px; height: 150px; background-image: url('statics/bill_testimonial.jpg'); background-size: cover; background-repeat: no-repeat; background-position: 50% 20%;" @click="showVideo = true">
                        <div class="center">
                            <q-btn flat >
                                <q-icon name="fas fa-play-circle" color="white" style="font-size: 4rem;" />
                            </q-btn>
                        </div>
                    </div>
                </div>

                <div class="col-xs-12 col-sm-6 col-md-8 q-pa-xl">
                    <h4 class="Compass-Serif-Regular q-my-md">
                        Hear it from Bill
                    </h4>
                    <p>
                        Bill sold his home with the Richard Elias team this year and was thrilled with how it went. How could you not be when you get more than what you're asking?
                    </p>
                    <p>
                        Click play to hear Bill's story.
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
                            <iframe :width="testimonialVideoWidth" :height="testimonialVideoHeight" :src="`https://www.youtube.com/embed/2yr17zwNzfA`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>
import ContactForm from '../components/ContactForm'
import Contact from '../components/Contact'
import ContactProfile from '../components/ContactProfile'

export default {
    name: 'Sellers',

    components: {
        ContactForm,
        Contact,
        ContactProfile
    },

    data() {
        return {
            slideIndex: '44be7792',
            showPDFButton: false,
            videoIDs: ['44be7792', 'ca3975e6', '710f7c6f'],
            showVideo: false
        }
    },

    computed: {
        agentID() {
            return this.$store.state.agentID
        },

        videoEmbedWidth() {
            let width = this.$q.screen.width < 1024 ? this.$q.screen.width : 1024
            return this.$q.screen.width > 599 ? (width - 128) / 3 : width - 112
        },

        videoEmbedHeight() {
            return this.videoEmbedWidth * 0.5625
        },

        testimonialVideoWidth() {
            return this.$q.screen.width - 80
        },

        testimonialVideoHeight() {
            return this.testimonialVideoWidth * 0.5625
        },

        parentStyle() {
            return `
                background-image: url('statics/house_shots/Encinitas-19.jpg');
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
            window.open('https://richardelias.com/statics/SellingYourHouseSummer2020.pdf', '_blank')
        },
    },

    mounted() {
        window.Homebot('#homebot_homeowner', '926161d8746a94461a4f2df4afa8ef7a1186cea8f0be1ff3')
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
